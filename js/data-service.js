// BizBazar backend/data access layer.
// Keeps Firebase reads/writes in one place and falls back to static/local data
// so the static MVP remains usable while Firestore rules are being finalized.

const STATIC_LISTINGS_PATH = "data/listings.json";
const FALLBACK_QUEUE_KEY = "bb_backend_fallback_queue";
const LEGACY_LEADS_KEY = "bb_leads";

export const COLLECTIONS = {
  sellerSubmissions: "sellerSubmissions",
  contactInquiries: "contactInquiries",
  serviceRequests: "serviceRequests",
  ndaRequests: "ndaRequests",
  listings: "listings"
};

export const REVIEW_STATUSES = [
  "new",
  "pending_review",
  "approved",
  "rejected",
  "contacted",
  "completed"
];

// Temporary MVP admin gate. Prefer custom claims or Firestore role documents
// before production. For phone-auth admins, add the Firebase UID here locally.
export const MVP_ADMIN_EMAILS = ["admin@bizbazar.az"];
export const MVP_ADMIN_UIDS = [];

// Public-safe allowlist only. Sensitive fields that were previously listed here
// (source_url, lat, lng, verified, docs_reviewed, rating, reviews, views, phone,
// monthly_revenue_azn, monthly_profit_azn, monthly_rent_azn) have been removed so
// the public mapper can never re-expose them, even if upstream data still carries them.
export const PUBLIC_LISTING_FIELDS = [
  "id",
  "title_az",
  "title_en",
  "title_ru",
  "category",
  "city",
  "district",
  "price_azn",
  "area_m2",
  "staff_count",
  "operating_years",
  "equipment_included",
  "license_included",
  "reason_az",
  "reason_en",
  "reason_ru",
  "seller_type",
  "posted_date",
  "featured",
  "description_az",
  "description_en",
  "description_ru",
  "whatsapp",
  "telegram",
  "broker_id"
];

export const PRIVATE_LISTING_FIELDS = [
  "monthly_revenue_azn",
  "monthly_profit_azn",
  "monthly_rent_azn",
  "profit_margin",
  "payback_months",
  "financial_notes",
  "documents",
  "document_urls",
  "seller_name",
  "seller_email",
  "phone",
  "owner_details",
  "tax_id",
  "bank_statements",
  "lease_document_url"
];

// Forward an analytics event to the global tracker defined in js/app.js.
// No-ops silently if the tracker is unavailable (e.g. app.js not loaded).
function track(name, props) {
  try {
    if (typeof window !== "undefined" && typeof window.trackEvent === "function") {
      window.trackEvent(name, props || {});
    }
  } catch (_) {
    // Analytics must never break a data write.
  }
}

let firebaseModulePromise = null;

function forceLocalBackend() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return window.BB_FORCE_LOCAL_BACKEND === true || params.get("backend") === "local";
}

async function getFirebaseModule() {
  if (forceLocalBackend()) return null;
  if (!firebaseModulePromise) {
    firebaseModulePromise = import("./firebase.js").catch(() => null);
  }
  return firebaseModulePromise;
}

function hasFirestore(fb) {
  return Boolean(
    fb &&
    fb.db &&
    fb.collection &&
    fb.addDoc &&
    fb.getDocs &&
    fb.doc &&
    fb.getDoc &&
    fb.updateDoc &&
    fb.serverTimestamp
  );
}

function nowIso() {
  return new Date().toISOString();
}

function timestampFor(fb) {
  return hasFirestore(fb) ? fb.serverTimestamp() : nowIso();
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function textOrEmpty(value) {
  return String(value ?? "").trim();
}

function boolFromForm(value) {
  return value === true || value === "true" || value === "yes" || value === "on" || value === "1";
}

function firstValue(data, keys) {
  for (const key of keys) {
    if (data && data[key] !== undefined && data[key] !== null && data[key] !== "") return data[key];
  }
  return "";
}

function cleanPayload(obj) {
  const out = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value === undefined) return;
    const proto = value && typeof value === "object" ? Object.getPrototypeOf(value) : null;
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      !(value instanceof Date) &&
      (proto === Object.prototype || proto === null)
    ) {
      out[key] = cleanPayload(value);
    } else {
      out[key] = value;
    }
  });
  return out;
}

function saveFallbackRecord(type, payload) {
  const record = {
    id: `${type}_${Date.now()}`,
    type,
    status: payload.status || "new",
    createdAt: nowIso(),
    updatedAt: nowIso(),
    payload
  };
  if (typeof localStorage === "undefined") return record;
  let queue = [];
  try { queue = JSON.parse(localStorage.getItem(FALLBACK_QUEUE_KEY) || "[]"); } catch (_) {}
  queue.unshift(record);
  localStorage.setItem(FALLBACK_QUEUE_KEY, JSON.stringify(queue.slice(0, 200)));
  return record;
}

function getFallbackQueue() {
  if (typeof localStorage === "undefined") return [];
  let queue = [];
  let legacy = [];
  try { queue = JSON.parse(localStorage.getItem(FALLBACK_QUEUE_KEY) || "[]"); } catch (_) {}
  try { legacy = JSON.parse(localStorage.getItem(LEGACY_LEADS_KEY) || "[]"); } catch (_) {}
  const mappedLegacy = legacy.map(item => ({
    id: item.id || `legacy_${Date.now()}`,
    type: item.type || "legacy",
    status: "new",
    createdAt: item.createdAt || "",
    updatedAt: item.createdAt || "",
    payload: item.payload || item
  }));
  return [...queue, ...mappedLegacy];
}

function fallbackRecordsFor(collectionName) {
  const typeMap = {
    sellerSubmissions: ["sellerSubmission", "seller_listing"],
    contactInquiries: ["contactInquiry", "contact"],
    serviceRequests: ["serviceRequest"],
    ndaRequests: ["ndaRequest", "nda_request"]
  };
  const types = typeMap[collectionName] || [];
  return getFallbackQueue()
    .filter(record => types.includes(record.type))
    .map(record => ({
      id: record.id,
      status: record.status || record.payload?.status || "new",
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      _fallback: true,
      ...(record.payload || {})
    }));
}

function updateFallbackStatus(collectionName, id, status, note) {
  if (typeof localStorage === "undefined") return false;
  let queue = [];
  try { queue = JSON.parse(localStorage.getItem(FALLBACK_QUEUE_KEY) || "[]"); } catch (_) {}
  let updated = false;
  queue = queue.map(record => {
    if (record.id !== id) return record;
    updated = true;
    return {
      ...record,
      status,
      updatedAt: nowIso(),
      payload: {
        ...(record.payload || {}),
        status,
        approvalNote: note || record.payload?.approvalNote || "",
        reviewedAt: nowIso()
      }
    };
  });
  localStorage.setItem(FALLBACK_QUEUE_KEY, JSON.stringify(queue));
  return updated;
}

async function addDocument(collectionName, payload, fallbackType) {
  const fb = await getFirebaseModule();
  const clean = cleanPayload(payload);
  if (!hasFirestore(fb)) {
    const fallback = saveFallbackRecord(fallbackType, clean);
    return {
      ok: true,
      mode: "fallback",
      id: fallback.id,
      message: "Firebase is unavailable, so the request was stored locally for MVP QA."
    };
  }

  try {
    const ref = await fb.addDoc(fb.collection(fb.db, collectionName), clean);
    return {
      ok: true,
      mode: "firestore",
      id: ref.id,
      message: "Request received and queued for team review."
    };
  } catch (error) {
    const fallback = saveFallbackRecord(fallbackType, clean);
    return {
      ok: true,
      mode: "fallback",
      id: fallback.id,
      errorCode: error?.code || "firestore_write_failed",
      message: "Firebase write failed, so the request was stored locally as a backup."
    };
  }
}

async function loadStaticListings() {
  const resp = await fetch(STATIC_LISTINGS_PATH);
  if (!resp.ok) throw new Error("Failed to load static listings.");
  const listings = await resp.json();
  return listings.map(listing => ({
    ...listing,
    _dataSource: "static_json",
    _privateDataWarning: "Static JSON still contains sensitive fields and must move to private backend collections before production."
  }));
}

export function sanitizePublicListing(listing) {
  const publicListing = {};
  PUBLIC_LISTING_FIELDS.forEach(field => {
    if (listing[field] !== undefined) publicListing[field] = listing[field];
  });
  publicListing.id = listing.id || listing.slug || "";
  publicListing.status = listing.status || "approved";
  publicListing._dataSource = listing._dataSource || "firestore";
  return publicListing;
}

export function splitListingFields(listing) {
  const publicData = sanitizePublicListing(listing);
  const privateData = {};
  PRIVATE_LISTING_FIELDS.forEach(field => {
    if (listing[field] !== undefined) privateData[field] = listing[field];
  });
  return { publicData, privateData };
}

export async function getListings() {
  const fb = await getFirebaseModule();
  if (hasFirestore(fb)) {
    try {
      const listingsRef = fb.collection(fb.db, COLLECTIONS.listings);
      const q = fb.query(listingsRef, fb.where("status", "==", "approved"));
      const snap = await fb.getDocs(q);
      const listings = snap.docs
        .map(docSnap => sanitizePublicListing({ id: docSnap.id, ...docSnap.data() }))
        .sort((a, b) => String(b.posted_date || b.createdAt || "").localeCompare(String(a.posted_date || a.createdAt || "")));
      if (listings.length) return listings;
    } catch (_) {
      // Fall through to static data. The UI should keep working if rules/indexes are not ready.
    }
  }
  return loadStaticListings();
}

export async function getListingById(id) {
  const fb = await getFirebaseModule();
  if (hasFirestore(fb) && id) {
    try {
      const snap = await fb.getDoc(fb.doc(fb.db, COLLECTIONS.listings, id));
      if (snap.exists()) {
        const data = { id: snap.id, ...snap.data() };
        if ((data.status || "approved") === "approved") return sanitizePublicListing(data);
      }
    } catch (_) {
      // Fall through to static data.
    }
  }
  const listings = await loadStaticListings();
  return listings.find(listing => listing.id === id) || null;
}

export async function submitSellerListing(input) {
  const fb = await getFirebaseModule();
  const user = fb?.auth?.currentUser || null;
  const ts = timestampFor(fb);
  const payload = {
    businessName: textOrEmpty(firstValue(input, ["businessName", "business_name"])),
    industry: textOrEmpty(firstValue(input, ["industry", "category"])),
    category: textOrEmpty(firstValue(input, ["category", "industry"])),
    location: {
      city: textOrEmpty(firstValue(input, ["city"])),
      district: textOrEmpty(firstValue(input, ["district"])),
      areaM2: numberOrNull(firstValue(input, ["areaM2", "area_m2"]))
    },
    askingPrice: numberOrNull(firstValue(input, ["askingPrice", "price_azn"])),
    monthlyRevenue: numberOrNull(firstValue(input, ["monthlyRevenue", "monthly_revenue_azn"])),
    monthlyProfit: numberOrNull(firstValue(input, ["monthlyProfit", "monthly_profit_azn"])),
    reasonForSale: textOrEmpty(firstValue(input, ["reasonForSale", "reason_for_sale"])),
    staffCount: numberOrNull(firstValue(input, ["staffCount", "staff_count"])),
    operatingYears: numberOrNull(firstValue(input, ["operatingYears", "operating_years"])),
    description: textOrEmpty(firstValue(input, ["description"])),
    confidentialListing: boolFromForm(firstValue(input, ["confidentialListing", "confidential_listing"])),
    sellerConsent: boolFromForm(firstValue(input, ["seller_consent", "sellerConsent"])),
    sellerName: textOrEmpty(firstValue(input, ["sellerName", "seller_name", "name"])),
    sellerEmail: textOrEmpty(firstValue(input, ["sellerEmail", "seller_email", "email"])),
    sellerPhone: textOrEmpty(firstValue(input, ["sellerPhone", "seller_phone", "phone"])),
    status: "pending_review",
    sourcePage: textOrEmpty(firstValue(input, ["sourcePage"])) || "sell.html",
    submittedByUserId: user?.uid || null,
    createdAt: ts,
    updatedAt: ts
  };
  const result = await addDocument(COLLECTIONS.sellerSubmissions, payload, "sellerSubmission");
  track("seller_submit", {
    category: payload.category || payload.industry || "",
    city: payload.location?.city || "",
    confidential: Boolean(payload.confidentialListing),
    consent: Boolean(payload.sellerConsent),
    mode: result?.mode || "",
    ok: Boolean(result?.ok)
  });
  return result;
}

export async function submitContactInquiry(input) {
  const fb = await getFirebaseModule();
  const user = fb?.auth?.currentUser || null;
  const ts = timestampFor(fb);
  const payload = {
    name: textOrEmpty(firstValue(input, ["name"])),
    email: textOrEmpty(firstValue(input, ["email"])),
    phone: textOrEmpty(firstValue(input, ["phone"])),
    subject: textOrEmpty(firstValue(input, ["subject", "topic"])) || "BizBazar.az contact form",
    topic: textOrEmpty(firstValue(input, ["topic"])),
    message: textOrEmpty(firstValue(input, ["message"])),
    relatedListingId: textOrEmpty(firstValue(input, ["relatedListingId", "listing_id"])),
    relatedListingTitle: textOrEmpty(firstValue(input, ["relatedListingTitle", "listing_title"])),
    relatedService: textOrEmpty(firstValue(input, ["relatedService", "service"])),
    status: "new",
    sourcePage: textOrEmpty(firstValue(input, ["sourcePage"])) || "contact.html",
    submittedByUserId: user?.uid || null,
    createdAt: ts
  };
  const result = await addDocument(COLLECTIONS.contactInquiries, payload, "contactInquiry");
  track("contact_submit", {
    topic: payload.topic || "",
    related_listing_id: payload.relatedListingId || "",
    related_service: payload.relatedService || "",
    source_page: payload.sourcePage || "",
    mode: result?.mode || "",
    ok: Boolean(result?.ok)
  });
  return result;
}

export async function submitServiceRequest(input) {
  const fb = await getFirebaseModule();
  const user = fb?.auth?.currentUser || null;
  const ts = timestampFor(fb);
  const serviceType = textOrEmpty(firstValue(input, ["serviceType", "service", "topic"])) || "service";
  const payload = {
    serviceType,
    name: textOrEmpty(firstValue(input, ["name"])),
    email: textOrEmpty(firstValue(input, ["email"])),
    phone: textOrEmpty(firstValue(input, ["phone"])),
    message: textOrEmpty(firstValue(input, ["message"])),
    status: "new",
    sourcePage: textOrEmpty(firstValue(input, ["sourcePage"])) || "contact.html",
    submittedByUserId: user?.uid || null,
    createdAt: ts
  };
  const result = await addDocument(COLLECTIONS.serviceRequests, payload, "serviceRequest");
  // Valuation leads come through the service-request path with serviceType "valuation".
  const eventName = serviceType === "valuation" ? "valuation_lead" : "service_request";
  track(eventName, {
    service_type: serviceType,
    source_page: payload.sourcePage || "",
    mode: result?.mode || "",
    ok: Boolean(result?.ok)
  });
  return result;
}

export async function submitInquiry(input) {
  const topic = textOrEmpty(firstValue(input, ["topic"]));
  const relatedService = textOrEmpty(firstValue(input, ["relatedService", "service"]));
  if (topic === "service" || topic === "valuation" || relatedService) {
    return submitServiceRequest({
      ...input,
      serviceType: relatedService || topic
    });
  }
  return submitContactInquiry(input);
}

export async function submitNdaRequest(input) {
  const fb = await getFirebaseModule();
  const user = fb?.auth?.currentUser || null;
  const ts = timestampFor(fb);
  const payload = {
    listingId: textOrEmpty(firstValue(input, ["listingId", "listing_id"])),
    listingTitle: textOrEmpty(firstValue(input, ["listingTitle", "listing_title"])),
    requesterName: textOrEmpty(firstValue(input, ["requesterName", "name"])) || user?.displayName || "",
    requesterEmail: textOrEmpty(firstValue(input, ["requesterEmail", "email"])) || user?.email || "",
    requesterPhone: textOrEmpty(firstValue(input, ["requesterPhone", "phone"])) || user?.phoneNumber || "",
    requesterUserId: user?.uid || null,
    status: "pending_review",
    approvalNote: "",
    reviewedAt: null,
    reviewedBy: null,
    sourcePage: textOrEmpty(firstValue(input, ["sourcePage"])) || "listing.html",
    createdAt: ts
  };
  const result = await addDocument(COLLECTIONS.ndaRequests, payload, "ndaRequest");
  track("nda_request", {
    listing_id: payload.listingId || "",
    source_page: payload.sourcePage || "",
    mode: result?.mode || "",
    ok: Boolean(result?.ok)
  });
  return result;
}

export async function isAdminUser(user) {
  if (!user) return false;
  const email = String(user.email || "").toLowerCase();
  if (MVP_ADMIN_UIDS.includes(user.uid)) return true;
  if (email && MVP_ADMIN_EMAILS.map(item => item.toLowerCase()).includes(email)) return true;
  const fb = await getFirebaseModule();
  if (!hasFirestore(fb) || !fb.getProfile) return false;
  try {
    const profile = await fb.getProfile(user.uid);
    return profile?.role === "admin" || profile?.isAdmin === true;
  } catch (_) {
    return false;
  }
}

async function requireAdmin() {
  const fb = await getFirebaseModule();
  const user = fb?.auth?.currentUser || null;
  if (!user) throw new Error("Admin sign-in is required.");
  const allowed = await isAdminUser(user);
  if (!allowed) throw new Error("This account is not allowed to access admin review.");
  return { fb, user };
}

async function readCollection(fb, collectionName) {
  try {
    const q = fb.query(fb.collection(fb.db, collectionName), fb.orderBy("createdAt", "desc"));
    const snap = await fb.getDocs(q);
    return snap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
  } catch (_) {
    const snap = await fb.getDocs(fb.collection(fb.db, collectionName));
    return snap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
  }
}

export async function getAdminReviewData() {
  try {
    const { fb } = await requireAdmin();
    const [sellerSubmissions, contactInquiries, serviceRequests, ndaRequests] = await Promise.all([
      readCollection(fb, COLLECTIONS.sellerSubmissions),
      readCollection(fb, COLLECTIONS.contactInquiries),
      readCollection(fb, COLLECTIONS.serviceRequests),
      readCollection(fb, COLLECTIONS.ndaRequests)
    ]);
    return {
      ok: true,
      mode: "firestore",
      sellerSubmissions,
      contactInquiries,
      serviceRequests,
      ndaRequests
    };
  } catch (error) {
    return {
      ok: false,
      mode: "fallback",
      message: error?.message || "Admin data could not be loaded from Firestore.",
      sellerSubmissions: fallbackRecordsFor(COLLECTIONS.sellerSubmissions),
      contactInquiries: fallbackRecordsFor(COLLECTIONS.contactInquiries),
      serviceRequests: fallbackRecordsFor(COLLECTIONS.serviceRequests),
      ndaRequests: fallbackRecordsFor(COLLECTIONS.ndaRequests)
    };
  }
}

export async function updateReviewStatus(collectionName, id, status, note = "") {
  if (!Object.values(COLLECTIONS).includes(collectionName)) throw new Error("Unknown collection.");
  if (!REVIEW_STATUSES.includes(status)) throw new Error("Unknown status.");
  if (!id) throw new Error("Missing record ID.");

  try {
    const { fb, user } = await requireAdmin();
    await fb.updateDoc(fb.doc(fb.db, collectionName, id), {
      status,
      approvalNote: note,
      reviewedAt: fb.serverTimestamp(),
      reviewedBy: user.uid,
      updatedAt: fb.serverTimestamp()
    });
    return { ok: true, mode: "firestore" };
  } catch (error) {
    const updated = updateFallbackStatus(collectionName, id, status, note);
    if (updated) return { ok: true, mode: "fallback" };
    throw error;
  }
}

export function mapSellerSubmissionToListingDraft(submission) {
  const id = submission.id || `submission_${Date.now()}`;
  return {
    sourceSubmissionId: id,
    status: "draft",
    moderationStatus: "approved_submission",
    title_az: submission.businessName || "Yeni biznes elani",
    category: submission.category || submission.industry || "",
    city: submission.location?.city || "",
    district: submission.location?.district || "",
    price_azn: submission.askingPrice || null,
    area_m2: submission.location?.areaM2 || null,
    staff_count: submission.staffCount || null,
    operating_years: submission.operatingYears || null,
    seller_type: "owner",
    confidential: Boolean(submission.confidentialListing),
    seller_consent: Boolean(submission.sellerConsent),
    description_az: submission.description || "",
    reason_az: submission.reasonForSale || "",
    privateFinancials: {
      monthlyRevenue: submission.monthlyRevenue || null,
      monthlyProfit: submission.monthlyProfit || null,
      sellerName: submission.sellerName || "",
      sellerEmail: submission.sellerEmail || "",
      sellerPhone: submission.sellerPhone || ""
    }
  };
}
