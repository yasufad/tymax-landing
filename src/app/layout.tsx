import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ClientScriptInitialiser from "@/components/ClientScriptInitialiser";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tymax.io"),
  title: "Tymax: Internet Broadcasting for Channels",
  description:
    "Tymax is a new way to build and operate an internet channel, bringing your programming, distribution and audience together without locking you into one destination.",
  keywords: [
    "Tymax",
    "internet broadcasting",
    "live broadcasting",
    "live streaming",
    "internet channels",
    "broadcasters",
    "live video",
    "streaming platform",
    "channel platform",
  ],
  authors: [{ name: "K3HQ", url: "https://k3hq.com" }],
  openGraph: {
    title: "Tymax: Internet Broadcasting for Channels",
    description:
      "Tymax is a new way to build and operate an internet channel, bringing your programming, distribution and audience together without locking you into one destination.",
    url: "https://tymax.com",
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 1200 }],
  },
  icons: {
    icon: [
      { url: "/img/favicon/favicon.png", type: "image/png" },
      { url: "/img/favicon/favicon.ico", sizes: "any" },
      { url: "/img/favicon/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/img/favicon/apple-touch-icon.png",
  },
  manifest: "/img/favicon/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#EEEAE8" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f0f0f" />
        <meta name="msapplication-navbutton-color" content="#0f0f0f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel="stylesheet" type="text/css" href="/css/loader.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/plugins.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.min.css" />
      </head>
      <body suppressHydrationWarning>
        <Navigation />
        <Header />
        {children}
        <Footer />
        <Cursor />
        <ClientScriptInitialiser />
        <Analytics />

        <Script src="/js/libs.min.js" strategy="afterInteractive" />
        <Script src="/js/app.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
