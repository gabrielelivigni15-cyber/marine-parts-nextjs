import { ArrowUpRight, Barcode } from "lucide-react";
import Link from "next/link";
import { getProductSlug, type CatalogProduct } from "@/lib/catalog";

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <article className="product-card">
      <img src={product.image} alt="" />
      <div className="product-card-body">
        <div className="tag-row">
          <span>{product.category}</span>
          <span>{product.brand}</span>
        </div>
        <h3>{product.description}</h3>
        <p className="sku-line">
          <Barcode size={15} />
          {product.partNumber}
        </p>
        <p className="availability-line">{product.availability}</p>
        <p className="verification-line">{product.verificationNote}</p>
        <Link className="text-link" href={`/prodotto/${getProductSlug(product)}`}>
          Apri scheda
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
