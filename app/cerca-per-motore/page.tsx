"use client";

import { Barcode, Search, Settings2 } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { getEngineModels, getProductSlug, products } from "@/lib/catalog";

export default function PartsSearchPage() {
  const [partNumber, setPartNumber] = useState("");
  const [engineModel, setEngineModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const models = useMemo(() => getEngineModels(), []);

  const results = useMemo(() => {
    const partQuery = partNumber.trim().toLowerCase();
    const modelQuery = engineModel.trim().toLowerCase();

    return products.filter((product) => {
      const matchesPart =
        !partQuery ||
        product.partNumber.toLowerCase().includes(partQuery) ||
        product.description.toLowerCase().includes(partQuery);
      const matchesModel =
        !modelQuery || product.compatibleModels.some((model) => model.toLowerCase().includes(modelQuery));

      return matchesPart && matchesModel;
    });
  }, [partNumber, engineModel]);

  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Ricerca ricambi</p>
        <h1>Cerca per codice ricambio, modello motore o numero di serie.</h1>
        <p>
          Usa il codice ricambio quando disponibile. Usa il modello motore per restringere il catalogo. Inserisci il
          numero di serie nella richiesta: la compatibilita deve essere verificata tramite numero di serie del motore.
        </p>
      </div>

      <div className="search-console">
        <div className="field">
          <label htmlFor="part-number">Codice ricambio</label>
          <input
            id="part-number"
            value={partNumber}
            onChange={(event) => setPartNumber(event.target.value)}
            placeholder="Esempio: CUM-SEN-4921475"
          />
        </div>
        <div className="field">
          <label htmlFor="engine-model">Modello motore o generatore</label>
          <input
            id="engine-model"
            value={engineModel}
            onChange={(event) => setEngineModel(event.target.value)}
            list="engine-models"
            placeholder="Esempio: Perkins 1104D, Cummins QSB"
          />
          <datalist id="engine-models">
            {models.map((model) => (
              <option key={model} value={model} />
            ))}
          </datalist>
        </div>
        <div className="field">
          <label htmlFor="serial-number">Numero di serie motore</label>
          <input
            id="serial-number"
            value={serialNumber}
            onChange={(event) => setSerialNumber(event.target.value)}
            placeholder="Richiesto per verifica compatibilita"
          />
        </div>
        <div className="search-console-footer">
          <button className="button" type="button">
            <Search size={18} />
            {results.length} schede trovate
          </button>
          <span>
            {serialNumber
              ? "Numero di serie inserito per la richiesta tecnica."
              : "Numero di serie non ancora inserito."}
          </span>
        </div>
      </div>

      <div className="section-header inline-note">
        <h2>Risultati ricerca</h2>
        <p>I risultati sono corrispondenze di catalogo, non conferme definitive di compatibilita.</p>
      </div>

      <div className="results-table">
        {results.map((product) => (
          <article className="result-row" key={product.partNumber}>
            <div>
              <span className="row-label">
                <Barcode size={15} />
                {product.partNumber}
              </span>
              <h3>{product.description}</h3>
              <p>{product.verificationNote}</p>
            </div>
            <div>
              <span>{product.brand}</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>{product.availability}</span>
              <strong>{product.leadTime}</strong>
            </div>
            <div className="row-actions">
              <Link className="text-link" href={`/prodotto/${getProductSlug(product)}`}>
                <Settings2 size={16} />
                Scheda
              </Link>
              <Link className="text-link" href={`/richiesta-preventivo?part=${product.partNumber}`}>
                Preventivo
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
