import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { EventCard } from "@/components/EventCard";
import { items } from "@/lib/data";

export const Route = createFileRoute("/movies")({
  head: () => ({
    meta: [
      { title: "Movies — bookyourshow" },
      { name: "description", content: "Book movie tickets for the latest releases." },
      { property: "og:title", content: "Movies — bookyourshow" },
      { property: "og:description", content: "Latest movies now showing." },
    ],
  }),
  component: () => <ListPage category="movies" title="Movies Now Showing" />,
});

export function ListPage({ category, title }: { category: string; title: string }) {
  const list = items.filter((i) => i.category === category);
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <p className="mb-8 text-muted-foreground">{list.length} shows available near you</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((i) => <EventCard key={i.id} item={i} />)}
        </div>
      </section>
    </Layout>
  );
}
