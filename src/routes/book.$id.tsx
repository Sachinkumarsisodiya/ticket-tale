import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { getItem, COUPONS } from "@/lib/data";
import { Calendar, MapPin, Tag, Check, X, PartyPopper } from "lucide-react";

export const Route = createFileRoute("/book/$id")({
  head: () => ({
    meta: [
      { title: "Book Tickets — bookyourshow" },
      { name: "description", content: "Select seats and book your tickets." },
    ],
  }),
  component: BookingPage,
});

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const COLS = 12;
const INITIAL_BOOKED = ["A3", "A4", "C7", "D2", "D3", "F8", "F9", "G5", "H11"];

function BookingPage() {
  const { id } = useParams({ from: "/book/$id" });
  const item = getItem(id);
  const [booked, setBooked] = useState<Set<string>>(() => new Set(INITIAL_BOOKED));
  const [selected, setSelected] = useState<string[]>([]);
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState<{ code: string; amount: number; message: string } | null>(null);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState<{ seats: string[]; total: number } | null>(null);

  const price = item?.price ?? 0;
  const subtotal = selected.length * price;
  const fee = selected.length > 0 ? Math.round(subtotal * 0.05) : 0;

  const liveDiscount = useMemo(() => {
    if (!applied) return 0;
    const c = COUPONS[applied.code];
    if (!c) return 0;
    return c.type === "flat" ? c.discount : Math.round(subtotal * (c.discount / 100));
  }, [applied, subtotal]);
  const finalTotal = Math.max(0, subtotal + fee - liveDiscount);

  if (!item) {
    return (
      <Layout>
        <div className="mx-auto max-w-md px-6 py-20 text-center">
          <h1 className="text-2xl font-bold">Show not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go home</Link>
        </div>
      </Layout>
    );
  }

  const toggleSeat = (seat: string) => {
    if (booked.has(seat)) return;
    setConfirmation(null);
    setSelected((s) => (s.includes(seat) ? s.filter((x) => x !== seat) : [...s, seat]));
  };

  const applyCoupon = () => {
    setError("");
    const code = coupon.trim().toUpperCase();
    if (!code) return setError("Please enter a coupon code");
    if (selected.length === 0) return setError("Select at least one seat first");
    const c = COUPONS[code];
    if (!c) return setError("Invalid coupon code");
    const amount = c.type === "flat" ? c.discount : Math.round(subtotal * (c.discount / 100));
    setApplied({ code, amount, message: c.message });
  };

  const removeCoupon = () => {
    setApplied(null);
    setCoupon("");
  };

  const confirmBooking = () => {
    if (selected.length === 0) return;
    const seats = [...selected].sort();
    const total = finalTotal;
    setBooked((b) => {
      const next = new Set(b);
      seats.forEach((s) => next.add(s));
      return next;
    });
    setConfirmation({ seats, total });
    setSelected([]);
    setApplied(null);
    setCoupon("");
    setError("");
  };

  return (
    <Layout>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1fr_380px] lg:px-6">
        {/* LEFT: Show + Seats */}
        <div>
          <div className="mb-6 flex gap-4 rounded-xl border border-border bg-card p-4">
            <img src={item.image} alt={item.title} className="h-28 w-20 rounded-md object-cover" />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{item.date}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{item.venue}</p>
              <p className="mt-1 text-sm font-semibold text-primary">₹{item.price} / seat</p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="mx-auto mb-6 max-w-md rounded-md bg-gradient-to-b from-primary/40 to-transparent p-2 text-center text-xs uppercase tracking-widest text-muted-foreground">
              Screen this way
            </div>

            <div className="overflow-x-auto">
              <div className="mx-auto inline-block">
                {ROWS.map((row) => (
                  <div key={row} className="mb-2 flex items-center gap-2">
                    <span className="w-4 text-xs text-muted-foreground">{row}</span>
                    <div className="flex gap-1.5">
                      {Array.from({ length: COLS }, (_, i) => {
                        const seat = `${row}${i + 1}`;
                        const isBooked = booked.has(seat);
                        const isSel = selected.includes(seat);
                        return (
                          <button
                            key={seat}
                            disabled={isBooked}
                            onClick={() => toggleSeat(seat)}
                            className={`h-7 w-7 rounded-t-md text-[10px] transition ${
                              isBooked
                                ? "cursor-not-allowed bg-muted text-muted-foreground/40"
                                : isSel
                                ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                                : "border border-primary/40 text-foreground hover:bg-primary/20"
                            }`}
                          >
                            {i + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-sm border border-primary/40" />Available</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-sm bg-primary" />Selected</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-sm bg-muted" />Sold</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Summary */}
        <aside className="h-fit space-y-4 rounded-xl border border-border bg-card p-5 lg:sticky lg:top-32">
          <h2 className="text-lg font-bold">Booking Summary</h2>

          {confirmation && (
            <div className="flex items-start gap-2 rounded-md border border-emerald-500/50 bg-emerald-500/10 p-3 text-sm text-emerald-400">
              <PartyPopper className="h-4 w-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Booking confirmed!</p>
                <p className="text-xs mt-1">Seats {confirmation.seats.join(", ")} booked for ₹{confirmation.total}.</p>
              </div>
            </div>
          )}

          <div>
            <p className="text-xs text-muted-foreground">Selected Seats ({selected.length})</p>
            <p className="mt-1 min-h-[24px] text-sm font-medium">
              {selected.length ? selected.sort().join(", ") : <span className="text-muted-foreground">No seats selected</span>}
            </p>
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground">Coupon Code</label>
            {applied ? (
              <div className="mt-2 flex items-center justify-between rounded-md border border-emerald-500/50 bg-emerald-500/10 p-3">
                <span className="flex items-center gap-2 text-sm text-emerald-400">
                  <Check className="h-4 w-4" /> <strong>{applied.code}</strong> — {applied.message}
                </span>
                <button onClick={removeCoupon} className="text-emerald-400 hover:text-white">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="mt-2 flex gap-2">
                <div className="flex flex-1 items-center gap-2 rounded-md border border-border bg-background px-3">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="WELCOME10"
                    className="w-full bg-transparent py-2 text-sm uppercase outline-none"
                  />
                </div>
                <button
                  onClick={applyCoupon}
                  className="rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Apply
                </button>
              </div>
            )}
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
            <p className="mt-2 text-[10px] text-muted-foreground">
              Try: WELCOME10 · BMS200 · SUFI25 · FIRSTSHOW
            </p>
          </div>

          <div className="space-y-2 border-t border-border pt-4 text-sm">
            <Row label={`Tickets (${selected.length} × ₹${item.price})`} value={`₹${subtotal}`} />
            <Row label="Convenience Fee" value={`₹${fee}`} />
            {liveDiscount > 0 && (
              <Row label="Discount" value={`- ₹${liveDiscount}`} className="text-emerald-400" />
            )}
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-base font-bold">
              <span>Total</span>
              <span className="text-primary">₹{finalTotal}</span>
            </div>
          </div>

          <button
            onClick={confirmBooking}
            disabled={selected.length === 0}
            className="w-full rounded-md bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Book Now
          </button>
        </aside>
      </div>
    </Layout>
  );
}

function Row({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
