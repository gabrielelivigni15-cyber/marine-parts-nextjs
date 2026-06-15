import { Filter, PackageSearch } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getBrands, getCategories, products } from "@/lib/catalog";

export default function CatalogPage() {
  const brands = getBrands();
  const categories = getCategories();

  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Industrial catalog</p>
        <h1>Spare parts for engines, generator sets and industrial equipment.</h1>
        <p>
          This catalog is structured for technical sourcing. Search by part number, filter by brand or category, then
          open a product record before sending a quote request.
        </p>
      </div>

      <div className="catalog-tools">
        <div className="field">
          <label htmlFor="search">Part number or description</label>
          <input id="search" placeholder="Example: CUM-SEN, Perkins kit, fuel filter" />
        </div>
        <div className="field">
          <label htmlFor="brand">Brand</label>
          <select id="brand">
            <option>All brands</option>
            {brands.map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option>All categories</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="inventory-note">
        <PackageSearch size={18} />
        <span>
          {products.length} demo records. Availability is shown as warehouse stock, supplier stock, low stock or
          on-request.
        </span>
        <Link className="text-link" href="/richiesta-preventivo">
          Request quote
        </Link>
      </div>

      <div className="section-header inline-note">
        <p>
          <Filter size={16} aria-hidden="true" /> Compatibility should be verified through engine serial number.
        </p>
      </div>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.partNumber} product={product} />
        ))}
      </div>
    </section>
  );
}
