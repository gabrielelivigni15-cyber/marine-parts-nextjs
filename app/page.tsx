import { ArrowRight, ClipboardCheck, Search, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/catalog";

export default function HomePage() {
  const readyToShip = products.filter((product) => product.disponibilita.toLowerCase().includes("pronta"));

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Banco ricambi motori marini</p>
          <h1>Codici verificati prima della spedizione.</h1>
          <p>
            Forniamo filtri, giranti, anodi, cinghie, pompe e componenti di manutenzione per officine nautiche,
            cantieri e armatori. Ogni richiesta viene controllata su codice, matricola motore e disponibilita reale.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/catalogo">
              Catalogo
              <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" href="/cerca-per-motore">
              <Search size={18} />
              Cerca per motore
            </Link>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="stat-strip">
          <div>
            <strong>{products.length}</strong>
            <span>codici demo caricati</span>
          </div>
          <div>
            <strong>{readyToShip.length}</strong>
            <span>articoli in pronta consegna</span>
          </div>
          <div>
            <strong>12:00</strong>
            <span>cut-off per spedizione urgente</span>
          </div>
          <div>
            <strong>B2B</strong>
            <span>listini per officine e rivenditori</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Ricambi richiesti questa settimana</h2>
          <p>
            Articoli tipici da tagliando e fermo barca: sono mostrati con codice, fornitore e disponibilita per rendere
            chiaro cosa puo essere ordinato subito e cosa va verificato.
          </p>
        </div>
        <div className="grid">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.codice} product={product} />
          ))}
        </div>
      </section>

      <section className="section service-band">
        <div className="section-header">
          <h2>Come lavora il magazzino</h2>
          <p>
            Prima di confermare un ordine controlliamo compatibilita, alternative equivalenti e tempi di ritiro dai
            fornitori. Il cliente riceve un preventivo con codice, prezzo e disponibilita.
          </p>
        </div>
        <div className="grid">
          <div className="feature">
            <ShieldCheck color="#0b6f79" />
            <h3>Controllo compatibilita</h3>
            <p>Verifica su marca, modello, matricola e foto targhetta quando il codice non basta.</p>
          </div>
          <div className="feature">
            <Truck color="#b74131" />
            <h3>Spedizioni da deposito</h3>
            <p>Gestione pronta consegna, arrivo fornitore e ordini urgenti verso cantieri e porti.</p>
          </div>
          <div className="feature">
            <ClipboardCheck color="#2f7d50" />
            <h3>Preventivi tracciabili</h3>
            <p>Ogni richiesta conserva codice articolo, fornitore, note tecniche e motore associato.</p>
          </div>
        </div>
      </section>
    </>
  );
}
