import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-lg font-semibold">
                  A Stroll Through History
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Discover the rich heritage of Haarlem through our expertly guided walking tours. Experience centuries of history, art, and architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Explore</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Grote Kerk", path: "/grote-kerk" },
                { name: "Teylers Museum", path: "/teylers-museum" },
                { name: "Schedule", path: "/schedule" },
                { name: "Route Map", path: "/map" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 font-body text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Grote Markt, 2011 RD Haarlem</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 font-body text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@haarlemtours.nl" className="hover:text-primary-foreground transition-colors">
                  info@haarlemtours.nl
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 font-body text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+31235678900" className="hover:text-primary-foreground transition-colors">
                  +31 23 567 8900
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Tour Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-primary-foreground/70 font-body text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Mon - Fri</p>
                  <p>10:00 - 12:00, 14:00 - 16:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 font-body text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Saturday</p>
                  <p>11:00 - 13:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 font-body text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} A Stroll Through History. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors font-body text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors font-body text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
