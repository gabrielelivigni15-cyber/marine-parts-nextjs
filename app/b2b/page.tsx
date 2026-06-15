import { FileSpreadsheet, LockKeyhole, PackageCheck, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import { supportedBrands } from "@/lib/catalog";

export default function B2BPage() {
  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Area B2B</p>
        <h1>Richieste ricambi per officine, manutentori e aziende.</h1>
        <p>
          La gestione B2B e pensata per richieste tecniche, liste codici, manutenzioni programmate e ricambi per macchine
          ferme.
        </p>
      </div>

      <div className="detail-grid">
        <div className="b2b-panel">
          <LockKeyhole color="#f2b84b" />
          <h2>Richiedi contatto B2B</h2>
          <form className="form-grid">
            <div className="field full">
              <label htmlFor="company">Ragione sociale</label>
              <input id="company" placeholder="Officina, flotta, stabilimento, manutentore" />
            </div>
            <div className="field">
              <label htmlFor="vat">Partita IVA</label>
              <input id="vat" placeholder="Dati azienda" />
            </div>
            <div className="field">
              <label htmlFor="email">Email acquisti</label>
              <input id="email" type="email" placeholder="ricambi@azienda.it" />
            </div>
            <div className="field full">
              <label htmlFor="brands">Marchi trattati</label>
              <input id="brands" placeholder={supportedBrands.join(", ")} />
            </div>
            <button className="button" type="button">
              Invia richiesta B2B
            </button>
          </form>
        </div>

        <div className="grid b2b-grid">
          <div className="feature">
            <FileSpreadsheet color="#35c46d" />
            <h3>Liste codici</h3>
            <p>Invia elenchi ricambi, codici filtro, kit manutenzione o riferimenti rilevati sui componenti.</p>
          </div>
          <div className="feature">
            <PackageCheck color="#6ea8ff" />
            <h3>Disponibilita da confermare</h3>
            <p>Nessuna quantita viene indicata senza verifica. La disponibilita viene confermata su richiesta.</p>
          </div>
          <div className="feature">
            <UserRoundCheck color="#6ea8ff" />
            <h3>Supporto tecnico</h3>
            <p>La compatibilita deve essere verificata tramite numero di serie del motore prima dell&apos;ordine.</p>
            <div className="button-row">
              <Link className="text-link" href="/richiesta-preventivo">
                Apri richiesta preventivo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
