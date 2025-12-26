import { Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, var(--law-gold) 0%, transparent 70%)`,
          transform: 'translate(30%, -30%)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, var(--law-blue) 0%, transparent 70%)`,
          transform: 'translate(-30%, 30%)',
          animation: 'pulse 4s ease-in-out infinite 2s'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10" style={{ animation: 'fadeIn 1s ease-out' }}>
        {/* Icon */}
        <div className="flex justify-center mb-8" style={{ animation: 'scaleIn 0.8s ease-out' }}>
          <div
            className="p-6 rounded-full shadow-2xl"
            style={{
              backgroundColor: "white",
              boxShadow: '0 0 50px rgba(201, 162, 39, 0.3)',
              animation: 'iconPulse 3s ease-in-out infinite'
            }}
          >
            <Scale
              size={64}
              style={{ color: "var(--law-gold)" }}
            />
          </div>
        </div>

        {/* Title */}
        <div
          className="mb-6"
          style={{
            color: "white",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontFamily: "'Playfair Display', serif",
            animation: 'fadeInUp 1s ease-out 0.3s backwards'
          }}
        >
          <div>{language === 'tr' ? 'MERAY' : 'MERAY'}</div>
          <div style={{ fontSize: "0.65em", marginTop: "-0.15em", letterSpacing: "0.08em" }}>
            {language === 'tr' ? 'HUKUK VE DANIŞMANLIK' : 'LAW & CONSULTANCY'}
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="mb-8 max-w-2xl mx-auto"
          style={{
            color: "var(--law-blue)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            animation: 'fadeInUp 1s ease-out 0.5s backwards'
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTA Button */}
        <Link
          to="/hizmetlerimiz"
          className="inline-block px-8 py-4 rounded-lg transition-all hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
          style={{
            backgroundColor: "var(--law-gold)",
            color: "white",
            boxShadow: '0 10px 30px rgba(201, 162, 39, 0.4)',
            animation: 'fadeInUp 1s ease-out 0.7s backwards'
          }}
        >
          {t.hero.cta}
        </Link>
      </div>
    </section>
  );
}