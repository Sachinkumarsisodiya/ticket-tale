import { Link, useNavigate } from "@tanstack/react-router";
import { Search, MapPin, Menu, Ticket, ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { items } from "@/lib/data";
import { CITIES, PLACES, useApp } from "@/context/AppContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
  { to: "/sports", label: "Sports" },
  { to: "/sufi", label: "Sufi Nights" },
  { to: "/concerts", label: "Concerts" },
  { to: "/events", label: "Events" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { search, setSearch, city, setCity } = useApp();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);

  const matches = search.trim()
    ? items
        .filter((i) => i.title.toLowerCase().includes(search.toLowerCase()) || i.category.includes(search.toLowerCase()))
        .slice(0, 8)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false);
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) setCityOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
          <Ticket className="h-6 w-6 text-primary" />
          <span>
            book<span className="text-primary">your</span>show
          </span>
        </Link>

        <div ref={searchRef} className="relative hidden flex-1 md:block">
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              placeholder="Search for movies, events, sports..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {search && (
              <button onClick={() => setSearch("")} aria-label="Clear">
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
          {searchOpen && search.trim() && (
            <div className="absolute left-0 right-0 top-full mt-2 max-h-96 overflow-y-auto rounded-xl border border-border bg-popover shadow-xl">
              {matches.length === 0 ? (
                <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No results for "{search}"
                </div>
              ) : (
                matches.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearch("");
                      navigate({ to: "/book/$id", params: { id: m.id } });
                    }}
                    className="flex w-full items-center gap-3 px-3 py-2 text-left transition hover:bg-muted"
                  >
                    <img src={m.image} alt={m.title} className="h-12 w-9 rounded object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">{m.title}</div>
                      <div className="text-xs text-muted-foreground capitalize">{m.category} • {m.venue}</div>
                    </div>
                    <span className="text-xs font-bold text-primary">₹{m.price}</span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        <div ref={cityRef} className="relative ml-auto hidden md:block">
          <button
            onClick={() => setCityOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">{city}</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          {cityOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-border bg-popover shadow-xl">
              <div className="border-b border-border px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Popular Cities
              </div>
              <div className="grid max-h-64 grid-cols-2 gap-1 overflow-y-auto p-2">
                {CITIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCity(c);
                      setCityOpen(false);
                    }}
                    className={`rounded-md px-3 py-1.5 text-left text-sm transition hover:bg-muted ${
                      c === city ? "bg-primary/10 font-semibold text-primary" : ""
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {PLACES[city] && (
                <div className="border-t border-border bg-muted/30 px-3 py-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Popular venues in {city}
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {PLACES[city].map((p) => (
                      <span key={p} className="rounded-full bg-background px-2.5 py-1 text-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-md p-2 hover:bg-muted md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-3 md:hidden">
        <div className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {search && (
            <button onClick={() => setSearch("")} aria-label="Clear">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        {search.trim() && matches.length > 0 && (
          <div className="mt-2 overflow-hidden rounded-xl border border-border bg-popover">
            {matches.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setSearch("");
                  navigate({ to: "/book/$id", params: { id: m.id } });
                }}
                className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-muted"
              >
                <img src={m.image} alt={m.title} className="h-10 w-8 rounded object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{m.title}</div>
                  <div className="text-xs text-muted-foreground capitalize">{m.category}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <nav className="hidden border-t border-border md:block">
        <ul className="mx-auto flex max-w-7xl gap-6 px-6 py-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={l.to === "/" ? { exact: true } : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="border-t border-border md:hidden">
          <ul className="flex flex-col px-4 py-2">
            <li className="border-b border-border pb-2 mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </li>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  activeProps={{ className: "text-primary font-semibold" }}
                  activeOptions={l.to === "/" ? { exact: true } : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
