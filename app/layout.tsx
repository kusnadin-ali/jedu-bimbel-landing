import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const siteUrl = "https://jedu-bimbel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jedu Bimbel | Belajar Lebih Cerdas, Tumbuh Lebih Jauh",
  description:
    "Bimbel eksklusif untuk SD & SMP dengan standar kurikulum Cambridge International di Klaten Selatan, Kabupaten Klaten, Jawa Tengah.",
  keywords: [
    "bimbel Klaten",
    "les privat Klaten",
    "Cambridge International Klaten",
    "bimbel SD SMP Klaten",
    "bimbel Klaten Selatan",
    "bimbel Cambridge Klaten",
    "les SD SMP Gayamprit",
    "Jedu Bimbel",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jedu Bimbel | Belajar Lebih Cerdas, Tumbuh Lebih Jauh",
    description:
      "Bimbel eksklusif untuk SD & SMP dengan standar kurikulum Cambridge International di Klaten Selatan.",
    url: siteUrl,
    siteName: "Jedu Bimbel",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: "Jedu Bimbel — Belajar Lebih Cerdas, Tumbuh Lebih Jauh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jedu Bimbel | Belajar Lebih Cerdas, Tumbuh Lebih Jauh",
    description:
      "Bimbel eksklusif untuk SD & SMP dengan standar kurikulum Cambridge International di Klaten Selatan.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
