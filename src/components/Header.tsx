import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div
                className="cursor-pointer"
                style={{
                  color: "var(--law-navy)",
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                <div>MERAY</div>
                <div style={{ fontSize: "0.6em", marginTop: "-0.2em", letterSpacing: "0.05em" }}>
                  {language === 'tr' ? 'HUKUK VE DANIŞMANLIK' : 'LAW & CONSULTANCY'}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="transition-colors hover:opacity-70"
              style={{
                color: "var(--law-navy)",
                borderBottom: isActive("/") ? "2px solid var(--law-gold)" : "2px solid transparent",
                paddingBottom: "4px"
              }}
            >
              {t.header.home}
            </Link>
            <Link
              to="/hakkimizda"
              className="transition-colors hover:opacity-70"
              style={{
                color: "var(--law-navy)",
                borderBottom: isActive("/hakkimizda") ? "2px solid var(--law-gold)" : "2px solid transparent",
                paddingBottom: "4px"
              }}
            >
              {t.header.about}
            </Link>
            <Link
              to="/hizmetlerimiz"
              className="transition-colors hover:opacity-70"
              style={{
                color: "var(--law-navy)",
                borderBottom: isActive("/hizmetlerimiz") ? "2px solid var(--law-gold)" : "2px solid transparent",
                paddingBottom: "4px"
              }}
            >
              {t.header.services}
            </Link>
            <Link
              to="/iletisim"
              className="transition-colors hover:opacity-70"
              style={{
                color: "var(--law-navy)",
                borderBottom: isActive("/iletisim") ? "2px solid var(--law-gold)" : "2px solid transparent",
                paddingBottom: "4px"
              }}
            >
              {t.header.contact}
            </Link>
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--law-navy)" }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left py-2 px-4 rounded transition-colors"
              style={{
                color: "var(--law-navy)",
                backgroundColor: isActive("/") ? "var(--law-bg)" : "transparent"
              }}
            >
              {t.header.home}
            </Link>
            <Link
              to="/hakkimizda"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left py-2 px-4 rounded transition-colors"
              style={{
                color: "var(--law-navy)",
                backgroundColor: isActive("/hakkimizda") ? "var(--law-bg)" : "transparent"
              }}
            >
              {t.header.about}
            </Link>
            <Link
              to="/hizmetlerimiz"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left py-2 px-4 rounded transition-colors"
              style={{
                color: "var(--law-navy)",
                backgroundColor: isActive("/hizmetlerimiz") ? "var(--law-bg)" : "transparent"
              }}
            >
              {t.header.services}
            </Link>
            <Link
              to="/iletisim"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left py-2 px-4 rounded transition-colors"
              style={{
                color: "var(--law-navy)",
                backgroundColor: isActive("/iletisim") ? "var(--law-bg)" : "transparent"
              }}
            >
              {t.header.contact}
            </Link>
            <div className="px-4 py-2">
              <LanguageToggle />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}