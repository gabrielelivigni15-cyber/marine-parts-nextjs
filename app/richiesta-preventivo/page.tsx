import { ClipboardCheck, Mail, Phone } from "lucide-react";
import { products, supportedBrands } from "@/lib/catalog";

export default function QuoteRequestPage() {
  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Richiesta preventivo tecnico</p>
        <h1>Invia codice ricambio, modello motore e numero di serie prima dell&apos;acquisto.</h1>
        <p>
          Il form e pensato per uffici acquisti industriali. Se il codice non e certo, indica modello motore, numero di
          serie, applicazione macchina e foto del componente installato.
        </p>
      </div>

      <div className="detail-grid">
        <div className="form-panel">
          <form className="form-grid">
            <div className="field">
              <label htmlFor="company">Azienda</label>
              <input id="company" name="company" placeholder="Manutentore / stabilimento / officina" />
            </div>
            <div className="field">
              <label htmlFor="email">Email ufficio acquisti</label>
              <input id="email" name="email" type="email" placeholder="acquisti@azienda.it" />
            </div>
            <div className="field">
              <label htmlFor="phone">Telefono</label>
              <input id="phone" name="phone" placeholder="+39 ..." />
            </div>
            <div className="field">
              <label htmlFor="part">Codice ricambio</label>
              <select id="part" name="part" defaultValue="">
                <option value="">Sconosciuto / da identificare</option>
                {products.map((product) => (
                  <option key={product.partNumber} value={product.partNumber}>
                    {product.partNumber} - {product.brand}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="brand">Marchio motore</label>
              <select id="brand" name="brand">
                <option>Da confermare</option>
                {supportedBrands.map((brand) => (
                  <option key={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="model">Modello motore o generatore</label>
              <input id="model" name="model" placeholder="Esempio: Cummins QSB, Perkins 1104D" />
            </div>
            <div className="field">
              <label htmlFor="serial">Numero di serie motore</label>
              <input id="serial" name="serial" placeholder="Richiesto per verifica compatibilita" />
            </div>
            <div className="field">
              <label htmlFor="urgency">Esigenza</label>
              <select id="urgency" name="urgency">
                <option>Macchina ferma</option>
                <option>Manutenzione programmata</option>
                <option>Ripristino scorta flotta</option>
                <option>Solo identificazione tecnica</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Note tecniche</label>
              <textarea
                id="message"
                name="message"
                placeholder="Applicazione, quantita, macchina installata, foto disponibili, destinazione consegna."
              />
            </div>
            <button className="button" type="button">
              <ClipboardCheck size={18} />
              Invia richiesta tecnica
            </button>
          </form>
        </div>

        <div className="detail-panel">
          <h2>Informazioni richieste dal banco tecnico</h2>
          <div className="quote-checklist">
            <p>Codice ricambio rilevato dal componente, dal manuale manutenzione o da una fattura precedente.</p>
            <p>Modello motore o generatore e numero di serie completo.</p>
            <p>Applicazione macchina: gruppo elettrogeno, impianto industriale, motore marino o flotta.</p>
            <p>Quantita richiesta, urgenza e destinazione di consegna.</p>
          </div>
          <p className="verification-banner">La compatibilita deve essere verificata tramite numero di serie del motore.</p>
          <div className="feature" style={{ marginTop: 18 }}>
            <Phone color="#f2b84b" />
            <h3>Richieste urgenti</h3>
            <p>Banco tecnico: +39 010 000 0000, dal lunedi al venerdi, 08:00-18:00.</p>
          </div>
          <div className="feature" style={{ marginTop: 14 }}>
            <Mail color="#6ea8ff" />
            <h3>Email</h3>
            <p>preventivi@apex-industrial.example</p>
          </div>
        </div>
      </div>
    </section>
  );
}
