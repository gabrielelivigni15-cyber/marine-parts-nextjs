import productsJson from "@/lib/products.json";

export type CatalogProduct = {
  partNumber: string;
  brand: string;
  description: string;
  category: string;
  applications: string[];
  modelNotes: string;
  availability: string;
  image: string;
  verificationNote: string;
};

export const products = productsJson as CatalogProduct[];

export const categories = [
  "Ricambi industriali",
  "Ricambi motori diesel",
  "Ricambi gruppi elettrogeni",
  "Ricambi motori marini",
  "Filtri",
  "Sensori",
  "Sistemi di raffreddamento",
  "Kit manutenzione"
];

export const supportedBrands = ["Baudouin", "Cummins", "Volvo Penta", "Perkins", "Kohler", "Yanmar", "Lombardini"];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProductSlug(product: CatalogProduct) {
  return slugify(`${product.partNumber}-${product.brand}`);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => getProductSlug(product) === slug);
}

export function getBrands() {
  return Array.from(new Set(products.map((product) => product.brand))).sort();
}

export function getCategories() {
  return Array.from(new Set(products.map((product) => product.category))).sort();
}

export function getSearchModels() {
  return Array.from(new Set(products.flatMap((product) => [product.brand, ...product.applications]))).sort();
}
