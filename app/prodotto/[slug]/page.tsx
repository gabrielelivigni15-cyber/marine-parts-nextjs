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
        Torna al catalogo
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
            Scheda ricambio per identificazione e richiesta preventivo. I dati riportati non sostituiscono la verifica
            sul numero di serie del motore.
          </p>

          <div className="part-number-panel">
            <span>Codice o riferimento</span>
            <strong>{product.partNumber}</strong>
          </div>

          <div className="spec-list">
            <div>
              <span>Marchio</span>
              <strong>{product.brand}</strong>
            </div>
            <div>
              <span>Categoria</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Disponibilita</span>
              <strong>{product.availability}</strong>
            </div>
            <div>
              <span>Nota applicazione</span>
              <strong>{product.modelNotes}</strong>
            </div>
          </div>

          <h3>Applicazioni</h3>
          <ul className="compat-list">
            {product.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>

          <p className="verification-banner">{product.verificationNote}</p>

          <div className="button-row">
            <Link className="button" href={`/richiesta-preventivo?part=${product.partNumber}`}>
              <Send size={18} />
              Richiedi preventivo
            </Link>
            <Link className="text-link" href="/cerca-per-motore">
              <ClipboardList size={17} />
              Cerca altro ricambio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
