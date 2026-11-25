import type { Product } from "../types/product";

const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").replace(/\/$/, "");

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) {
    throw new Error(`Error al cargar productos: ${response.status}`);
  }
  return response.json() as Promise<Product[]>;
}
