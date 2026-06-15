import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarineParts Pro | Ricambi motori marini",
  description:
    "Catalogo tecnico per vendita ricambi motori marini con disponibilita, compatibilita motore, preventivi e area B2B."
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
