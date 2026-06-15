import { notFound } from "next/navigation";
import { ArrowLeft, ClipboardList, Send } from "lucide-react";
import Link from "next/link";
import { formatPrice, getProductBySlug, getProductSlug, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: getProductSlug(product) }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <Link className="text-link" href="/catalogo">
        <ArrowLeft size={17} />
        Torna al catalogo
      </Link>

      <div className="detail-grid" style={{ marginTop: 24 }}>
        <div className="detail-image">
          <img src={product.immagine} alt="" />
        </div>
        <div className="detail-panel detail-copy">
          <div className="tag-row">
            <span>{product.categoria}</span>
            <span>{product.marca}</span>
          </div>
          <h1>{product.descrizione}</h1>
          <p>
            Scheda articolo pensata per conferma ricambio: codice, disponibilita, fornitore e modelli motore compatibili
            sono visibili prima della richiesta di preventivo.
          </p>

          <div className="product-meta large-meta">
            <strong>{formatPrice(product.prezzo)}</strong>
            <span>{product.disponibilita}</span>
          </div>

          <div className="spec-list">
            <div>
              <span>Codice articolo</span>
              <strong>{product.codice}</strong>
            </div>
            <div>
              <span>Marca</span>
              <strong>{product.marca}</strong>
            </div>
            <div>
              <span>Categoria</span>
              <strong>{product.categoria}</strong>
            </div>
            <div>
              <span>Fornitore</span>
              <strong>{product.fornitore}</strong>
            </div>
          </div>

          <h3>Compatibilita motori</h3>
          <ul className="compat-list">
            {product.compatibilita_motori.map((engine) => (
              <li key={engine}>{engine}</li>
            ))}
          </ul>

          <div className="button-row">
            <Link className="button" href={`/richiesta-preventivo?codice=${product.codice}`}>
              <Send size={18} />
              Richiedi preventivo
            </Link>
            <Link className="text-link" href="/cerca-per-motore">
              <ClipboardList size={17} />
              Verifica altri motori
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
