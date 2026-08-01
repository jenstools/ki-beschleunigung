import type { Metadata } from "next";
import { Fraunces, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SnipkiBadge } from "@/components/SnipkiBadge";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { TimeDepthGauge } from "@/components/TimeDepthGauge";
import { ScrollAtmosphere } from "@/components/ScrollAtmosphere";
import { dataMeta } from "@/data/timeline";
import { AUTHOR, LICENSE, PUBLISHER, SITE_NAME, SITE_URL } from "@/lib/site";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const TITLE = "Die Beschleunigung — wie schnell sich KI wirklich bewegt";
const DESCRIPTION = `${dataMeta.total} primärgeprüfte Releases generativer KI in Text, Bild, Video und Ton — von Ende 2022 bis heute, als scrollbare Zeitleiste. Jedes Datum gegen die Ankündigung des Labors geprüft. Frei nutzbar (CC-BY) inkl. JSON-API.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: AUTHOR.name,
  publisher: PUBLISHER.name,
  // Canonical is set here for `/` and overridden per route below the root.
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google quote the page at full length and use large previews —
      // both help the page surface in AI Overviews and rich results.
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    // Machine-readable pointers to the reuse terms, echoing llms.txt.
    "dcterms.license": LICENSE.url,
    "dcterms.rightsHolder": PUBLISHER.name,
    "dcterms.modified": dataMeta.lastVerifiedISO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full">
        <ScrollAtmosphere />
        {children}
        <TimeDepthGauge />
        <FreshnessBadge />
        <SnipkiBadge />
      </body>
    </html>
  );
}
