import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_NAME, gatePassword, isUnlocked } from "@/lib/preview-gate";

/**
 * Everything is gated except the gate itself, the endpoint that unlocks it, and
 * the static assets the gate page needs to render.
 */
const OPEN_PATHS = [
  "/preview",
  "/api/preview",
  // Served from in front of the gate so a crawler that finds the domain gets a
  // Disallow rather than the gate page rendered as a 200.
  "/robots.txt",
];

export async function middleware(request: NextRequest) {
  const password = gatePassword();

  // No password configured — the gate is off and this is a pass-through.
  if (!password) return NextResponse.next();

  const { pathname, search } = request.nextUrl;
  const unlocked = await isUnlocked(
    request.cookies.get(COOKIE_NAME)?.value,
    password,
  );

  if (unlocked) {
    // Reachable, but never indexable while the gate is on. Belt and braces
    // alongside the Disallow that robots.txt serves in the same state.
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  }

  if (OPEN_PATHS.some((path) => pathname.startsWith(path))) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  }

  // Rewrite rather than redirect: the address bar keeps the page they asked
  // for, so unlocking can return them straight to it.
  const url = request.nextUrl.clone();
  url.pathname = "/preview";
  url.search = `?from=${encodeURIComponent(pathname + search)}`;

  const response = NextResponse.rewrite(url);
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const config = {
  matcher: [
    /*
     * Everything except Next's own build output and the icons a browser
     * requests before anyone has had a chance to type a password.
     */
    "/((?!_next/static|_next/image|icon.svg|favicon.ico).*)",
  ],
};
