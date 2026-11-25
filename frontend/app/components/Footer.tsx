import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darker-green text-bright-white py-4 px-8 mt-auto w-full">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-sm">
          &copy; 2024 TiendaSimple | Todos los derechos reservados.
        </h2>
        <div className="flex gap-4">
          <Link href="/acerca" className="text-sm hover:underline">
            Acerca de
          </Link>
          <Link href="/contacto" className="text-sm hover:underline">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
