# Apex Industrial Parts

Sito Next.js per un'azienda B2B di ricambi industriali: diesel engines, generator sets, marine engines, filters,
sensors, cooling systems e maintenance kits.

## Pagine incluse

- Home: posizionamento industriale, ricerca ricambi e categorie tecniche.
- Catalogo: elenco prodotti con part number, brand, categoria, disponibilita e lead time.
- Prodotto: rotta dinamica `app/prodotto/[slug]` con record tecnico e nota di verifica compatibilita.
- Parts Search: ricerca per part number, engine model e serial number.
- Request Quote: form tecnico per procurement e supporto ricambi.
- B2B: accesso operatori, richieste ricorrenti e supporto per flotte/officine.

## Dati demo

La sorgente prodotti e `lib/products.json`. Non vengono inventati dati tecnici sconosciuti; ogni record include:
`Compatibility should be verified through engine serial number.`

Campi usati:

- `partNumber`
- `brand`
- `description`
- `category`
- `applications`
- `compatibleModels`
- `availability`
- `leadTime`
- `supplier`
- `image`
- `verificationNote`

`lib/catalog.ts` normalizza i dati, genera gli slug prodotto e formatta i prezzi.

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
