
import Link from "next/link";
import { movieSections, movieStats } from "@/data/moviesData";
import { MoviesGrid } from "@/components/MoviesGrid";

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back to portfolio
        </Link>

        <header className="mt-6 border-b border-black/10 pb-5 dark:border-white/10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Movies
          </h1>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Stories worth remembering.
          </p>

          <p className="mt-3 font-mono text-xs text-zinc-400 dark:text-zinc-500">
            {movieStats.total} movies
          </p>
        </header>

        {movieSections.map((section) => (
          <section key={section.id} className="mt-8">
            <h2 className="mb-5 text-xl font-semibold tracking-tight">
              {section.title}
            </h2>

            {section.items.length > 0 ? (
              <MoviesGrid />
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                More movies coming soon.
              </p>
            )}
          </section>
        ))}

        <div className="mt-12 border-t border-black/10 pt-5 dark:border-white/10">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            ← Return to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}

