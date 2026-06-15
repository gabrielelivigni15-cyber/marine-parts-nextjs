# MarineParts Pro

Sito Next.js per vendita ricambi motori marini, impostato come catalogo tecnico per banco ricambi, officine nautiche,
cantieri e clienti B2B.

## Pagine incluse

- Home: proposta commerciale, metriche di magazzino e ricambi richiesti.
- Catalogo: elenco prodotti con codice, marca, categoria, fornitore, prezzo e disponibilita.
- Prodotto: rotta dinamica `app/prodotto/[slug]` con dettaglio tecnico e compatibilita motori.
- Cerca per Motore: selezione marca/modello e risultati compatibili presi da `products.json`.
- Richiesta Preventivo: form operativo per codice articolo, motore, urgenza e note tecniche.
- Area B2B: richiesta listino, riordino da distinta e gestione operatori.

## Dati demo

La sorgente prodotti e `lib/products.json`.

Campi usati:

- `codice`
- `marca`
- `descrizione`
- `categoria`
- `compatibilita_motori`
- `prezzo`
- `disponibilita`
- `fornitore`
- `immagine`

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
