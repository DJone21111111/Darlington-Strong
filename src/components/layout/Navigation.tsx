import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Search, MapPin, Globe, Calendar, Map, Church, Building2, Wind, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "History", path: "/", active: true },
  { name: "Stories", path: "/stories", external: true },
  { name: "Restaurants", path: "/restaurants", external: true },
  { name: "Jazz", path: "/jazz", external: true },
  { name: "Dance", path: "/dance", external: true },
];

const historySubLinks = [
  { name: "Tour Schedule", path: "/schedule", icon: Calendar },
  { name: "Route Map", path: "/map", icon: Map },
  { name: "Grote Kerk", path: "/grote-kerk", icon: Church },
  
  { name: "Molen de Adriaan", path: "/molen-de-adriaan", icon: Wind },
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

  const isHistorySection = (path: string) => {
    return path === "/" || path === "/grote-kerk" || path === "/molen-de-adriaan" || path === "/schedule" || path === "/map";
  };

  const showSubNav = isHistorySection(location.pathname);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/98 backdrop-blur-md shadow-sm border-border"
            : "bg-background border-border/50"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 group shrink-0"
            aria-label="Haarlem - Home"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">
              H
            </span>
            <span className="text-primary text-2xl">★</span>
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">
              ARLEM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-5 py-2 rounded-sm text-base font-medium transition-all duration-200",
                  "border border-primary/80 hover:bg-primary hover:text-primary-foreground",
                  (link.active && isHistorySection(location.pathname)) 
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/schedule"
              className={cn(
                "px-5 py-2 rounded-sm text-base font-medium transition-all duration-200",
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              My Programs
            </Link>
            <Link
              to="/auth"
              className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Login"
            >
              <LogIn className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-1 ml-2">
              <button
                className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Favorites"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Language"
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-16 bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
          )}
          role="menu"
          aria-hidden={!isOpen}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                role="menuitem"
                className={cn(
                  "px-4 py-3 rounded-sm text-base font-medium transition-all duration-200 text-center",
                  "border border-primary/80",
                  (link.active && isHistorySection(location.pathname))
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Sub Navigation for History */}
            {showSubNav && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-base uppercase tracking-wider text-muted-foreground mb-3 text-center">Quick Access</p>
                <div className="grid grid-cols-2 gap-2">
                  {historySubLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        "flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-base font-medium transition-all duration-200",
                        location.pathname === link.path
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted/50 text-foreground hover:bg-accent/50"
                      )}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-base">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <Link
              to="/schedule"
              role="menuitem"
              className="mt-2 px-4 py-3 rounded-sm text-base font-medium bg-primary text-primary-foreground text-center"
            >
              Your Program
            </Link>

            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
              <button className="p-2 text-primary" aria-label="Favorites">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-primary" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-primary" aria-label="Location">
                <MapPin className="w-5 h-5" />
              </button>
              <button className="p-2 text-primary" aria-label="Language">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Sub Navigation for History Section */}
      {showSubNav && (
        <div
          className={cn(
            "fixed left-0 right-0 z-40 transition-all duration-300 bg-secondary/95 backdrop-blur-sm border-b border-border shadow-sm",
            isScrolled ? "top-16" : "top-16"
          )}
        >
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex items-center justify-center gap-1 py-2 overflow-x-auto scrollbar-hide">
              {historySubLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-200 whitespace-nowrap",
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-primary/10"
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
