import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const footerLinks = {
    culture: {
      title: "Culture",
      links: [
        { name: "History of Haarlem", path: "/" },
        { name: "Stories in Haarlem", path: "/stories" },
      ],
    },
    whatToDo: {
      title: "What to do",
      links: [
        { name: "Events", path: "/" },
        { name: "Food and drinks", path: "/restaurants" },
        { name: "Haarlem Tickets", path: "/schedule" },
      ],
    },
  };

  return (
    <footer role="contentinfo" aria-label="Site footer">
      {/* Footer Links Section */}
      <section 
        className="bg-charcoal py-16"
        aria-label="Footer navigation"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
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
                  className="w-11 h-11 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-11 h-11 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on YouTube"
                  className="w-11 h-11 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
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
                className="text-cream/50 hover:text-cream transition-colors font-body text-base"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-cream/50 hover:text-cream transition-colors font-body text-base"
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
