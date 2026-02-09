import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
            H
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-tight text-foreground">
              Dr. Anurag Hemani
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary font-semibold" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 shadow-lg shadow-secondary/20"
            onClick={() => window.location.href = "/contact"}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background p-6">
            <div className="flex flex-col gap-8 mt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xl font-heading font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                onClick={() => {
                  window.location.href = "/contact";
                  setMobileOpen(false);
                }}
              >
                Book Appointment
              </Button>
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4">
                <Phone className="w-4 h-4" />
                <span>+91 123 456 7890</span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
