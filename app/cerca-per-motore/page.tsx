"use client";

import { Barcode, Search, Settings2 } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { getProductSlug, getSearchModels, products } from "@/lib/catalog";

export default function PartsSearchPage() {
  const [partNumber, setPartNumber] = useState("");
  const [engineModel, setEngineModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const models = useMemo(() => getSearchModels(), []);

  const results = useMemo(() => {
    const partQuery = partNumber.trim().toLowerCase();
    const modelQuery = engineModel.trim().toLowerCase();

    return products.filter((product) => {
      const matchesPart =
        !partQuery ||
        product.partNumber.toLowerCase().includes(partQuery) ||
        product.description.toLowerCase().includes(partQuery);
      const matchesModel =
        !modelQuery ||
        product.brand.toLowerCase().includes(modelQuery) ||
        product.applications.some((application) => application.toLowerCase().includes(modelQuery)) ||
        product.modelNotes.toLowerCase().includes(modelQuery);

      return matchesPart && matchesModel;
    });
  }, [partNumber, engineModel]);

  return (
    <section className="section page-shell">
      <div className="section-header wide-header">
        <p className="eyebrow">Ricerca ricambi</p>
        <h1>Inserisci codice, motore o applicazione.</h1>
        <p>
          La ricerca aiuta a individuare una scheda. Per ordinare serve la verifica compatibilita tramite numero di serie
          del motore.
        </p>
      </div>

      <div className="search-console">
        <div className="field">
          <label htmlFor="part-number">Codice articolo</label>
          <input
            id="part-number"
            value={partNumber}
            onChange={(event) => setPartNumber(event.target.value)}
            placeholder="Esempio: Cummins FF5713"
          />
        </div>
        <div className="field">
          <label htmlFor="engine-model">Motore o applicazione</label>
          <input
            id="engine-model"
            value={engineModel}
            onChange={(event) => setEngineModel(event.target.value)}
            list="engine-models"
            placeholder="Esempio: gruppo elettrogeno, motore diesel"
          />
          <datalist id="engine-models">
            {models.map((model) => (
              <option key={model} value={model} />
            ))}
          </datalist>
        </div>
        <div className="field">
          <label htmlFor="serial-number">Numero di serie</label>
          <input
            id="serial-number"
            value={serialNumber}
            onChange={(event) => setSerialNumber(event.target.value)}
            placeholder="Necessario per la conferma"
          />
        </div>
        <div className="search-console-footer">
          <button className="button" type="button">
            <Search size={18} />
            Cerca
          </button>
          <span>
            {serialNumber
              ? "Numero di serie indicato: usare nella richiesta preventivo."
              : "Inserire il seriale se disponibile."}
          </span>
        </div>
      </div>

      <div className="section-header inline-note">
        <h2>Risultati</h2>
        <p>I risultati non confermano la compatibilita. Servono codice corretto e seriale motore.</p>
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
              <span>Marchio</span>
              <strong>{product.brand}</strong>
            </div>
            <div>
              <span>Disponibilita</span>
              <strong>{product.availability}</strong>
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
