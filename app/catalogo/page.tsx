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
        <p className="eyebrow">Catalogo industriale</p>
        <h1>Ricambi per motori, gruppi elettrogeni e impianti industriali.</h1>
        <p>
          Catalogo strutturato per sourcing tecnico. Cerca per codice ricambio, filtra per marchio o categoria, apri la
          scheda e invia la richiesta di preventivo con numero di serie motore.
        </p>
      </div>

      <div className="catalog-tools">
        <div className="field">
          <label htmlFor="search">Codice ricambio o descrizione</label>
          <input id="search" placeholder="Esempio: CUM-SEN, kit Perkins, filtro carburante" />
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
        <span>
          {products.length} schede demo. La disponibilita indica magazzino, disponibilita fornitore, scorta limitata o
          articolo su richiesta.
        </span>
        <Link className="text-link" href="/richiesta-preventivo">
          Richiedi preventivo
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
