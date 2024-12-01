import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import styles from "./page.module.css";
import NavBar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EREC 2025 - The Gift of Perseverance",
  description:
    "European Reformed Evangelical Convention 2025, April 18 - 21 2025, Halle (Saale), Germany",
  keywords: [
    "European Reformed Evangelical Convention",
    "European Reformed Evangelical Convention 2025",
    "EREC 2025",
    "EREC",
    "IREC",
    "IREC Europe",
    "IREC retreat",
    "reformed retreat",
    "GRII",
    "Assurance of Grace",
    "MRII Berlin",
    "MRII Hamburg",
    "PRII Stockholm",
    "MRII Munich",
    "MRII Bern",
  ],
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head>
        {/* <ColorSchemeScript /> */}
      </head>
      <body className={styles.page}>
        {/* <MantineProvider> */}
          <NavBar />
          {children}
          <Footer />
        {/* </MantineProvider> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
