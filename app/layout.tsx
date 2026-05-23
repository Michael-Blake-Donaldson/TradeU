import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Toaster } from "sonner";

import { AuthProvider } from "@/components/providers/auth-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TradeU",
    template: "%s | TradeU",
  },
  description:
    "TradeU is a student-first experience marketplace where verified students trade skills, gain credits, and build real portfolio proof.",
  metadataBase: new URL("https://tradeu.app"),
  openGraph: {
    title: "TradeU",
    description:
      "Trade skills. Gain experience. A web-first student marketplace for trusted skill exchanges.",
    siteName: "TradeU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink">
        <AuthProvider>{children}</AuthProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
