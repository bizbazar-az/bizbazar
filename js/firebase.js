// ============================================================
// BizBazar — Firebase module
// Handles: Phone Auth (OTP), User Profiles, Favorites, Messaging
// ============================================================
// SETUP: Replace the firebaseConfig values below with your own
// from the Firebase Console → Project Settings → Your apps → Web app
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  signOut,
  updateProfile as fbUpdateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc, getDoc, setDoc, updateDoc, deleteDoc,
  collection, query, where, orderBy, limit,
  onSnapshot, addDoc, serverTimestamp, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ── Your Firebase project config ────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyCSEjbO4XFwtU_EVyn1S0HzaV6yPc0tRu0",
  authDomain:        "bizbazar-c4824.firebaseapp.com",
  projectId:         "bizbazar-c4824",
  storageBucket:     "bizbazar-c4824.firebasestorage.app",
  messagingSenderId: "149276039731",
  appId:             "1:149276039731:web:b2432a28553cd327c7e146",
  measurementId:     "G-1R5MZ3LFRB"
};
// ─────────────────────────────────────────────────────────────

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// ── Auth state ───────────────────────────────────────────────
export { auth, db, onAuthStateChanged, signOut };

export function getCurrentUser() {
  return auth.currentUser;
}

// ── Phone OTP flow ───────────────────────────────────────────
let confirmationResult = null;

/**
 * Set up invisible reCAPTCHA and send OTP.
 * @param {string} phoneNumber  E.164 format, e.g. "+994501234567"
 * @param {string} buttonId     ID of the submit button (used as reCAPTCHA anchor)
 */
export async function sendOTP(phoneNumber, buttonId = "otp-send-btn") {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, buttonId, {
    size: "invisible",
    callback: () => {}
  });
  confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
  return confirmationResult;
}

/**
 * Verify the 6-digit OTP the user typed.
 * Returns the Firebase User object on success.
 */
export async function verifyOTP(code) {
  if (!confirmationResult) throw new Error("No OTP session. Please send OTP first.");
  const credential = await confirmationResult.confirm(code);
  return credential.user;
}

// ── User profiles (Firestore: users/{uid}) ───────────────────
export async function getProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

export async function createOrUpdateProfile(uid, data) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { ...data, updatedAt: serverTimestamp() });
  } else {
    await setDoc(ref, {
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      avatarColor: randomAvatarColor(),
      ...data
    });
  }
}

function randomAvatarColor() {
  const colors = ["#1a2744","#c9a227","#10b981","#6366f1","#f59e0b","#ef4444"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// ── Favorites (Firestore: favorites/{uid}/items/{listingId}) ──
export async function getFirestoreFavorites(uid) {
  const snap = await getDocs(collection(db, "favorites", uid, "items"));
  return snap.docs.map(d => d.id);
}

export async function addFirestoreFavorite(uid, listingId) {
  await setDoc(doc(db, "favorites", uid, "items", listingId), {
    addedAt: serverTimestamp()
  });
}

export async function removeFirestoreFavorite(uid, listingId) {
  await deleteDoc(doc(db, "favorites", uid, "items", listingId));
}

export async function toggleFirestoreFavorite(uid, listingId) {
  const ref = doc(db, "favorites", uid, "items", listingId);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await deleteDoc(ref);
    return false;
  } else {
    await setDoc(ref, { addedAt: serverTimestamp() });
    return true;
  }
}

// ── Conversations (Firestore: conversations/{convId}) ─────────
/**
 * Find or create a conversation between two users about a listing.
 * Returns the conversation document ID.
 */
export async function getOrCreateConversation(buyerUid, sellerUid, listingId, listingTitle) {
  // check if conversation already exists
  const q = query(
    collection(db, "conversations"),
    where("listingId", "==", listingId),
    where("participants", "array-contains", buyerUid)
  );
  const snap = await getDocs(q);
  for (const d of snap.docs) {
    if (d.data().participants.includes(sellerUid)) return d.id;
  }
  // create new
  const ref = await addDoc(collection(db, "conversations"), {
    listingId,
    listingTitle,
    participants: [buyerUid, sellerUid],
    lastMessage: "",
    lastMessageAt: serverTimestamp(),
    createdAt: serverTimestamp(),
    unreadCount: { [buyerUid]: 0, [sellerUid]: 0 }
  });
  return ref.id;
}

/**
 * Listen to all conversations for a user (real-time).
 * callback receives array of {id, ...data} sorted by lastMessageAt desc.
 */
export function listenConversations(uid, callback) {
  const q = query(
    collection(db, "conversations"),
    where("participants", "array-contains", uid),
    orderBy("lastMessageAt", "desc")
  );
  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

/**
 * Listen to messages inside a conversation (real-time).
 */
export function listenMessages(convId, callback) {
  const q = query(
    collection(db, "conversations", convId, "messages"),
    orderBy("createdAt", "asc"),
    limit(200)
  );
  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

/**
 * Send a message in a conversation.
 */
export async function sendMessage(convId, senderUid, text) {
  const ts = serverTimestamp();
  await addDoc(collection(db, "conversations", convId, "messages"), {
    senderId: senderUid,
    text: text.trim(),
    createdAt: ts,
    read: false
  });
  // update conversation summary
  await updateDoc(doc(db, "conversations", convId), {
    lastMessage: text.trim().slice(0, 100),
    lastMessageAt: ts
  });
}
