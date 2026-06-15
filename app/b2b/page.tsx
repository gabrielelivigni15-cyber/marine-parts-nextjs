import { BadgePercent, FileSpreadsheet, LockKeyhole, PackageCheck, UserRoundCheck } from "lucide-react";
import Link from "next/link";

export default function B2BPage() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Area B2B</p>
        <h1>Listini, disponibilita e riordino per operatori nautici.</h1>
        <p>
          Pensata per officine, cantieri, charter e rivenditori che ordinano ricambi a codice e hanno bisogno di tempi
          chiari prima di confermare il lavoro al cliente.
        </p>
      </div>

      <div className="detail-grid">
        <div className="b2b-panel">
          <LockKeyhole color="#0b6f79" />
          <h2>Richiedi abilitazione operatore</h2>
          <form className="form-grid">
            <div className="field full">
              <label htmlFor="company">Ragione sociale</label>
              <input id="company" placeholder="Cantiere / officina / rivenditore" />
            </div>
            <div className="field">
              <label htmlFor="vat">Partita IVA</label>
              <input id="vat" placeholder="IT00000000000" />
            </div>
            <div className="field">
              <label htmlFor="email">Email acquisti</label>
              <input id="email" type="email" placeholder="ricambi@azienda.it" />
            </div>
            <div className="field full">
              <label htmlFor="brands">Marchi trattati</label>
              <input id="brands" placeholder="Volvo Penta, Yanmar, MerCruiser, Yamaha..." />
            </div>
            <button className="button" type="button">
              Richiedi listino B2B
            </button>
          </form>
        </div>

        <div className="grid">
          <div className="feature">
            <BadgePercent color="#b74131" />
            <h3>Sconti per categoria</h3>
            <p>Margini separati per filtrazione, anodi, raffreddamento e componenti su ordinazione.</p>
          </div>
          <div className="feature">
            <FileSpreadsheet color="#2f7d50" />
            <h3>Ordini da distinta</h3>
            <p>Import CSV o elenco codici per manutenzioni programmate, rimessaggio e flotte charter.</p>
          </div>
          <div className="feature">
            <PackageCheck color="#0b6f79" />
            <h3>Stock e backorder</h3>
            <p>Visibilita su magazzino locale, deposito fornitore e tempi stimati di arrivo.</p>
          </div>
          <div className="feature">
            <UserRoundCheck color="#0b6f79" />
            <h3>Supporto banco ricambi</h3>
            <p>Controllo incrociato su matricole, equivalenze e sostituzioni quando il codice e superato.</p>
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
