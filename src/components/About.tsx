import { User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import lawyerPhoto from "../assets/a14e8cdfdafcf133443d30c3a77e24fd7f9507d2.png";

export function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Introductory Text */}
        <div className="mb-12">
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "var(--law-text)", lineHeight: "1.8", textAlign: "justify" }}
          >
            {language === 'tr'
              ? 'Meray Hukuk ve Danışmanlık olarak temel amacımız, müvekkillerimizin faaliyetlerinde olumlu ve kalıcı etki bırakmaktır. Uyuşmazlıkların doğası gereği müvekkiller üzerinde yarattığı baskının farkında olarak hukuki süreçlerde yaşanan belirsizliğin azaltılmasını ve sürecin daha öngörülebilir hâle getirilmesini hedeflemekteyiz. Bu doğrultuda müvekkillerimizi düzenli olarak bilgilendirerek mevcut soru işaretlerinin giderilmesini sağlamaktayız.'
              : 'As Meray Law and Consultancy, our primary objective is to create a positive and lasting impact on our clients\' activities. Being aware of the pressure that disputes inherently place on clients, we aim to reduce the uncertainty experienced in legal processes and make them more predictable. In this regard, we regularly inform our clients to eliminate existing uncertainties.'}
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--law-text)", lineHeight: "1.8", textAlign: "justify" }}
          >
            {language === 'tr'
              ? 'Mesleki yaklaşımımız; sektörel birikimimiz ve küresel uygulamalara hâkimiyetimizin birleşimi ile multidisipliner anlayış üzerine kuruludur.'
              : 'Our professional approach is based on a multidisciplinary understanding, combining our sectoral expertise and mastery of global practices.'}
          </p>
        </div>

        {/* Founder Section */}
        <div
          className="p-10 rounded-lg"
          style={{
            background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`,
            boxShadow: '0 20px 50px rgba(12, 35, 64, 0.2)'
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User size={40} style={{ color: "var(--law-gold)" }} />
            <h2 style={{ color: "white" }}>
              {t.aboutPage.founderTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Founder Photo */}
            <div className="text-center">
              <img
                src={lawyerPhoto}
                alt="Av. İlayda MERAY"
                className="w-64 h-64 mx-auto rounded-full object-cover"
                style={{
                  border: '4px solid var(--law-gold)',
                  boxShadow: '0 10px 30px rgba(201, 162, 39, 0.4)'
                }}
              />
              <h3
                className="text-2xl font-bold mt-6"
                style={{
                  color: "var(--law-gold)",
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                Av. İlayda MERAY
              </h3>
            </div>

            {/* Biography */}
            <div>
              <p
                className="mb-4"
                style={{ color: "var(--law-blue)", fontSize: "1.05rem" }}
              >
                {t.aboutPage.founderBio1}
              </p>
              <p
                className="mb-4"
                style={{ color: "var(--law-blue)", fontSize: "1.05rem" }}
              >
                {t.aboutPage.founderBio2}
              </p>
              <p
                style={{ color: "var(--law-blue)", fontSize: "1.05rem" }}
              >
                {t.aboutPage.founderBio3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}