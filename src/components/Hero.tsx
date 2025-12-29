import { useLanguage } from "../contexts/LanguageContext";
import logoImage from "../assets/logo.png";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="pt-16 relative overflow-hidden"
      style={{
        background: `#15263e`
      }}
    >
      {/* Logo Image - Full Width Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <img
          src={logoImage}
          alt="Meray Hukuk ve Danışmanlık"
          className="w-full h-auto"
          style={{
            maxHeight: "70vh",
            objectFit: "contain",
            imageRendering: 'auto',
            WebkitFontSmoothing: 'antialiased'
          }}
        />
      </div>

      {/* Description Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <p
          className="mb-6 text-lg leading-relaxed"
          style={{
            color: "var(--law-blue)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            animation: 'fadeInUp 1s ease-out 0.5s backwards',
            textAlign: 'justify'
          }}
        >
          {language === 'tr'
            ? 'Meray Hukuk ve Danışmanlık, dava ve uyuşmazlık süreçleri ile hukuki danışmanlık alanlarında gerçek ve tüzel kişi müvekkillerine hizmet sunmaktadır. Her bir uyuşmazlığın kendi içindeki dinamiklerini gözeterek sürece hassasiyetle yaklaşmakta; müvekkillerinin beklentisini ve risk iştahını dikkate alarak hareket etmektedir.'
            : 'Meray Law and Consultancy provides services to individual and corporate clients in the fields of litigation, dispute resolution, and legal consultancy. It approaches each process with sensitivity, considering the internal dynamics of each dispute, and acts by taking into account the expectations and risk appetite of its clients.'}
        </p>

        <p
          className="mb-8 text-lg leading-relaxed"
          style={{
            color: "var(--law-blue)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            animation: 'fadeInUp 1s ease-out 0.7s backwards',
            textAlign: 'justify'
          }}
        >
          {language === 'tr'
            ? 'Tüm hizmetlerinde mesleki etik kurallarına ve yasal standartlara uygunluğu esas almakta, müvekkillerinin duyduğu güveni korumayı temel ilke olarak benimsemektedir.'
            : 'In all its services, it prioritizes compliance with professional ethical rules and legal standards, and adopts maintaining the trust of its clients as a fundamental principle.'}
        </p>
      </div>
    </section>
  );
}