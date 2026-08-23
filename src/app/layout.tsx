import type { Metadata } from "next";
import {
  Familjen_Grotesk,
  Funnel_Display,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Topbar } from "@/components/layout/Topbar";
import { ViewProvider } from "@/components/view/ViewProvider";
import { SITE } from "@/content/site";
import { SITE_URL } from "@/content/routes";

/* Four faces, four jobs, no overlap. Self-hosted for performance. */
const display = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-funnel-display",
  display: "swap",
});
const body = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-familjen-grotesk",
  display: "swap",
});
const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const DESCRIPTION =
  "Australian doctor-led telehealth. A $149 assessment, a comprehensive blood panel and a consult with an AHPRA-registered Australian doctor who reads the whole panel.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — doctor-led care, read as one system`,
    template: `%s — ${SITE.name}`,
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_AU",
    url: "/",
    title: `${SITE.name} — doctor-led care, read as one system`,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: SITE.name, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${display.variable} ${body.variable} ${editorial.variable} ${mono.variable}`}
    >
      <body data-ground="page">
        <script
          type="application/ld+json"
          // Structured data mirrors what the pages already say. It must never
          // assert anything the compliance rules keep off the page itself.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: SITE.name,
              url: SITE_URL,
              description: DESCRIPTION,
              legalName: SITE.legalName,
              areaServed: "AU",
              medicalSpecialty: "Endocrine",
            }),
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ViewProvider>
          <Topbar />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ViewProvider>
      </body>
    </html>
  );
}
