import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="text-brand-green text-sm tracking-[0.3em] mb-4">
          ERROR 404
        </p>

        <h1 className="text-7xl md:text-9xl font-black text-brand-green mb-6">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-ink-dim mb-8">
          The requested resource does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center rounded-xl border border-brand-green px-6 py-3 hover:bg-brand-green hover:text-black transition"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}