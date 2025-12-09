import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Grote Kerk", path: "/grote-kerk" },
  { name: "Teylers Museum", path: "/teylers-museum" },
  { name: "Schedule", path: "/schedule" },
  { name: "Route Map", path: "/map" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold text-foreground leading-tight">
              A Stroll Through
            </span>
            <span className="font-display text-sm text-primary italic">
              History
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link font-body text-sm uppercase tracking-wider",
                location.pathname === link.path && "active text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild>
            <Link to="/schedule">Book a Tour</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-full bg-background/98 backdrop-blur-lg shadow-card transition-all duration-500 overflow-hidden",
          isOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-display text-xl py-2 border-b border-border/50 transition-all duration-300",
                "opacity-0 translate-y-4",
                isOpen && "animate-fade-up",
                location.pathname === link.path && "text-primary"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="hero"
            size="lg"
            className={cn(
              "mt-4 opacity-0 translate-y-4",
              isOpen && "animate-fade-up"
            )}
            style={{ animationDelay: `${navLinks.length * 50}ms` }}
            asChild
          >
            <Link to="/schedule">Book a Tour</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
