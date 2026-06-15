import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { categories, supportedBrands } from "@/lib/catalog";

export default function HomePage() {
  return (
    <>
      <section className="hero industrial-hero">
        <div className="hero-center">
          <p className="eyebrow">Piattaforma tecnica ricambi</p>
          <h1>Trova il ricambio corretto.</h1>
          <p>Ricerca componenti tramite codice articolo, modello motore o applicazione.</p>

          <div className="hero-search" aria-label="Ricerca principale">
            <div className="field search-primary-field">
              <label htmlFor="hero-code">Ricerca componente</label>
              <input id="hero-code" placeholder="Codice, motore, filtro, sensore o applicazione" />
            </div>
            <div className="field">
              <label htmlFor="hero-serial">Seriale motore</label>
              <input id="hero-serial" placeholder="Per verifica compatibilita" />
            </div>
            <Link className="button" href="/cerca-per-motore">
              Cerca
              <Search size={18} />
            </Link>
          </div>

          <div className="hero-meta" aria-label="Ambiti di ricerca">
            <span>Motori diesel</span>
            <span>Gruppi elettrogeni</span>
            <span>Filtri</span>
            <span>Sensori</span>
            <span>Raffreddamento</span>
          </div>
        </div>
      </section>

      <section className="section platform-section">
        <div className="section-header wide-header">
          <p className="eyebrow">Identificazione prima dell&apos;ordine</p>
          <h2>La piattaforma non spinge prodotti. Riduce il rischio di scegliere il componente sbagliato.</h2>
          <p>
            Si parte da un codice, da un modello motore o da un&apos;applicazione. La compatibilita viene verificata con
            il numero di serie prima del preventivo.
          </p>
        </div>
      </section>

      <section className="section platform-grid-section">
        <div className="platform-grid">
          <div>
            <p className="eyebrow">Marchi</p>
            <h3>{supportedBrands.join(", ")}</h3>
          </div>
          <div>
            <p className="eyebrow">Categorie</p>
            <h3>{categories.slice(0, 5).join(", ")}</h3>
          </div>
          <div>
            <p className="eyebrow">Richiesta tecnica</p>
            <h3>Codice ricambio, modello, seriale, applicazione.</h3>
            <Link className="text-link platform-link" href="/richiesta-preventivo">
              Apri richiesta
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
