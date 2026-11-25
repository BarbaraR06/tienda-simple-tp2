export default function Carrito() {
  return (
    <main className="flex w-full flex-col items-center gap-4 mt-40">
      <div className="flex min-h-40 w-full max-w-3xl flex-col items-center justify-center bg-lime-cream text-center rounded-2xl gap-4">
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
        <h2> Tu carrito está vacío </h2>
      </div>
    </main>
  );
}
