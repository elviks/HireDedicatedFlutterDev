import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Mail } from "lucide-react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hireflutterdeveloper.com"),
  title: {
    default: "Hire Dedicated Flutter Developer | HFD",
    template: "%s | HFD",
  },
  description:
    "Hire dedicated Flutter developers in just 3 days. Rigorously vetted talent with 5000+ hours experience. 500+ successful projects, trusted by 200+ clients.",
  keywords: [
    "hire flutter developer",
    "dedicated flutter developer",
    "flutter app development",
    "cross-platform development",
    "mobile app development",
    "flutter consulting",
  ],
  authors: [{ name: "HireFlutterDeveloper.com" }],
  creator: "HireFlutterDeveloper.com",
  publisher: "HireFlutterDeveloper.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hireflutterdeveloper.com",
    siteName: "HireFlutterDeveloper.com",
    title: "Hire Dedicated Flutter Developer in Just 3 Days",
    description:
      "Scale your business faster by hiring dedicated Flutter developers. Rigorously vetted, 5000+ hours experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Flutter Developer in Just 3 Days",
    description:
      "Scale your business faster by hiring dedicated Flutter developers.",
    creator: "@hireflutterdev",
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HireFlutterDeveloper.com",
              url: "https://hireflutterdeveloper.com",
              logo: "https://hireflutterdeveloper.com/logo.png",
              description:
                "Hire dedicated Flutter developers in just 3 days. Rigorously vetted talent with 5000+ hours experience.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "customer service",
              },
              sameAs: [
                "https://twitter.com/hireflutterdev",
                "https://linkedin.com/company/hireflutterdeveloper",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className + " overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
        {/* Floating Contact Button */}
        <Link
          href="#contact"
          className="fixed z-50 bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all flex items-center gap-2 px-5 py-3 font-semibold text-base animate-bounce-slow"
          style={{
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}
          aria-label="Contact Us"
        >
          <Mail className="h-5 w-5 mr-1" />
          Contact
        </Link>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
