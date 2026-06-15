# Apex Ricambi Industriali

Sito Next.js per un'azienda B2B di ricambi industriali: motori diesel, gruppi elettrogeni, motori marini, filtri,
sensori, sistemi di raffreddamento e kit manutenzione.

## Pagine incluse

- Inizio: posizionamento industriale, ricerca ricambi e categorie tecniche.
- Catalogo: elenco prodotti con codice ricambio, marchio, categoria, disponibilita e tempo indicativo.
- Prodotto: rotta dinamica `app/prodotto/[slug]` con scheda tecnica e nota di verifica compatibilita.
- Ricerca Ricambi: ricerca per codice ricambio, modello motore e numero di serie.
- Richiesta Preventivo: form tecnico per ufficio acquisti e supporto ricambi.
- B2B: accesso operatori, richieste ricorrenti e supporto per flotte/officine.

## Dati prodotto

La sorgente prodotti e `lib/products.json`. Non vengono inventati dati tecnici sconosciuti, quantita di magazzino o
fornitori fittizi. Ogni record include:
`La compatibilita deve essere verificata tramite numero di serie del motore.`

Campi usati:

- `partNumber`
- `brand`
- `description`
- `category`
- `applications`
- `modelNotes`
- `availability`
- `image`
- `verificationNote`

`lib/catalog.ts` normalizza i dati e genera gli slug prodotto.

## Struttura principale

```txt
app/
  b2b/page.tsx
  catalogo/page.tsx
  cerca-per-motore/page.tsx
  prodotto/[slug]/page.tsx
  richiesta-preventivo/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  Footer.tsx
  Header.tsx
  ProductCard.tsx
lib/
  catalog.ts
  products.json
```

## Avvio

```bash
npm install
npm run dev
```

Poi apri `http://localhost:3000`.

## Deploy

Il progetto e pronto per Vercel. La configurazione e in `vercel.json`; i passaggi completi sono in `DEPLOYMENT.md`.
