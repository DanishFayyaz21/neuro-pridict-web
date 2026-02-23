import "./globals.css";
import Navbar from "@/components/core/navbar";

import { Geist, Geist_Mono } from "next/font/google";
import { Darker_Grotesque, Roboto } from "next/font/google";
import localFont from "next/font/local";

/* =============================
   Local Font - Clash Display
============================= */

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/clash/ClashDisplay-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/clash/ClashDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/clash/ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/clash/ClashDisplay-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});


/* =============================
   Google Fonts (Optimized)
============================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

/* =============================
   Metadata
============================= */

export const metadata = {
  title: "Neuro Predict",
  description: "AI-powered predictions for marketing research",
};

/* =============================
   Layout
============================= */

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${clashDisplay.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          ${darkerGrotesque.variable}
          ${roboto.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
