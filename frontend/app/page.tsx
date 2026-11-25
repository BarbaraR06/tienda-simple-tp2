"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/productCard";
import { getProducts } from "./lib/api";
import type { Product } from "./types/product";

export default function Home() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProductos)
      .catch(() => setError("No se pudo cargar el catálogo. Intentá nuevamente más tarde."))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-1 sm:items-start">
        <h1 className="text-3xl font-bold mb-8 ">Catálogo</h1>
        {cargando && <p role="status">Cargando productos...</p>}
        {error && <p role="alert">{error}</p>}
        {!cargando && !error && productos.length === 0 && <p>No hay productos disponibles.</p>}
        {!cargando && !error && productos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productos.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
