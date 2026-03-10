import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const footerLinks = {
    culture: {
      title: "Culture",
      links: [
        { name: "History of Haarlem", path: "/" },
        { name: "Museums", path: "/teylers-museum" },
        { name: "City Walks", path: "/schedule" },
        { name: "Leaflets and routes", path: "/map" },
      ],
    },
    whatToDo: {
      title: "What to do",
      links: [
        { name: "Top 10 attractions", path: "/" },
        { name: "Events", path: "/" },
        { name: "Food and drinks", path: "/" },
        { name: "VVV Haarlem", path: "/" },
        { name: "Accessibility", path: "/" },
        { name: "Haarlem Tickets", path: "/" },
        { name: "Christmas Market", path: "/" },
      ],
    },
    shopping: {
      title: "Shopping",
      links: [
        { name: "Golden Streets", path: "/" },
        { name: "Opening hours", path: "/" },
        { name: "Markets", path: "/" },
        { name: "Hiking trails", path: "/" },
        { name: "Bicycle routes", path: "/" },
        { name: "Shopping areas", path: "/" },
      ],
    },
    uitagenda: {
      title: "Uitagenda",
      links: [
        { name: "Today", path: "/" },
        { name: "Tomorrow", path: "/" },
        { name: "This weekend", path: "/" },
        { name: "This week", path: "/" },
        { name: "This month", path: "/" },
        { name: "Event registration", path: "/" },
      ],
    },
  };

  return (
    <footer role="contentinfo" aria-label="Site footer">
      {/* Newsletter section removed */}

      {/* Footer Links Section - Warm charcoal for professionalism */}
      <section 
        className="bg-charcoal py-16"
        aria-label="Footer navigation"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Culture Column */}
            <nav aria-labelledby="footer-culture">
              <h3 
                id="footer-culture"
                className="font-display text-lg font-semibold text-gold mb-5"
              >
                {footerLinks.culture.title}
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.culture.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-cream/75 hover:text-cream transition-colors duration-300 font-body text-base focus:outline-none focus:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* What to do Column */}
            <nav aria-labelledby="footer-whattodo">
              <h3 
                id="footer-whattodo"
                className="font-display text-lg font-semibold text-gold mb-5"
              >
                {footerLinks.whatToDo.title}
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.whatToDo.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-cream/75 hover:text-cream transition-colors duration-300 font-body text-base focus:outline-none focus:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Shopping Column */}
            <nav aria-labelledby="footer-shopping">
              <h3 
                id="footer-shopping"
                className="font-display text-lg font-semibold text-gold mb-5"
              >
                {footerLinks.shopping.title}
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.shopping.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-cream/75 hover:text-cream transition-colors duration-300 font-body text-base focus:outline-none focus:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Uitagenda Column */}
            <nav aria-labelledby="footer-uitagenda">
              <h3 
                id="footer-uitagenda"
                className="font-display text-lg font-semibold text-gold mb-5"
              >
                {footerLinks.uitagenda.title}
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.uitagenda.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-cream/75 hover:text-cream transition-colors duration-300 font-body text-base focus:outline-none focus:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Follow Us Column */}
            <div aria-labelledby="footer-social">
              <h3 
                id="footer-social"
                className="font-display text-lg font-semibold text-gold mb-5"
              >
                Follow Us
              </h3>
              <div className="flex gap-3" role="list" aria-label="Social media links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-11 h-11 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-11 h-11 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on YouTube"
                  className="w-11 h-11 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
                >
                  <Youtube className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 font-body text-base">
              © {new Date().getFullYear()} Haarlem Marketing. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-cream/50 hover:text-cream transition-colors font-body text-base focus:outline-none focus:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-cream/50 hover:text-cream transition-colors font-body text-base focus:outline-none focus:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
