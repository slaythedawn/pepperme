import { NextResponse, type NextRequest } from "next/server";
import {
  COOKIE_NAME,
  COOKIE_MAX_AGE,
  expectedToken,
  gatePassword,
  isGated,
  passwordMatches,
} from "@/lib/preview-gate";

/**
 * Unlocks the pre-launch gate. Sets an HttpOnly cookie holding an HMAC keyed by
 * the password — the password itself is never stored client-side.
 */
export async function POST(request: NextRequest) {
  if (!isGated()) {
    return NextResponse.json({ error: "The gate is not enabled." }, { status: 404 });
  }

  const password = gatePassword();
  if (!password) {
    // Gated but unconfigured. Nothing to compare against, so nothing gets in.
    return NextResponse.json(
      { error: "No preview password is configured for this deployment." },
      { status: 503 },
    );
  }

  const form = await request.formData();
  const submitted = String(form.get("password") ?? "");
  const from = String(form.get("from") ?? "/");

  // Only ever return to a path on this site — never to a supplied absolute URL.
  const destination =
    from.startsWith("/") && !from.startsWith("//") ? from : "/";

  if (!(await passwordMatches(submitted, password))) {
    const retry = new URL("/preview", request.nextUrl.origin);
    retry.searchParams.set("from", destination);
    retry.searchParams.set("error", "1");
    return NextResponse.redirect(retry, { status: 303 });
  }

  const response = NextResponse.redirect(
    new URL(destination, request.nextUrl.origin),
    { status: 303 },
  );
  response.cookies.set({
    name: COOKIE_NAME,
    value: await expectedToken(password),
    httpOnly: true,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  return response;
}
