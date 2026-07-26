import type { Metadata } from "next";
import { Fraunces, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SnipkiBadge } from "@/components/SnipkiBadge";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { TimeDepthGauge } from "@/components/TimeDepthGauge";
import { ScrollAtmosphere } from "@/components/ScrollAtmosphere";

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
const DESCRIPTION =
  "Eine scrollbare Zeitleiste generativer KI-Releases in Text, Bild, Video und Ton — von Ende 2022 bis heute. Jedes Datum gegen Primärquellen geprüft.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
