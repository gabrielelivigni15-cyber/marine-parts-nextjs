import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Industrial Parts | Diesel, generator and marine engine spares",
  description:
    "Industrial spare parts catalog for diesel engines, generator sets, marine engines, filters, sensors, cooling systems and maintenance kits."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
