"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProducts } from "../../lib/api";
import type { Product } from "../../types/product";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    getProducts()
      .then((items) => setProduct(items.find((item) => String(item.id) === id)))
      .catch(() => setError("No se pudo cargar el producto. Intentá nuevamente más tarde."))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) {
    return <main className="p-8" role="status">Cargando producto...</main>;
  }

  if (error) {
    return <main className="p-8" role="alert">{error}</main>;
  }

  if (!product) {
    return <main className="p-8">Producto no encontrado.</main>;
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <Link href="/" className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-move-left preview-icon"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        <h2 className="text-sm">Volver al catálogo</h2>
      </Link>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="aspect-square w-full rounded-3xl object-cover"
        />

        <section className="flex h-full flex-col rounded-3xl bg-bright-white p-6">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">{product.nombre}</h1>
            <h2 className="text-3xl font-bold">${product.precio}</h2>
          </div>
          <h2 className="mt-12 text-xl font-bold">Detalles</h2>
          <h2 className="mt-2">{product.descripcion}</h2>
          {product.marca && <h2 className="mt-4">Marca: {product.marca}</h2>}
          <div className="mt-auto flex items-center gap-3 pt-6">
            <div className="flex items-center gap-4 rounded-full bg-flamingo-pink/40 px-4 py-2">
              <button
                type="button"
                aria-label="Disminuir cantidad"
                onClick={() =>
                  setCantidad((current) => Math.max(1, current - 1))
                }
                className="font-bold"
              >
                −
              </button>

              <span>{cantidad}</span>

              <button
                type="button"
                aria-label="Aumentar cantidad"
                onClick={() => setCantidad((current) => current + 1)}
                className="font-bold"
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full bg-flamingo-pink px-5 text-bright-white transition hover:bg-darker-pink"
            >
              Agregar al carrito
            </button>

            <button
              type="button"
              aria-label={
                favorito ? "Quitar de favoritos" : "Agregar a favoritos"
              }
              aria-pressed={favorito}
              onClick={() => setFavorito((current) => !current)}
              className={`grid h-11 w-11 place-items-center rounded-full transition ${
                favorito
                  ? "bg-darker-pink text-bright-white"
                  : "bg-flamingo-pink/40 text-darker-pink"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill={favorito ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
