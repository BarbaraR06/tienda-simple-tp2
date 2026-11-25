import Link from "next/link";
import type { Product } from "../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full max-w-65 rounded-lg border border-black/5 bg-bright-white p-3.5 shadow-xl font-(family-name:--font-dm-sans) ">
      <Link href={`/productos/${product.id}`} className="block">
        <img
          className="aspect-square w-full rounded-lg object-cover"
          src={product.imagen}
          alt={product.nombre}
        />

        <div className="mt-3 flex items-center justify-between gap-2">
          <h2 className="font-(family-name:--font-manrope) text-lg font-bold text-foreground">
            {product.nombre}
          </h2>

          <span className="shrink-0 rounded-full bg-amber-gold px-3 py-1 text-xs font-semibold text-bright-white">
            ${product.precio}
          </span>
        </div>

        <p className="mt-2 text-xs text-foreground/60">{product.descripcion}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.stock !== undefined && (
            <span className="rounded-full bg-lime-cream px-2.5 py-1 text-[10px] font-medium text-foreground">
              {product.stock} disponibles
            </span>
          )}
        </div>
      </Link>

      <Link
        href={`/productos/${product.id}`}
        className="mt-2 flex w-full justify-center rounded-full bg-simply-green px-4 py-2.5 font-semibold text-bright-white transition hover:bg-darker-green"
      >
        Agregar al carrito
      </Link>
    </div>
  );
}
