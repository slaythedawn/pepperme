/**
 * The pre-launch gate.
 *
 * While the site is waiting on legal and regulatory sign-off it must be both
 * unreachable and unindexable. Setting SITE_PASSWORD turns the gate on; unset
 * it and the whole mechanism disappears from the request path.
 *
 * The cookie holds an HMAC of a fixed message keyed by the password, so it
 * carries no secret itself and rotating the password invalidates every session
 * that was issued under the old one. Web Crypto is used rather than node:crypto
 * because the middleware runs on the edge runtime.
 *
 * This is a shutter on an unfinished shopfront. It keeps the public and the
 * crawlers out of pre-approval content — it is NOT authentication, and nothing
 * carrying real patient data should ever sit behind it.
 */

const MESSAGE = "pepperme-preview-v1";

export const COOKIE_NAME = "pm-preview";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

/** The gate is on whenever a password is configured. */
export function gatePassword(): string | undefined {
  const password = process.env.SITE_PASSWORD;
  return password && password.length > 0 ? password : undefined;
}

async function hmac(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(MESSAGE));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Compare without leaking length or position through timing. */
function constantTimeEqual(a: string, b: string): boolean {
  const encoder = new TextEncoder();
  const left = encoder.encode(a);
  const right = encoder.encode(b);
  // Compare a fixed number of bytes either way, then fold in the length check.
  const length = Math.max(left.length, right.length);
  let diff = left.length ^ right.length;
  for (let i = 0; i < length; i += 1) {
    diff |= (left[i] ?? 0) ^ (right[i] ?? 0);
  }
  return diff === 0;
}

/** The value a valid session cookie must carry. */
export async function expectedToken(password: string): Promise<string> {
  return hmac(password);
}

export async function isUnlocked(
  cookieValue: string | undefined,
  password: string,
): Promise<boolean> {
  if (!cookieValue) return false;
  return constantTimeEqual(cookieValue, await expectedToken(password));
}

export async function passwordMatches(
  submitted: string,
  password: string,
): Promise<boolean> {
  // Hash both sides first so the comparison is over fixed-length digests.
  return constantTimeEqual(await hmac(submitted), await hmac(password));
}
