
const API = "https://depi-backend-yfok.vercel.app";

/**
 * Generic request function
 * @param {string} url - endpoint path (e.g., /auth/register)
 * @param {string} method - HTTP method (GET, POST, etc.)
 * @param {object|null} body - request body
 * @param {boolean} auth - whether to include Authorization header
 */
async function request(url, method = "GET", body = null, auth = false) {
  const headers = { "Content-Type": "application/json" };

  if (auth) {
    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(API + url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    const text = await res.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }

    return { ok: res.ok, data };
  } catch (err) {
    return {
      ok: false,
      data: { message: "Network error. Please check your connection." },
    };
  }
}

// --- Authentication ---
export function register(userData) {
  return request("/auth/register", "POST", userData);
}

export function login(userData) {
  return request("/auth/login", "POST", userData);
}

// This takes the email and OTP in the body and uses a POST method.
export function verifyEmail(verificationData) {
  return request("/auth/verify", "POST", verificationData);
}

export function forgotPassword(emailData) {
  return request("/auth/forgot-password", "POST", emailData);
}

export function resetPassword(resetData) {
  return request("/auth/reset-password", "POST", resetData);
}

// --- Levels & Courses ---
export function getLevels() {
  return request("/levels/levels", "GET", null, true);
}

export function getPurchasedLevels() {
  return request("/levels/purchased-levels", "GET", null, true);
}

export function createCheckoutSession(levelId) {
  return request("/stripe/create-checkout-session", "POST", { levelId }, true);
}

// --- Units ---
export function getUnits(levelId) {
  return request(`/units/${levelId}/units`, "GET", null, true);
}

export function getUnit(levelId, unitId) {
  return request(`/units/${levelId}/${unitId}`, "GET", null, true);
}

export function completeUnit(unitId) {
  return request(`/units/${unitId}/complete`, "POST", null, true);
}
