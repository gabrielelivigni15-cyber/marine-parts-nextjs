import { ArrowUpRight, Barcode, Boxes } from "lucide-react";
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
        <div className="product-meta">
          <strong>{product.availability}</strong>
          <span>{product.leadTime}</span>
        </div>
        <p className="supplier-line">
          <Boxes size={15} />
          {product.supplier}
        </p>
        <p className="verification-line">{product.verificationNote}</p>
        <Link className="text-link" href={`/prodotto/${getProductSlug(product)}`}>
          Open technical record
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
