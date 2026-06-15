"use client";

import { Search, ShipWheel } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { formatPrice, getProductSlug, products } from "@/lib/catalog";

function getEngineModel(engine: string, brand: string) {
  return engine.replace(`${brand} `, "");
}

export default function EngineSearchPage() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const brands = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.marca))).sort();
  }, []);

  const models = useMemo(() => {
    if (!selectedBrand) {
      return [];
    }

    return Array.from(
      new Set(
        products
          .filter((product) => product.marca === selectedBrand)
          .flatMap((product) => product.compatibilita_motori)
          .filter((engine) => engine.startsWith(selectedBrand))
          .map((engine) => getEngineModel(engine, selectedBrand))
      )
    ).sort();
  }, [selectedBrand]);

  const compatibleProducts = useMemo(() => {
    if (!selectedBrand || !selectedModel) {
      return [];
    }

    const selectedEngine = `${selectedBrand} ${selectedModel}`;
    return products.filter((product) => product.compatibilita_motori.includes(selectedEngine));
  }, [selectedBrand, selectedModel]);

  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Ricerca per applicazione</p>
        <h1>Trova i ricambi compatibili partendo dal motore.</h1>
        <p>
          Utile quando il cliente non ha il codice articolo. Seleziona marca e modello: il sistema filtra i ricambi del
          JSON in base alla compatibilita dichiarata.
        </p>
      </div>

      <div className="form-panel">
        <div className="form-grid">
          <div className="field">
            <label htmlFor="brand">Marca motore</label>
            <select
              id="brand"
              value={selectedBrand}
              onChange={(event) => {
                setSelectedBrand(event.target.value);
                setSelectedModel("");
              }}
            >
              <option value="" disabled>
                Seleziona marca
              </option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="model">Modello motore</label>
            <select
              id="model"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
              disabled={!selectedBrand}
            >
              <option value="" disabled>
                Seleziona modello
              </option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="button-row">
          <button className="button" type="button">
            <Search size={18} />
            {compatibleProducts.length > 0 ? `${compatibleProducts.length} ricambi compatibili` : "Filtra ricambi"}
          </button>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: 46 }}>
        <h2>Risultati compatibili</h2>
        <p>
          {!selectedBrand && "Scegli una marca motore per iniziare la ricerca."}
          {selectedBrand && !selectedModel && "Seleziona il modello per visualizzare disponibilita e codici."}
          {selectedBrand &&
            selectedModel &&
            `${compatibleProducts.length} risultati per ${selectedBrand} ${selectedModel}.`}
        </p>
      </div>

      {compatibleProducts.length > 0 ? (
        <div className="grid">
          {compatibleProducts.map((product) => (
            <article className="product-card" key={product.codice}>
              <img src={product.immagine} alt="" />
              <div className="product-card-body">
                <div className="tag-row">
                  <span>{product.categoria}</span>
                  <span>{product.marca}</span>
                </div>
                <h3>{product.descrizione}</h3>
                <div className="spec-list">
                  <div>
                    <span>Codice</span>
                    <strong>{product.codice}</strong>
                  </div>
                  <div>
                    <span>Fornitore</span>
                    <strong>{product.fornitore}</strong>
                  </div>
                </div>
                <div className="product-meta">
                  <strong>{formatPrice(product.prezzo)}</strong>
                  <span>{product.disponibilita}</span>
                </div>
                <p className="compatible-engines">
                  <ShipWheel size={17} />
                  Compatibile con {product.compatibilita_motori.join(", ")}
                </p>
                <div className="button-row">
                  <Link className="text-link" href={`/prodotto/${getProductSlug(product)}`}>
                    Apri scheda
                  </Link>
                  <Link className="text-link" href={`/richiesta-preventivo?codice=${product.codice}`}>
                    Preventivo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        selectedBrand &&
        selectedModel && (
          <div className="form-panel">
            <p>Nessun ricambio compatibile trovato. In un caso reale conviene aprire una richiesta con matricola motore.</p>
          </div>
        )
      )}
    </section>
  );
}
