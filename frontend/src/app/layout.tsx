import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { BottomBar } from "@/widgets/bottom-bar/BottomBar";
import { siteConfig } from "@/shared/config/site";

const lumoSans = Manrope({
  variable: "--font-lumo-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const lumoDisplay = Space_Grotesk({
  variable: "--font-lumo-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Электроника и умные устройства`,
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${lumoSans.variable} ${lumoDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
