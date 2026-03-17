import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { WhatsAppButton } from "./WhatsAppButton";

export function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{ color: "var(--law-navy)" }}
          >
            {t.contact.title}
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-4"
            style={{ backgroundColor: "var(--law-gold)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              {/* Address */}
              <div
                className="flex items-start gap-4 p-6 rounded-lg"
                style={{ backgroundColor: "var(--law-bg)" }}
              >
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "white" }}
                >
                  <MapPin
                    size={24}
                    style={{ color: "var(--law-gold)" }}
                  />
                </div>
                <div>
                  <h4 style={{ color: "var(--law-navy)" }}>
                    {t.contact.address}
                  </h4>
                  <p style={{ color: "var(--law-text)" }}>
                    Devlet Mah. 263. Sk. Akcenter No:6/121<br />
                    Etimesgut / Ankara
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-start gap-4 p-6 rounded-lg"
                style={{ backgroundColor: "var(--law-bg)" }}
              >
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "white" }}
                >
                  <Phone
                    size={24}
                    style={{ color: "var(--law-gold)" }}
                  />
                </div>
                <div>
                  <h4 style={{ color: "var(--law-navy)" }}>
                    {t.contact.phone}
                  </h4>
                  <p style={{ color: "var(--law-text)" }}>
                    0507 935 59 63
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-start gap-4 p-6 rounded-lg"
                style={{ backgroundColor: "var(--law-bg)" }}
              >
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "white" }}
                >
                  <Mail
                    size={24}
                    style={{ color: "var(--law-gold)" }}
                  />
                </div>
                <div>
                  <h4 style={{ color: "var(--law-navy)" }}>
                    {t.contact.email}
                  </h4>
                  <p style={{ color: "var(--law-text)" }}>
                    info@merayhukuk.com<br />
                    iletisim@merayhukuk.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div>
            <div
              className="p-8 rounded-lg h-full flex flex-col justify-center"
              style={{
                background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
                boxShadow: '0 20px 50px rgba(37, 211, 102, 0.3)'
              }}
            >
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-white rounded-full mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.contact.formTitle}
                </h3>
                <p className="text-white opacity-90 mb-6">
                  {language === 'tr'
                    ? 'Hızlı ve kolay iletişim için WhatsApp üzerinden bizimle doğrudan iletişime geçebilirsiniz.'
                    : 'For quick and easy communication, you can contact us directly via WhatsApp.'}
                </p>
              </div>

              <div className="flex justify-center">
                <WhatsAppButton />
              </div>

              <div className="mt-8 text-center">
                <p className="text-white text-sm opacity-75">
                  {language === 'tr'
                    ? '📱 7/24 mesaj gönderebilirsiniz'
                    : '📱 Send us a message anytime'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}