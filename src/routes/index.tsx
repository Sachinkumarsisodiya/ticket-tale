import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { EventCard } from "@/components/EventCard";
import { HeroSlider } from "@/components/HeroSlider";
import { ItemRail } from "@/components/ItemRail";
import { items, categories, offers } from "@/lib/data";
import { ShieldCheck, Zap, Headphones, Tag, Ticket, Sparkles, Quote } from "lucide-react";

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

const features = [
  { icon: ShieldCheck, title: "100% Secure Payments", desc: "Bank-grade encryption on every transaction." },
  { icon: Zap, title: "Instant Confirmation", desc: "Get e-tickets in your inbox in seconds." },
  { icon: Tag, title: "Best Price Guarantee", desc: "Exclusive offers and the lowest fares online." },
  { icon: Headphones, title: "24/7 Support", desc: "Our team is always here to help you out." },
  { icon: Ticket, title: "Easy Cancellation", desc: "Hassle-free refunds within minutes." },
  { icon: Sparkles, title: "Premium Experience", desc: "VIP seats, lounges, and member perks." },
];

const testimonials = [
  { name: "Aarav Sharma", role: "Mumbai", text: "Booked Coldplay tickets in seconds! The seat selection UI is amazing and coupons saved me ₹500.", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Priya Iyer", role: "Bengaluru", text: "Best place for sufi night bookings. Always smooth, fast and the offers are genuine. Highly recommend!", avatar: "https://i.pravatar.cc/100?img=47" },
  { name: "Rohan Mehta", role: "Delhi", text: "From IPL matches to indie gigs — bookyourshow has become my go-to for everything entertainment.", avatar: "https://i.pravatar.cc/100?img=33" },
];

function Index() {
  const trending = items.slice(0, 12);
  const upcoming = [...items].reverse().slice(0, 10);
  const movies = items.filter((i) => i.category === "movies").slice(0, 8);
  const concerts = items.filter((i) => i.category === "concerts").slice(0, 8);

  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Browse by Category</h2>
          <p className="mt-2 text-muted-foreground">Pick your vibe — there's something for everyone</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/${c.id}` as "/movies"}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.color} p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]`}
            >
              <div className="absolute -right-4 -top-4 text-7xl opacity-20 transition-transform group-hover:scale-125">
                {c.icon}
              </div>
              <div className="relative">
                <div className="text-4xl">{c.icon}</div>
                <div className="mt-3 text-lg font-bold">{c.label}</div>
                <div className="mt-1 text-xs text-white/80">Explore now →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <div className="bg-card/30">
        <ItemRail
          items={trending}
          title="🔥 Trending Now"
          action={<Link to="/movies" className="text-sm font-semibold text-primary hover:underline">View all</Link>}
        />
      </div>

      {/* Offers & Coupons */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Offers & Coupons</h2>
            <p className="mt-2 text-muted-foreground">Save big on your next booking</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <div
              key={o.code}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${o.color} p-6 text-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]`}
            >
              <Tag className="absolute -right-4 -top-4 h-24 w-24 opacity-20" />
              <div className="text-xs font-semibold uppercase tracking-wider opacity-90">Limited time</div>
              <h3 className="mt-2 text-xl font-bold">{o.title}</h3>
              <p className="mt-2 text-sm text-white/85">{o.desc}</p>
              <div className="mt-4 flex items-center justify-between rounded-lg border-2 border-dashed border-white/40 bg-white/10 px-3 py-2 backdrop-blur">
                <span className="font-mono text-sm font-bold">Use: {o.code}</span>
                <button
                  onClick={() => navigator.clipboard?.writeText(o.code)}
                  className="rounded bg-white px-2 py-1 text-xs font-bold text-foreground transition hover:scale-105"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Slider */}
      <div className="bg-gradient-to-b from-card/40 to-transparent">
        <ItemRail
          items={upcoming}
          title="📅 Upcoming Events"
          action={<Link to="/events" className="text-sm font-semibold text-primary hover:underline">See all</Link>}
        />
      </div>

      {/* Featured Movies grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">🎬 Recommended Movies</h2>
          <Link to="/movies" className="text-sm font-semibold text-primary hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((i) => <EventCard key={i.id} item={i} />)}
        </div>
      </section>

      {/* Concerts grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">🎸 Live Concerts</h2>
          <Link to="/concerts" className="text-sm font-semibold text-primary hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {concerts.map((i) => <EventCard key={i.id} item={i} />)}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="bg-card/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Book With Us</h2>
            <p className="mt-2 text-muted-foreground">India's most trusted entertainment ticketing platform</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What Our Users Say</h2>
          <p className="mt-2 text-muted-foreground">Loved by millions across India</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-border bg-gradient-to-br from-card to-card/40 p-6 transition hover:-translate-y-1 hover:border-primary/50"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/30" />
              <p className="text-sm text-foreground/90">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-hero)] p-10 text-center text-white sm:p-14">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Don't miss the next big show</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/90">Get notified about premieres, drops, and exclusive presales.</p>
            <Link
              to="/movies"
              className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-primary shadow-lg transition hover:scale-105"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
