# Firebase Setup Guide — BizBazar Phone Auth

Follow these steps once to connect BizBazar to Firebase. Takes ~10 minutes.

---

## 1. Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `bizbazar` → Continue
3. Disable Google Analytics if you don't need it → **Create project**

---

## 2. Enable Phone Authentication

1. In the Firebase Console, go to **Build → Authentication → Sign-in method**
2. Click **Phone** → Enable it → Save
3. Under **Authorized domains**, add `bizbazar.az` (and `localhost` for local testing)

---

## 3. Create a Firestore database

1. Go to **Build → Firestore Database** → **Create database**
2. Choose **Start in production mode** → select your region (e.g. `europe-west3`) → Done
3. Go to the **Rules** tab and paste these security rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can read/write their own profile
    match /users/{uid} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == uid;
    }

    // Favorites: only the owner
    match /favorites/{uid}/items/{itemId} {
      allow read, write: if request.auth.uid == uid;
    }

    // Conversations: participants only
    match /conversations/{convId} {
      allow read, write: if request.auth.uid in resource.data.participants
                         || request.auth.uid in request.resource.data.participants;

      match /messages/{msgId} {
        allow read: if request.auth.uid in get(/databases/$(database)/documents/conversations/$(convId)).data.participants;
        allow create: if request.auth.uid in get(/databases/$(database)/documents/conversations/$(convId)).data.participants
                      && request.auth.uid == request.resource.data.senderId;
      }
    }
  }
}
```

4. Click **Publish**

---

## 4. Add a Web app and copy the config

1. In Project Overview, click the **</>** (Web) icon → Register app → name it `bizbazar-web`
2. Firebase will show you a config object like:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "bizbazar-xxx.firebaseapp.com",
  projectId: "bizbazar-xxx",
  storageBucket: "bizbazar-xxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abc123"
};
```

3. Open `js/firebase.js` in this project and replace the placeholder values with your real ones.

---

## 5. Test locally

```bash
cd "GitHub projects/bizbazar"
python3 -m http.server 8000
# Open http://localhost:8000/auth.html
```

Enter your phone number with the `+994` prefix already filled in. You'll receive a real SMS.

---

## 6. Notes on SMS costs

Firebase Phone Auth includes a free quota of **~10,000 SMS/month** on the Spark (free) plan. For production volume, upgrade to Blaze (pay-as-you-go).

---

## File overview

| File | Purpose |
|------|---------|
| `js/firebase.js` | Firebase init, auth, Firestore helpers |
| `auth.html` | Phone login + OTP verification page |
| `profile.html` | User profile — view/edit name, see stats |
| `messages.html` | Real-time inbox + chat |

The header on every page now shows a **Sign in** link when logged out, and your **avatar + messages icon** when logged in.
