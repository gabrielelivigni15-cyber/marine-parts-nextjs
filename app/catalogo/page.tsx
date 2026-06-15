import { Filter, PackageSearch } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getBrands, getCategories, products } from "@/lib/catalog";

export default function CatalogPage() {
  const brands = getBrands();
  const categories = getCategories();

  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Catalogo tecnico</p>
        <h1>Ricambi motori marini disponibili a magazzino o da fornitore.</h1>
        <p>
          Elenco demo strutturato come un catalogo reale: codice articolo, marca, compatibilita motore, fornitore,
          prezzo e disponibilita. I filtri sono predisposti per essere collegati a ricerca server o gestionale.
        </p>
      </div>

      <div className="catalog-tools">
        <div className="field">
          <label htmlFor="search">Cerca codice o descrizione</label>
          <input id="search" placeholder="Es. VP-21951356, girante, filtro gasolio" />
        </div>
        <div className="field">
          <label htmlFor="brand">Marca</label>
          <select id="brand">
            <option>Tutte le marche</option>
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
          {products.length} articoli demo. Disponibilita espressa come stock locale, deposito fornitore o arrivo stimato.
        </span>
        <Link className="text-link" href="/richiesta-preventivo">
          Richiedi quotazione
        </Link>
      </div>

      <div className="section-header" style={{ marginTop: 34 }}>
        <p>
          <Filter size={16} aria-hidden="true" /> Catalogo ricambi manutenzione, raffreddamento, filtrazione,
          accensione e anodi.
        </p>
      </div>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.codice} product={product} />
        ))}
      </div>
    </section>
  );
}
