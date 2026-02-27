import { ServiceCard } from "./ServiceCard";
import { useLanguage } from "../contexts/LanguageContext";

// Function to resolve asset paths properly in Vite.  
// Since images are in src/assets, we can define a utility function to dynamically build the path.
function getImagePath(prefix: string, language: string) {
  // Using new URL to resolve asset paths works well in Vite for dynamic imports
  return new URL(`../assets/${prefix} ${language}.jpeg`, import.meta.url).href;
}

export function Services() {
  const { t, language } = useLanguage();

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: `linear-gradient(180deg, #f0f4f8 0%, var(--law-bg) 50%, #e8f0f7 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="mb-4 text-3xl md:text-5xl font-bold"
            style={{ color: "var(--law-navy)" }}
          >
            {t.services.title}
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-4"
            style={{ backgroundColor: "var(--law-gold)" }}
          />
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--law-text)" }}
          >
            {t.services.description}
          </p>
        </div>

        {/* Services Grid (Images) - Using a responsive 4-column grid for large screens */}
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
  );
}