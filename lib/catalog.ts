import productsJson from "@/lib/products.json";

export type CatalogProduct = {
  codice: string;
  marca: string;
  descrizione: string;
  categoria: string;
  compatibilita_motori: string[];
  prezzo: number;
  disponibilita: string;
  fornitore: string;
  immagine: string;
};

export const products = productsJson as CatalogProduct[];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProductSlug(product: CatalogProduct) {
  return slugify(`${product.codice}-${product.marca}`);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => getProductSlug(product) === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
  }).format(price);
}

export function getBrands() {
  return Array.from(new Set(products.map((product) => product.marca))).sort();
}

export function getCategories() {
  return Array.from(new Set(products.map((product) => product.categoria))).sort();
}
