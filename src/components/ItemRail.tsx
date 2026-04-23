import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventCard } from "@/components/EventCard";
import type { Item } from "@/lib/data";

export function ItemRail({ items, title, action }: { items: Item[]; title: string; action?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="flex items-center gap-2">
          {action}
          <button
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((i) => (
          <div key={i.id} className="w-[180px] shrink-0 snap-start sm:w-[220px]">
            <EventCard item={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
