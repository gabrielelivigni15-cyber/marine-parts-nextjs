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
        <p className="eyebrow">Parts search</p>
        <h1>Search by part number, engine model or serial number.</h1>
        <p>
          Use the part number when available. Use engine model to narrow the catalog. Add the serial number when
          requesting a quote: compatibility should be verified through engine serial number.
        </p>
      </div>

      <div className="search-console">
        <div className="field">
          <label htmlFor="part-number">Part number</label>
          <input
            id="part-number"
            value={partNumber}
            onChange={(event) => setPartNumber(event.target.value)}
            placeholder="Example: CUM-SEN-4921475"
          />
        </div>
        <div className="field">
          <label htmlFor="engine-model">Engine or generator model</label>
          <input
            id="engine-model"
            value={engineModel}
            onChange={(event) => setEngineModel(event.target.value)}
            list="engine-models"
            placeholder="Example: Perkins 1104D, Cummins QSB"
          />
          <datalist id="engine-models">
            {models.map((model) => (
              <option key={model} value={model} />
            ))}
          </datalist>
        </div>
        <div className="field">
          <label htmlFor="serial-number">Engine serial number</label>
          <input
            id="serial-number"
            value={serialNumber}
            onChange={(event) => setSerialNumber(event.target.value)}
            placeholder="Required for final compatibility check"
          />
        </div>
        <div className="search-console-footer">
          <button className="button" type="button">
            <Search size={18} />
            {results.length} matching records
          </button>
          <span>{serialNumber ? "Serial number captured for quote request." : "Serial number not entered yet."}</span>
        </div>
      </div>

      <div className="section-header inline-note">
        <h2>Search results</h2>
        <p>Results are catalog matches, not final compatibility confirmation.</p>
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
                Record
              </Link>
              <Link className="text-link" href={`/richiesta-preventivo?part=${product.partNumber}`}>
                Quote
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
