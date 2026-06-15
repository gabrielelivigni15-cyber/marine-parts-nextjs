import { ClipboardCheck, Mail, Phone } from "lucide-react";
import { products } from "@/lib/catalog";

export default function QuoteRequestPage() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Richiesta preventivo</p>
        <h1>Invia codice, motore e urgenza. Rispondiamo con disponibilita e alternativa compatibile.</h1>
        <p>
          Il form e pensato per ricambi reali: se il codice non e certo, bastano marca motore, modello, matricola e foto
          del componente. Il banco ricambi verifica prima di quotare.
        </p>
      </div>

      <div className="detail-grid">
        <div className="form-panel">
          <form className="form-grid">
            <div className="field">
              <label htmlFor="company">Azienda o nominativo</label>
              <input id="company" name="company" placeholder="Officina Rossi / Mario Bianchi" />
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
              <label htmlFor="code">Codice articolo</label>
              <select id="code" name="code" defaultValue="">
                <option value="">Da verificare / non lo conosco</option>
                {products.map((product) => (
                  <option key={product.codice} value={product.codice}>
                    {product.codice} - {product.marca}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="engine">Motore</label>
              <input id="engine" name="engine" placeholder="Es. Volvo Penta D2-55" />
            </div>
            <div className="field">
              <label htmlFor="urgency">Urgenza</label>
              <select id="urgency" name="urgency">
                <option>Fermo barca</option>
                <option>Manutenzione programmata</option>
                <option>Scorta magazzino</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Note tecniche</label>
              <textarea
                id="message"
                name="message"
                placeholder="Indica matricola motore, anno, quantita, eventuali misure o ricambio smontato."
              />
            </div>
            <button className="button" type="button">
              <ClipboardCheck size={18} />
              Invia richiesta
            </button>
          </form>
        </div>

        <div className="detail-panel">
          <h2>Informazioni utili per quotare senza errori</h2>
          <div className="quote-checklist">
            <p>Codice presente sul pezzo o sul manuale ricambi.</p>
            <p>Marca, modello e matricola motore.</p>
            <p>Quantita richiesta e porto/cantiere di consegna.</p>
            <p>Foto targhetta motore e componente, se il codice e dubbio.</p>
          </div>
          <div className="feature" style={{ marginTop: 18 }}>
            <Phone color="#0b6f79" />
            <h3>Urgenze</h3>
            <p>+39 010 000 0000, banco ricambi dalle 8:30 alle 18:00.</p>
          </div>
          <div className="feature" style={{ marginTop: 14 }}>
            <Mail color="#b74131" />
            <h3>Email tecnica</h3>
            <p>preventivi@marinepartspro.it</p>
          </div>
        </div>
      </div>
    </section>
  );
}
