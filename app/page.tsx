import { ArrowRight, ClipboardCheck, Database, Search, Settings2 } from "lucide-react";
import Link from "next/link";
import { categories, supportedBrands } from "@/lib/catalog";

export default function HomePage() {
  return (
    <>
      <section className="hero industrial-hero">
        <div className="hero-copy">
          <p className="eyebrow">Ricambi industriali e motori diesel</p>
          <h1>Ricambi industriali e motori diesel</h1>
          <p>Ricerca componenti tramite codice articolo, modello motore o applicazione.</p>

          <div className="hero-search" aria-label="Ricerca principale">
            <div className="field">
              <label htmlFor="hero-code">Codice articolo</label>
              <input id="hero-code" placeholder="Esempio: Cummins FF5713, Racor 500FG" />
            </div>
            <div className="field">
              <label htmlFor="hero-engine">Modello motore</label>
              <input id="hero-engine" placeholder="Esempio: Cummins, Perkins, Volvo Penta" />
            </div>
            <div className="field">
              <label htmlFor="hero-serial">Seriale motore</label>
              <input id="hero-serial" placeholder="Da indicare per la verifica" />
            </div>
            <Link className="button" href="/cerca-per-motore">
              Cerca ricambi
              <Search size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Nota operativa">
          <div>
            <span>Metodo di lavoro</span>
            <strong>Si parte da codice, modello motore o applicazione. La compatibilita si conferma con il seriale.</strong>
          </div>
          <div>
            <span>Marchi trattati</span>
            <strong>{supportedBrands.join(", ")}</strong>
          </div>
          <div>
            <span>Nota tecnica</span>
            <strong>La disponibilita deve essere confermata prima dell&apos;ordine.</strong>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-header">
          <p className="eyebrow">Ricerca e verifica</p>
          <h2>Il catalogo serve a identificare il ricambio, non a sostituire il controllo tecnico.</h2>
        </div>
        <div className="process-grid">
          <div className="feature">
            <Search color="#f2b84b" />
            <h3>Ricerca per codice</h3>
            <p>Inserisci il riferimento presente sul filtro, sul sensore, sulla confezione o su una fattura precedente.</p>
          </div>
          <div className="feature">
            <Settings2 color="#6ea8ff" />
            <h3>Ricerca per motore</h3>
            <p>Indica marchio, modello e applicazione. Se il dato non e sufficiente, serve il seriale motore.</p>
          </div>
          <div className="feature">
            <ClipboardCheck color="#35c46d" />
            <h3>Verifica compatibilita</h3>
            <p>La compatibilita deve essere verificata tramite numero di serie del motore prima dell&apos;ordine.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Categorie ricambio</p>
          <h2>Filtri, sensori, raffreddamento e kit manutenzione.</h2>
          <p>
            Le categorie aiutano a orientare la richiesta. Per l&apos;ordine servono sempre codice, modello o numero di
            serie.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-tile" key={category}>
              <Database size={18} />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section service-band">
        <div className="section-header">
          <p className="eyebrow">Richiesta tecnica</p>
          <h2>Quando il codice non basta, servono dati macchina.</h2>
          <p>
            Modello motore, seriale, applicazione e foto del componente riducono il rischio di ordinare un ricambio non
            corretto.
          </p>
        </div>
        <div className="button-row">
          <Link className="button secondary" href="/richiesta-preventivo">
            Apri richiesta preventivo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
