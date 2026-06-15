import { Search } from "lucide-react";
import Link from "next/link";
import { getBrands, getCategories, getProductSlug, products } from "@/lib/catalog";

export default function CatalogPage() {
  const brands = getBrands();
  const categories = getCategories();

  return (
    <section className="section page-shell tool-page">
      <div className="section-header wide-header">
        <p className="eyebrow">Strumento ricerca ricambi</p>
        <h1>Catalogo tecnico per identificare componenti.</h1>
        <p>
          Usa codice, marchio o categoria per restringere la ricerca. Disponibilita e compatibilita devono essere
          confermate prima dell&apos;ordine.
        </p>
      </div>

      <div className="catalog-console">
        <div className="field search-primary-field">
          <label htmlFor="search">Ricerca</label>
          <input id="search" placeholder="Cummins FF5713, Racor 500FG, sensore pressione, girante" />
        </div>
        <div className="field">
          <label htmlFor="brand">Marchio</label>
          <select id="brand">
            <option>Tutti</option>
            {brands.map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="category">Categoria</label>
          <select id="category">
            <option>Tutte</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <button className="button" type="button">
          <Search size={18} />
          Cerca
        </button>
      </div>

      <div className="technical-note">
        La compatibilita deve essere verificata tramite numero di serie del motore. La disponibilita viene confermata su
        richiesta.
      </div>

      <div className="parts-table" aria-label="Risultati catalogo">
        <div className="parts-table-head">
          <span>Riferimento</span>
          <span>Marchio</span>
          <span>Categoria</span>
          <span>Applicazione</span>
          <span></span>
        </div>
        {products.map((product) => (
          <article className="parts-row" key={product.partNumber}>
            <div>
              <strong>{product.partNumber}</strong>
              <p>{product.description}</p>
            </div>
            <span>{product.brand}</span>
            <span>{product.category}</span>
            <span>{product.modelNotes}</span>
            <Link className="text-link" href={`/prodotto/${getProductSlug(product)}`}>
              Scheda
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
