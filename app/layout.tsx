import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GsapInitializer from "./components/GsapInitializer";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Thumbnail Agency",
    template: "%s | Thumbnail Agency",
  },
  description:
    "Thumbnail Agency creates clean, high-converting YouTube thumbnails that help videos stand out and earn more clicks.",
  keywords: [
    "YouTube thumbnails",
    "thumbnail design",
    "click-through rate",
    "YouTube design agency",
    "video thumbnails",
  ],
  openGraph: {
    title: "Thumbnail Agency",
    description:
      "High-converting YouTube thumbnail design for creators and brands.",
    type: "website",
    siteName: "Thumbnail Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thumbnail Agency",
    description:
      "High-converting YouTube thumbnail design for creators and brands.",
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
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col tracking-tighter">
        <GsapInitializer>
          <Navbar />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </GsapInitializer>
      </body>
    </html>
  );
}
