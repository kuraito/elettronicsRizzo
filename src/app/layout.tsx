import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Electronics Rizzo | Materiale Elettrico, Elettrodomestici e Lampadari - Velina",
  description:
    "Electronics Rizzo a Velina: il tuo punto di riferimento per materiale elettrico, elettrodomestici e lampadari. Prezzi competitivi, personale competente e servizio personalizzato. 4.8★ su Google. Chiamaci: 0974 62000",
  keywords:
    "materiale elettrico, elettrodomestici, lampadari, illuminazione, Velina, negozio elettrico, Electronics Rizzo, prezzi competitivi",
  authors: [{ name: "Electronics Rizzo" }],
  openGraph: {
    title:
      "Electronics Rizzo | Materiale Elettrico, Elettrodomestici e Lampadari",
    description:
      "Il tuo punto di riferimento per materiale elettrico, elettrodomestici e lampadari a Velina. Prezzi competitivi e servizio personalizzato.",
    type: "website",
    locale: "it_IT",
    siteName: "Electronics Rizzo",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.electronicsrizzo.it",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="theme-color" content="#1e40af" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
