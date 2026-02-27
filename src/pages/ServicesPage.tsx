import { useLanguage } from "../contexts/LanguageContext";
import { ServiceCard } from "../components/ServiceCard";

// Function to resolve asset paths properly in Vite.
function getImagePath(prefix: string, language: string) {
  return new URL(`../assets/${prefix} ${language}.jpeg`, import.meta.url).href;
}

export function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="mb-6"
            style={{ color: "white", fontSize: "2.5rem", fontWeight: "700" }}
          >
            {t.services.title}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--law-blue)", fontSize: "1.25rem" }}
          >
            {t.services.description}
          </p>
        </div>
      </section>

      {/* Services Grid (Images) - Using a responsive 4-column grid for large screens */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(180deg, #f0f4f8 0%, white 50%, #f0f4f8 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {t.services.categories.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                imagePath={getImagePath(service.imagePrefix, language)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-6"
            style={{ color: "white" }}
          >
            {language === 'tr'
              ? 'Hukuki Danışmanlık İhtiyacınız mı Var?'
              : 'Do You Need Legal Consultancy?'}
          </h2>
          <p
            className="mb-8"
            style={{ color: "var(--law-blue)", fontSize: "1.125rem" }}
          >
            {language === 'tr'
              ? 'Uzman kadromuz, sizin için en uygun çözümü bulmaya hazır. Hemen bizimle iletişime geçin.'
              : 'Our expert team is ready to find the most suitable solution for you. Contact us now.'}
          </p>
          <a
            href="/iletisim"
            className="inline-block px-8 py-4 rounded-lg transition-all hover:shadow-2xl transform hover:-translate-y-1"
            style={{
              backgroundColor: "var(--law-gold)",
              color: "white"
            }}
          >
            {language === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}
