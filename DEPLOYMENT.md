# Deploy su Vercel

Repository GitHub:

```txt
https://github.com/gabrielelivigni15-cyber/marine-parts-nextjs
```

## Deploy consigliato da dashboard

1. Apri `https://vercel.com/new`.
2. Accedi con GitHub o collega l'account GitHub a Vercel.
3. Seleziona il repository `gabrielelivigni15-cyber/marine-parts-nextjs`.
4. Imposta:
   - Framework Preset: `Next.js`
   - Root Directory: `.`
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Output Directory: lascia vuoto/default
5. Environment Variables: nessuna necessaria per questa demo.
6. Clicca `Deploy`.

Vercel usera il branch `main` come branch di produzione. Ogni push su `main` generera un nuovo deploy production; gli altri branch generano preview deployment.

## Deploy da CLI

Se preferisci pubblicare da terminale:

```bash
npm install -g vercel
vercel login
vercel --prod
```

Alla prima esecuzione, Vercel chiede di collegare la cartella locale a un progetto. Rispondi usando i default del progetto, gia descritti in `vercel.json`.

## Verifica prima del deploy

```bash
npm ci
npm run build
```

La build locale deve completare senza errori. I warning su `<img>` sono non bloccanti per questa demo.
