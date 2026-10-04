import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "AgriMind : AI Smart Farming (Krishi Fix)",
  description:
    "Transforming Agriculture with AI-Powered Decision Support Systems. Team B8 • BBDITM (Code: 054)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-gray-900 antialiased selection:bg-emerald-500 selection:text-white font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
