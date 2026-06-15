import { ShipWheel } from "lucide-react";
import Link from "next/link";
import { formatPrice, getProductSlug, type CatalogProduct } from "@/lib/catalog";

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <article className="product-card">
      <img src={product.immagine} alt="" />
      <div className="product-card-body">
        <div className="tag-row">
          <span>{product.categoria}</span>
          <span>{product.marca}</span>
        </div>
        <h3>{product.descrizione}</h3>
        <p className="sku-line">Codice {product.codice}</p>
        <div className="product-meta">
          <strong>{formatPrice(product.prezzo)}</strong>
          <span>{product.disponibilita}</span>
        </div>
        <p className="supplier-line">Fornitore: {product.fornitore}</p>
        <Link className="text-link" href={`/prodotto/${getProductSlug(product)}`}>
          <ShipWheel size={17} />
          Scheda prodotto
        </Link>
      </div>
    </article>
  );
}
