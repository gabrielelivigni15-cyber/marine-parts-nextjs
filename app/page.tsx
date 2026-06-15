import { ArrowRight, ClipboardCheck, Database, Search, Settings2, Truck } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, supportedBrands } from "@/lib/catalog";

export default function HomePage() {
  const warehouseItems = products.filter((product) => product.availability.toLowerCase().includes("magazzino"));

  return (
    <>
      <section className="hero industrial-hero">
        <div className="hero-copy">
          <p className="eyebrow">Fornitura ricambi industriali</p>
          <h1>Ricambi per motori diesel, gruppi elettrogeni e macchinari industriali.</h1>
          <p>
            Apex Ricambi Industriali supporta uffici acquisti, officine e manutentori con ricerca per codice ricambio,
            modello motore e numero di serie prima della conferma ordine.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/cerca-per-motore">
              Cerca ricambi
              <Search size={18} />
            </Link>
            <Link className="button secondary" href="/richiesta-preventivo">
              Richiedi preventivo
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Riepilogo ricerca operativa">
          <div>
            <span>Flusso principale</span>
            <strong>Codice ricambio / modello motore / numero di serie</strong>
          </div>
          <div>
            <span>Marchi gestiti</span>
            <strong>{supportedBrands.join(", ")}</strong>
          </div>
          <div>
            <span>Regola di verifica</span>
            <strong>La compatibilita deve essere verificata tramite numero di serie del motore.</strong>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="stat-strip">
          <div>
            <strong>{products.length}</strong>
            <span>schede ricambio demo</span>
          </div>
          <div>
            <strong>{warehouseItems.length}</strong>
            <span>articoli con disponibilita a magazzino</span>
          </div>
          <div>
            <strong>7</strong>
            <span>marchi motore e generatore</span>
          </div>
          <div>
            <strong>B2B</strong>
            <span>uffici acquisti e service partner</span>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-header">
          <p className="eyebrow">Prima la verifica, poi l&apos;offerta</p>
          <h2>Un flusso pensato per chi compra ricambi tecnici.</h2>
        </div>
        <div className="process-grid">
          <div className="feature">
            <Search color="#f2b84b" />
            <h3>Ricerca per codice</h3>
            <p>Usa riferimenti OEM, codici kit service o codici fornitore per arrivare subito alla scheda.</p>
          </div>
          <div className="feature">
            <Settings2 color="#6ea8ff" />
            <h3>Ricerca per modello motore</h3>
            <p>Filtra per famiglie Baudouin, Cummins, Volvo Penta, Perkins, Kohler, Yanmar e Lombardini.</p>
          </div>
          <div className="feature">
            <ClipboardCheck color="#35c46d" />
            <h3>Verifica numero di serie</h3>
            <p>La compatibilita deve essere verificata tramite numero di serie del motore prima della conferma ordine.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Categorie</p>
          <h2>Struttura catalogo industriale.</h2>
          <p>
            Le schede sono organizzate per applicazione e famiglia ricambio, così il cliente passa da un intervento di
            manutenzione a una richiesta tecnica senza attraversare un catalogo retail.
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

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Schede in evidenza</p>
          <h2>Catalogo demo corrente.</h2>
          <p>
            Ogni scheda mostra codice ricambio, marchio, applicazione, disponibilita e nota di verifica. Non vengono
            inseriti dati tecnici non confermati.
          </p>
        </div>
        <div className="grid">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.partNumber} product={product} />
          ))}
        </div>
      </section>

      <section className="section service-band">
        <div className="section-header">
          <p className="eyebrow">Operativita B2B</p>
          <h2>Per flotte, officine, service gruppi elettrogeni e manutenzione industriale.</h2>
        </div>
        <div className="grid">
          <div className="feature">
            <Truck color="#f2b84b" />
            <h3>Magazzino e stock fornitore</h3>
            <p>
              Le schede distinguono disponibilita a magazzino, disponibilita fornitore, scorta limitata e articoli su
              richiesta.
            </p>
          </div>
          <div className="feature">
            <ClipboardCheck color="#35c46d" />
            <h3>Gestione richiesta tecnica</h3>
            <p>Le richieste raccolgono codice ricambio, modello motore, numero di serie e applicazione macchina.</p>
          </div>
          <div className="feature">
            <Database color="#6ea8ff" />
            <h3>Acquisti ricorrenti</h3>
            <p>I clienti B2B possono richiedere supporto per riordini, liste flotta e kit manutenzione programmata.</p>
          </div>
        </div>
      </section>
    </>
  );
}
