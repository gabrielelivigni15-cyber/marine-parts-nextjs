import { BadgePercent, FileSpreadsheet, LockKeyhole, PackageCheck, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import { supportedBrands } from "@/lib/catalog";

export default function B2BPage() {
  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">B2B customers</p>
        <h1>Procurement support for workshops, fleets, generator service companies and industrial plants.</h1>
        <p>
          The B2B workflow is designed for repeat purchasing, scheduled maintenance, machine-down requests and technical
          identification work before orders are released.
        </p>
      </div>

      <div className="detail-grid">
        <div className="b2b-panel">
          <LockKeyhole color="#f2b84b" />
          <h2>Request B2B access</h2>
          <form className="form-grid">
            <div className="field full">
              <label htmlFor="company">Company name</label>
              <input id="company" placeholder="Workshop / fleet / industrial plant / distributor" />
            </div>
            <div className="field">
              <label htmlFor="vat">VAT or company registration</label>
              <input id="vat" placeholder="Company identifier" />
            </div>
            <div className="field">
              <label htmlFor="email">Purchasing email</label>
              <input id="email" type="email" placeholder="parts@company.com" />
            </div>
            <div className="field full">
              <label htmlFor="brands">Brands serviced</label>
              <input id="brands" placeholder={supportedBrands.join(", ")} />
            </div>
            <button className="button" type="button">
              Request account review
            </button>
          </form>
        </div>

        <div className="grid b2b-grid">
          <div className="feature">
            <BadgePercent color="#f2b84b" />
            <h3>Account pricing workflow</h3>
            <p>Quote handling can separate emergency orders, planned maintenance and recurring fleet stock.</p>
          </div>
          <div className="feature">
            <FileSpreadsheet color="#35c46d" />
            <h3>Part lists and CSV requests</h3>
            <p>Send part-number lists, service-kit requirements or multi-engine maintenance schedules.</p>
          </div>
          <div className="feature">
            <PackageCheck color="#6ea8ff" />
            <h3>Stock and lead-time control</h3>
            <p>Records distinguish central warehouse, supplier stock, low stock and on-request sourcing.</p>
          </div>
          <div className="feature">
            <UserRoundCheck color="#6ea8ff" />
            <h3>Technical desk support</h3>
            <p>Compatibility should be verified through engine serial number before purchase confirmation.</p>
            <div className="button-row">
              <Link className="text-link" href="/richiesta-preventivo">
                Open technical request
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
