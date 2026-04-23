import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { EventCard } from "@/components/EventCard";
import { items, categories } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "bookyourshow — Movies, Sports, Concerts & Events" },
      { name: "description", content: "Book tickets for movies, sports, sufi nights, concerts and events across India." },
      { property: "og:title", content: "bookyourshow — Book tickets online" },
      { property: "og:description", content: "Your gateway to live entertainment in India." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = items.slice(0, 8);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-28">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Live the Show. <span className="block">Book in Seconds.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Movies, sports, concerts, sufi nights & more — all your tickets in one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/movies"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition hover:scale-105"
            >
              Browse Movies
            </Link>
            <Link
              to="/concerts"
              className="rounded-full border-2 border-white/80 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Live Concerts
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold">Browse by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/${c.id}` as "/movies"}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${c.color} p-5 text-white transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]`}
            >
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-2 font-semibold">{c.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured Shows</h2>
          <Link to="/movies" className="text-sm text-primary hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((i) => <EventCard key={i.id} item={i} />)}
        </div>
      </section>
    </Layout>
  );
}
