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
        <p className="eyebrow">Catalogo ricambi</p>
        <h1>Ricerca per codice, marchio o categoria.</h1>
        <p>
          Le schede indicano riferimenti utili per l&apos;identificazione del ricambio. Disponibilita e compatibilita
          devono essere confermate prima dell&apos;ordine.
        </p>
      </div>

      <div className="catalog-tools">
        <div className="field">
          <label htmlFor="search">Codice o descrizione</label>
          <input id="search" placeholder="Esempio: Cummins FF5713, Racor 500FG" />
        </div>
        <div className="field">
          <label htmlFor="brand">Marchio</label>
          <select id="brand">
            <option>Tutti i marchi</option>
            {brands.map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="category">Categoria</label>
          <select id="category">
            <option>Tutte le categorie</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="inventory-note">
        <PackageSearch size={18} />
        <span>Disponibilita da confermare. Nessuna scheda sostituisce la verifica tramite seriale motore.</span>
        <Link className="text-link" href="/richiesta-preventivo">
          Richiedi verifica
        </Link>
      </div>

      <div className="section-header inline-note">
        <p>
          <Filter size={16} aria-hidden="true" /> La compatibilita deve essere verificata tramite numero di serie del
          motore.
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
