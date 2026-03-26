import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = router.state.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { to: "/", label: "Home", ocid: "nav.home_link" },
    { to: "/properties", label: "Properties", ocid: "nav.properties_link" },
    { to: "/gallery", label: "Gallery", ocid: "nav.gallery_link" },
    { to: "/about", label: "About", ocid: "nav.about_link" },
    { to: "/contact", label: "Contact", ocid: "nav.contact_link" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.1_0_0/0.97)] backdrop-blur-md border-b border-[oklch(0.22_0_0)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/assets/generated/logo-prince-realty-transparent.dim_400x120.png"
            alt="Prince Luxury Realty"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`font-body text-xs tracking-widest uppercase transition-colors duration-200 ${
                pathname === link.to
                  ? "text-gold"
                  : "text-foreground/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/cinematic"
            data-ocid="nav.cinematic_link"
            className={`font-body text-xs tracking-widest uppercase transition-colors duration-200 flex items-center gap-1.5 ${
              pathname === "/cinematic"
                ? "text-gold"
                : "text-foreground/70 hover:text-gold"
            }`}
          >
            <span style={{ color: "var(--gold)" }}>▶</span>
            Video Tour
          </Link>
          <Link
            to="/contact"
            data-ocid="nav.schedule_button"
            className="btn-gold text-xs"
          >
            Schedule Viewing
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1.5">
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.1_0_0/0.98)] backdrop-blur-md border-t border-[oklch(0.22_0_0)] py-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className="block font-body text-xs tracking-widest uppercase py-3 text-foreground/70 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/cinematic"
            data-ocid="nav.cinematic_link"
            className="block font-body text-xs tracking-widest uppercase py-3 text-gold hover:text-gold-light transition-colors"
          >
            ▶ Video Tour
          </Link>
          <Link
            to="/contact"
            data-ocid="nav.schedule_button"
            className="btn-gold inline-block mt-4 text-xs"
          >
            Schedule Viewing
          </Link>
        </div>
      )}
    </header>
  );
}
