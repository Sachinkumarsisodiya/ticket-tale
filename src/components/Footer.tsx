import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Ticket } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <Ticket className="h-5 w-5 text-primary" />
            book<span className="text-primary">your</span>show
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            India's largest entertainment ticketing destination for movies, sports, and live events.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
            <li><a href="#" className="hover:text-primary">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Help</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><a href="#" className="hover:text-primary">FAQs</a></li>
            <li><a href="#" className="hover:text-primary">Refunds</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} bookyourshow.net — All rights reserved.
      </div>
    </footer>
  );
}
