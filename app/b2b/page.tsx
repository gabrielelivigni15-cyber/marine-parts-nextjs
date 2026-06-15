import { BadgePercent, FileSpreadsheet, LockKeyhole, PackageCheck, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import { supportedBrands } from "@/lib/catalog";

export default function B2BPage() {
  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Clienti B2B</p>
        <h1>Supporto acquisti per officine, flotte, service gruppi elettrogeni e stabilimenti industriali.</h1>
        <p>
          Il flusso B2B e pensato per riordini, manutenzioni programmate, macchine ferme e identificazione tecnica prima
          del rilascio ordine.
        </p>
      </div>

      <div className="detail-grid">
        <div className="b2b-panel">
          <LockKeyhole color="#f2b84b" />
          <h2>Richiedi accesso B2B</h2>
          <form className="form-grid">
            <div className="field full">
              <label htmlFor="company">Ragione sociale</label>
              <input id="company" placeholder="Officina / flotta / stabilimento / distributore" />
            </div>
            <div className="field">
              <label htmlFor="vat">Partita IVA o registrazione aziendale</label>
              <input id="vat" placeholder="Identificativo azienda" />
            </div>
            <div className="field">
              <label htmlFor="email">Email acquisti</label>
              <input id="email" type="email" placeholder="ricambi@azienda.it" />
            </div>
            <div className="field full">
              <label htmlFor="brands">Marchi gestiti</label>
              <input id="brands" placeholder={supportedBrands.join(", ")} />
            </div>
            <button className="button" type="button">
              Richiedi valutazione account
            </button>
          </form>
        </div>

        <div className="grid b2b-grid">
          <div className="feature">
            <BadgePercent color="#f2b84b" />
            <h3>Flusso prezzi account</h3>
            <p>Le richieste possono separare urgenze, manutenzioni programmate e scorte ricorrenti di flotta.</p>
          </div>
          <div className="feature">
            <FileSpreadsheet color="#35c46d" />
            <h3>Liste ricambi e richieste CSV</h3>
            <p>Invia liste codici, richieste kit service o piani manutenzione multi-motore.</p>
          </div>
          <div className="feature">
            <PackageCheck color="#6ea8ff" />
            <h3>Controllo disponibilita e tempi</h3>
            <p>
              Le schede distinguono magazzino centrale, disponibilita fornitore, scorta limitata e ricerca su richiesta.
            </p>
          </div>
          <div className="feature">
            <UserRoundCheck color="#6ea8ff" />
            <h3>Supporto banco tecnico</h3>
            <p>La compatibilita deve essere verificata tramite numero di serie del motore prima della conferma acquisto.</p>
            <div className="button-row">
              <Link className="text-link" href="/richiesta-preventivo">
                Apri richiesta tecnica
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
