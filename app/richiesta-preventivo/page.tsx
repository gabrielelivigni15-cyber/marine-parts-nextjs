import { ClipboardCheck, Mail, Phone } from "lucide-react";
import { products, supportedBrands } from "@/lib/catalog";

export default function QuoteRequestPage() {
  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Technical quote request</p>
        <h1>Send the part number, engine model and serial number before procurement.</h1>
        <p>
          This form is structured for industrial buyers. If the exact part number is unknown, provide engine model,
          serial number, machine application and photographs of the existing component.
        </p>
      </div>

      <div className="detail-grid">
        <div className="form-panel">
          <form className="form-grid">
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" placeholder="Maintenance company / plant / workshop" />
            </div>
            <div className="field">
              <label htmlFor="email">Procurement email</label>
              <input id="email" name="email" type="email" placeholder="procurement@company.com" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" placeholder="+39 ..." />
            </div>
            <div className="field">
              <label htmlFor="part">Part number</label>
              <select id="part" name="part" defaultValue="">
                <option value="">Unknown / to be identified</option>
                {products.map((product) => (
                  <option key={product.partNumber} value={product.partNumber}>
                    {product.partNumber} - {product.brand}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="brand">Engine brand</label>
              <select id="brand" name="brand">
                <option>To be confirmed</option>
                {supportedBrands.map((brand) => (
                  <option key={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="model">Engine or generator model</label>
              <input id="model" name="model" placeholder="Example: Cummins QSB, Perkins 1104D" />
            </div>
            <div className="field">
              <label htmlFor="serial">Engine serial number</label>
              <input id="serial" name="serial" placeholder="Required for compatibility verification" />
            </div>
            <div className="field">
              <label htmlFor="urgency">Requirement</label>
              <select id="urgency" name="urgency">
                <option>Machine down</option>
                <option>Scheduled maintenance</option>
                <option>Fleet stock replenishment</option>
                <option>Technical identification only</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Technical notes</label>
              <textarea
                id="message"
                name="message"
                placeholder="Application, quantity, installed machine, photographs available, delivery location."
              />
            </div>
            <button className="button" type="button">
              <ClipboardCheck size={18} />
              Send technical request
            </button>
          </form>
        </div>

        <div className="detail-panel">
          <h2>Information required by the technical desk</h2>
          <div className="quote-checklist">
            <p>Part number from the component, service manual or previous invoice.</p>
            <p>Engine or generator model and complete serial number.</p>
            <p>Machine application: generator set, industrial equipment, marine engine or fleet unit.</p>
            <p>Required quantity, urgency and delivery destination.</p>
          </div>
          <p className="verification-banner">Compatibility should be verified through engine serial number.</p>
          <div className="feature" style={{ marginTop: 18 }}>
            <Phone color="#f2b84b" />
            <h3>Urgent requests</h3>
            <p>Technical desk: +39 010 000 0000, Monday to Friday, 08:00-18:00.</p>
          </div>
          <div className="feature" style={{ marginTop: 14 }}>
            <Mail color="#6ea8ff" />
            <h3>Email</h3>
            <p>quotes@apex-industrial.example</p>
          </div>
        </div>
      </div>
    </section>
  );
}
