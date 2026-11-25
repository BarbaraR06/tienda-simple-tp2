"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Catálogo", href: "/" },
  { label: "Carrito", href: "/carrito" },
  { label: "Acerca de", href: "/acerca" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="grid w-full grid-cols-[1fr_auto] items-center gap-y-3 py-5 sm:grid-cols-[1fr_auto_1fr] sm:px-8">
      <Link
        href="/"
        aria-label="TiendaSimple"
        className="relative h-12 w-12 overflow-hidden rounded-full"
      >
        {/* logo */}
        <Image
          src="/logo.png"
          alt="Logo de TiendaSimple"
          fill
          className="object-contain"
        />
      </Link>

      {/* navegacion */}
      <nav
        aria-label="navegacion"
        className="col-span-2 row-start-2 flex items-center justify-self-center rounded-full bg-lime-cream p-1 font-(family-name:--font-dm-sans) shadow-xl sm:col-span-1 sm:col-start-2 sm:row-start-1"
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`rounded-full px-4 py-2 text-xs transition ${
              link.href === pathname
                ? "bg-simply-green font-semibold text-bright-white shadow-sm"
                : "text-foreground/90 hover:bg-bright-white/60"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* iconos */}
      <div className="col-start-2 row-start-1 flex justify-end gap-2 sm:col-start-3">
        <button
          type="button"
          aria-label="Buscar"
          className="grid h-10 w-10 place-items-center rounded-full bg-flamingo-pink text-darker-pink shadow-sm transition hover:bg-lime-cream"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="m16 16 4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Carrito"
          className="grid h-10 w-10 place-items-center rounded-full bg-flamingo-pink text-darker-pink shadow-sm transition hover:bg-lime-cream"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1" fill="currentColor" />
            <circle cx="18" cy="20" r="1" fill="currentColor" />
          </svg>
        </button>
      </div>
    </header>
  );
}
