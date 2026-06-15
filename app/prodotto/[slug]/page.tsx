import { notFound } from "next/navigation";
import { ArrowLeft, ClipboardList, Send } from "lucide-react";
import Link from "next/link";
import { getProductBySlug, getProductSlug, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: getProductSlug(product) }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section page-shell">
      <Link className="text-link" href="/catalogo">
        <ArrowLeft size={17} />
        Back to catalog
      </Link>

      <div className="detail-grid product-detail-grid">
        <div className="detail-image industrial-image">
          <img src={product.image} alt="" />
        </div>
        <div className="detail-panel detail-copy">
          <div className="tag-row">
            <span>{product.category}</span>
            <span>{product.brand}</span>
          </div>
          <h1>{product.description}</h1>
          <p>
            Technical product record for sourcing and quotation. The application list is a starting point only:
            compatibility should be verified through engine serial number.
          </p>

          <div className="part-number-panel">
            <span>Part number</span>
            <strong>{product.partNumber}</strong>
          </div>

          <div className="spec-list">
            <div>
              <span>Brand</span>
              <strong>{product.brand}</strong>
            </div>
            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Availability</span>
              <strong>{product.availability}</strong>
            </div>
            <div>
              <span>Lead time</span>
              <strong>{product.leadTime}</strong>
            </div>
            <div>
              <span>Supplier channel</span>
              <strong>{product.supplier}</strong>
            </div>
          </div>

          <h3>Known application areas</h3>
          <ul className="compat-list">
            {product.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>

          <h3>Referenced engine or generator models</h3>
          <ul className="compat-list">
            {product.compatibleModels.map((model) => (
              <li key={model}>{model}</li>
            ))}
          </ul>

          <p className="verification-banner">{product.verificationNote}</p>

          <div className="button-row">
            <Link className="button" href={`/richiesta-preventivo?part=${product.partNumber}`}>
              <Send size={18} />
              Request quote
            </Link>
            <Link className="text-link" href="/cerca-per-motore">
              <ClipboardList size={17} />
              Search another engine
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
