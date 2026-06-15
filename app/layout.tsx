import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Ricambi Industriali | Ricambi industriali, diesel e gruppi elettrogeni",
  description:
    "Catalogo ricambi industriali per motori diesel, gruppi elettrogeni, motori marini, filtri, sensori, raffreddamento e kit manutenzione."
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
