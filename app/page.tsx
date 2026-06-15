import { ArrowRight, ClipboardCheck, Database, Search, Settings2, Truck } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, supportedBrands } from "@/lib/catalog";

export default function HomePage() {
  const warehouseItems = products.filter((product) => product.availability.toLowerCase().includes("warehouse"));

  return (
    <>
      <section className="hero industrial-hero">
        <div className="hero-copy">
          <p className="eyebrow">Industrial spare parts supply</p>
          <h1>Parts sourcing for diesel engines, generator sets and industrial machinery.</h1>
          <p>
            Apex Industrial Parts supports maintenance teams, procurement offices and service workshops with part-number
            search, engine-model matching and serial-number verification before order confirmation.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/cerca-per-motore">
              Search parts
              <Search size={18} />
            </Link>
            <Link className="button secondary" href="/richiesta-preventivo">
              Request quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Operational search summary">
          <div>
            <span>Primary workflow</span>
            <strong>Part number / engine model / serial number</strong>
          </div>
          <div>
            <span>Supported lines</span>
            <strong>{supportedBrands.join(", ")}</strong>
          </div>
          <div>
            <span>Verification rule</span>
            <strong>Compatibility should be verified through engine serial number.</strong>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="stat-strip">
          <div>
            <strong>{products.length}</strong>
            <span>sample industrial part records</span>
          </div>
          <div>
            <strong>{warehouseItems.length}</strong>
            <span>items marked with warehouse stock</span>
          </div>
          <div>
            <strong>7</strong>
            <span>engine and generator brands</span>
          </div>
          <div>
            <strong>B2B</strong>
            <span>procurement and service accounts</span>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-header">
          <p className="eyebrow">Search first, quote second</p>
          <h2>Built around the way technical buyers actually request parts.</h2>
        </div>
        <div className="process-grid">
          <div className="feature">
            <Search color="#f2b84b" />
            <h3>Part number search</h3>
            <p>Use OEM references, service-kit codes or supplier references as the fastest route to a quote.</p>
          </div>
          <div className="feature">
            <Settings2 color="#6ea8ff" />
            <h3>Engine model search</h3>
            <p>Filter by Baudouin, Cummins, Volvo Penta, Perkins, Kohler, Yanmar and Lombardini model families.</p>
          </div>
          <div className="feature">
            <ClipboardCheck color="#35c46d" />
            <h3>Serial-number verification</h3>
            <p>Compatibility should be verified through engine serial number before order confirmation.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Categories</p>
          <h2>Industrial inventory structure.</h2>
          <p>
            Product records are organized by application and part family, so buyers can move from a maintenance job to a
            technical request without browsing a retail storefront.
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
          <p className="eyebrow">Selected records</p>
          <h2>Current demo catalog.</h2>
          <p>
            Each record shows the part number, brand, application, availability and verification note. No technical
            specification is presented unless it is part of the known product description.
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
          <p className="eyebrow">B2B operations</p>
          <h2>For fleets, workshops, generator service teams and industrial maintenance.</h2>
        </div>
        <div className="grid">
          <div className="feature">
            <Truck color="#f2b84b" />
            <h3>Warehouse and supplier stock</h3>
            <p>Records distinguish central stock, supplier stock, low stock and on-request parts.</p>
          </div>
          <div className="feature">
            <ClipboardCheck color="#35c46d" />
            <h3>Technical request handling</h3>
            <p>Requests capture part number, engine model, serial number and machine application.</p>
          </div>
          <div className="feature">
            <Database color="#6ea8ff" />
            <h3>Account purchasing</h3>
            <p>B2B customers can request support for repeat orders, fleet lists and scheduled maintenance kits.</p>
          </div>
        </div>
      </section>
    </>
  );
}
