import type { MetadataRoute } from "next";
import { isGated } from "@/lib/preview-gate";
import { SITE_URL } from "@/content/routes";

/*
 * Evaluated per request rather than baked into the build. The gate itself is a
 * runtime check in the middleware, and a crawler signal that disagreed with it
 * would be the worst kind of stale: a live site still telling search engines to
 * go away, or a gated one advertising its URLs.
 */
export const dynamic = "force-dynamic";


export default function robots(): MetadataRoute.Robots {
  // While the pre-launch gate is on, say so as plainly as the protocol allows.
  // The gate already makes the site unreachable; this stops a crawler holding
  // on to the URLs, and it is why /robots.txt is served from in front of it.
  if (isGated()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
