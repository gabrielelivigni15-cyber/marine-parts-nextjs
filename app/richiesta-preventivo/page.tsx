import { ClipboardCheck, Mail, Phone } from "lucide-react";
import { products, supportedBrands } from "@/lib/catalog";

export default function QuoteRequestPage() {
  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Richiesta preventivo</p>
        <h1>Invia i dati necessari per identificare il ricambio.</h1>
        <p>
          Se il codice non e certo, servono modello motore, numero di serie e applicazione. La disponibilita viene
          confermata dopo la verifica.
        </p>
      </div>

      <div className="detail-grid">
        <div className="form-panel">
          <form className="form-grid">
            <div className="field">
              <label htmlFor="company">Azienda</label>
              <input id="company" name="company" placeholder="Officina, manutentore, stabilimento" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="acquisti@azienda.it" />
            </div>
            <div className="field">
              <label htmlFor="phone">Telefono</label>
              <input id="phone" name="phone" placeholder="+39 ..." />
            </div>
            <div className="field">
              <label htmlFor="part">Codice articolo</label>
              <select id="part" name="part" defaultValue="">
                <option value="">Non disponibile / da identificare</option>
                {products.map((product) => (
                  <option key={product.partNumber} value={product.partNumber}>
                    {product.partNumber}
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
              <label htmlFor="model">Modello motore</label>
              <input id="model" name="model" placeholder="Esempio: Cummins, Perkins, Volvo Penta" />
            </div>
            <div className="field">
              <label htmlFor="serial">Numero di serie motore</label>
              <input id="serial" name="serial" placeholder="Necessario per la verifica" />
            </div>
            <div className="field">
              <label htmlFor="need">Tipo richiesta</label>
              <select id="need" name="need">
                <option>Disponibilita da confermare</option>
                <option>Identificazione ricambio</option>
                <option>Preventivo per manutenzione</option>
                <option>Ricambio per macchina ferma</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Note tecniche</label>
              <textarea
                id="message"
                name="message"
                placeholder="Applicazione, quantita richiesta, codice rilevato sul pezzo, foto disponibili."
              />
            </div>
            <button className="button" type="button">
              <ClipboardCheck size={18} />
              Invia richiesta
            </button>
          </form>
        </div>

        <div className="detail-panel">
          <h2>Dati utili per evitare errori</h2>
          <div className="quote-checklist">
            <p>Codice presente sul ricambio, se leggibile.</p>
            <p>Marchio, modello e numero di serie del motore.</p>
            <p>Applicazione: gruppo elettrogeno, motore diesel, impianto industriale o motore marino.</p>
            <p>Foto del componente installato quando il codice non e certo.</p>
          </div>
          <p className="verification-banner">La compatibilita deve essere verificata tramite numero di serie del motore.</p>
          <div className="feature" style={{ marginTop: 18 }}>
            <Phone color="#f2b84b" />
            <h3>Banco ricambi</h3>
            <p>Per urgenze indicare sempre seriale motore e codice rilevato sul componente.</p>
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
