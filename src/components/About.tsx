import { useLanguage } from "../contexts/LanguageContext";
import lawyerPhoto from "../assets/a14e8cdfdafcf133443d30c3a77e24fd7f9507d2.png";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{ color: "var(--law-navy)" }}
          >
            {t.about.title}
          </h2>
          <div
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: "var(--law-gold)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={lawyerPhoto}
              alt="Meray Hukuk ve Danışmanlık"
              className="w-full h-auto rounded-lg shadow-xl"
              style={{
                boxShadow: '0 20px 50px rgba(12, 35, 64, 0.15)'
              }}
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p
              className="mb-6 text-lg"
              style={{ color: "var(--law-text)" }}
            >
              {t.about.description}
            </p>
            <p
              className="mb-6 text-lg"
              style={{ color: "var(--law-text)" }}
            >
              {t.about.mission}
            </p>
            <p
              className="text-lg font-medium"
              style={{
                color: "var(--law-navy)",
                fontStyle: "italic"
              }}
            >
              {t.about.approach}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}