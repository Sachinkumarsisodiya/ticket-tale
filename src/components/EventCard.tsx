import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, Star } from "lucide-react";
import type { Item } from "@/lib/data";

export function EventCard({ item }: { item: Item }) {
  return (
    <Link
      to="/book/$id"
      params={{ id: item.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.rating && (
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium">
            <Star className="h-3 w-3 fill-primary text-primary" />
            {item.rating}
          </div>
        )}
        <div className="absolute right-2 top-2 rounded-md bg-primary px-2 py-1 text-xs font-bold uppercase">
          {item.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 font-semibold">{item.title}</h3>
        {item.genre && <p className="text-xs text-muted-foreground">{item.genre}</p>}
        <div className="mt-auto flex flex-col gap-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{item.date}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{item.venue}</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="font-bold text-primary">₹{item.price}</span>
          <span className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition group-hover:bg-primary-foreground group-hover:text-primary">
            Book Now
          </span>
        </div>
      </div>
    </Link>
  );
}
