import { createHash, timingSafeEqual } from "node:crypto";

export const AUTH_COOKIE_NAME = "ideabank_access";
const AUTH_COOKIE_SALT = "ideabank-password-gate";

export function getAccessPassword() {
  return process.env.ACCESS_PASSWORD || "ideabank2026";
}

export function hashValue(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function createAuthToken(password = getAccessPassword()) {
  return hashValue(`${AUTH_COOKIE_SALT}:${password}`);
}

export function isValidPassword(password: string) {
  const expected = Buffer.from(getAccessPassword());
  const provided = Buffer.from(password);

  if (expected.length !== provided.length) {
    return false;
  }

  return timingSafeEqual(expected, provided);
}

export function isAuthenticated(cookieValue?: string) {
  if (!cookieValue) {
    return false;
  }

  return timingSafeEqual(
    Buffer.from(cookieValue),
    Buffer.from(createAuthToken())
  );
}
