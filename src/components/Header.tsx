import { Link } from "@tanstack/react-router";
import { Search, MapPin, Menu, Ticket } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/movies", label: "Movies" },
  { to: "/sports", label: "Sports" },
  { to: "/sufi", label: "Sufi Nights" },
  { to: "/concerts", label: "Concerts" },
  { to: "/events", label: "Events" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
          <Ticket className="h-6 w-6 text-primary" />
          <span>
            book<span className="text-primary">your</span>show
          </span>
        </Link>

        <div className="hidden flex-1 items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search for movies, events, sports..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="ml-auto hidden items-center gap-2 text-sm text-muted-foreground md:flex">
          <MapPin className="h-4 w-4 text-primary" />
          Mumbai
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-md p-2 hover:bg-muted md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <nav className="hidden border-t border-border md:block">
        <ul className="mx-auto flex max-w-7xl gap-6 px-6 py-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
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
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  activeProps={{ className: "text-primary font-semibold" }}
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
