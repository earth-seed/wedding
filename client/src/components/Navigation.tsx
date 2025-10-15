import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/travel", label: "Travel" },
  { path: "/venue", label: "Venue" },
  { path: "/schedule", label: "Schedule" },
  { path: "/registry", label: "Registry" },
  { path: "/rsvp", label: "RSVP" },
  { path: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/30 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/">
              <span
                className="font-display text-xl md:text-2xl font-light tracking-wider text-foreground transition-all duration-300 hover:opacity-70 cursor-pointer"
                data-testid="link-home"
              >
                Leyla & Bryce
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`text-sm font-display tracking-wider transition-all duration-300 cursor-pointer relative group ${
                      location === item.path
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full ${
                      location === item.path ? 'w-full' : ''
                    }`}></span>
                  </span>
                </Link>
              ))}
            </div>

            <button
              className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden pt-20 animate-fade-in">
          <div className="flex flex-col items-center gap-8 p-12">
            {navItems.map((item, index) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-2xl font-display tracking-wider transition-all duration-300 cursor-pointer ${
                    location === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
