import { Scale, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#1a2332" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale size={32} style={{ color: "var(--law-gold)" }} />
              <div style={{ fontFamily: "'Playfair Display', serif" }}>
                <h3 style={{ color: "white" }}>
                  MERAY
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "0.7rem", marginTop: "-0.25em", letterSpacing: "0.05em" }}>
                  {language === 'tr' ? 'HUKUK VE DANIŞMANLIK' : 'LAW & CONSULTANCY'}
                </p>
              </div>
            </div>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
              {language === 'tr'
                ? 'Profesyonel hukuki danışmanlık ve temsil hizmetleri ile yanınızdayız.'
                : 'We are by your side with professional legal consultancy and representation services.'}
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="mb-4" style={{ color: "white" }}>
              {language === 'tr' ? 'Hızlı Linkler' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "#9ca3af", fontSize: "0.875rem" }}
                >
                  {t.header.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/hakkimizda"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "#9ca3af", fontSize: "0.875rem" }}
                >
                  {t.header.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetlerimiz"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "#9ca3af", fontSize: "0.875rem" }}
                >
                  {t.header.services}
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "#9ca3af", fontSize: "0.875rem" }}
                >
                  {t.header.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="mb-4" style={{ color: "white" }}>
              {t.services.title}
            </h4>
            <ul className="space-y-2">
              {t.services.categories.slice(0, 4).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/hizmetlerimiz/${category.id}`}
                    className="transition-colors hover:opacity-80"
                    style={{ color: "#9ca3af", fontSize: "0.875rem" }}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="mb-4" style={{ color: "white" }}>
              {t.contact.title}
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--law-gold)", flexShrink: 0, marginTop: "2px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                  Devlet Mah. 263. Sk. Akcenter No:6/121, Etimesgut, Ankara
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--law-gold)", flexShrink: 0 }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                  0507 935 59 63
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--law-gold)", flexShrink: 0 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                  info@merayavukatlik.com
                </span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="transition-colors hover:opacity-80"
                aria-label="Facebook"
              >
                <Facebook size={20} style={{ color: "#9ca3af" }} />
              </a>
              <a
                href="#"
                className="transition-colors hover:opacity-80"
                aria-label="Twitter"
              >
                <Twitter size={20} style={{ color: "#9ca3af" }} />
              </a>
              <a
                href="#"
                className="transition-colors hover:opacity-80"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} style={{ color: "#9ca3af" }} />
              </a>
              <a
                href="#"
                className="transition-colors hover:opacity-80"
                aria-label="Instagram"
              >
                <Instagram size={20} style={{ color: "#9ca3af" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 mt-8 text-center"
          style={{
            borderTop: "1px solid rgba(156, 163, 175, 0.2)"
          }}
        >
          <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
            © {currentYear} {language === 'tr' ? 'Meray Hukuk ve Danışmanlık. Tüm hakları saklıdır.' : '  Meray Law & Consultancy. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}