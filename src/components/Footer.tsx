import { Link } from "@tanstack/react-router";
import { Ticket, Mail, Phone, MapPin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-gradient-to-b from-card/40 to-card/80">
      {/* Newsletter */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div>
            <h3 className="text-lg font-bold">Stay in the loop</h3>
            <p className="text-sm text-muted-foreground">Get exclusive offers & event drops in your inbox.</p>
          </div>
          <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:scale-105">
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <Ticket className="h-6 w-6 text-primary" />
            book<span className="text-primary">your</span>show
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            India's largest entertainment ticketing destination for movies, sports, concerts, sufi nights and live events.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> support@bookyourshow.net</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 80-1234-5678</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Mumbai, India</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/movies" className="hover:text-primary">Movies</Link></li>
            <li><Link to="/sports" className="hover:text-primary">Sports</Link></li>
            <li><Link to="/sufi" className="hover:text-primary">Sufi Nights</Link></li>
            <li><Link to="/concerts" className="hover:text-primary">Concerts</Link></li>
            <li><Link to="/events" className="hover:text-primary">Events</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} bookyourshow.net — Crafted with ❤ for entertainment lovers across India.
      </div>
    </footer>
  );
}
