import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function ContactPage() {
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
            {t.contact.title}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--law-blue)", fontSize: "1.25rem" }}
          >
            {language === 'tr'
              ? 'Hukuki danışmanlık ve destek için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmak için hazır.'
              : 'Contact us for legal consultancy and support. Our expert team is ready to assist you.'}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "var(--law-bg)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "white" }}
                  >
                    <MapPin
                      size={28}
                      style={{ color: "var(--law-gold)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{ color: "var(--law-navy)" }}
                    >
                      {t.contact.address}
                    </h3>
                    <p style={{ color: "var(--law-text)" }}>
                      Devlet Mah. 263. Sk.<br />
                      Akcenter No:6/121<br />
                      Etimesgut / Ankara
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "var(--law-bg)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "white" }}
                  >
                    <Phone
                      size={28}
                      style={{ color: "var(--law-gold)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{ color: "var(--law-navy)" }}
                    >
                      {t.contact.phone}
                    </h3>
                    <p style={{ color: "var(--law-text)" }}>
                      0507 935 59 63
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "var(--law-bg)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "white" }}
                  >
                    <Mail
                      size={28}
                      style={{ color: "var(--law-gold)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{ color: "var(--law-navy)" }}
                    >
                      {t.contact.email}
                    </h3>
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
                className="p-10 rounded-lg h-full flex flex-col justify-center"
                style={{
                  background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
                  boxShadow: '0 25px 50px rgba(37, 211, 102, 0.4)'
                }}
              >
                <div className="text-center mb-8">
                  <div className="inline-block p-5 bg-white rounded-full mb-6">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {t.contact.formTitle}
                  </h2>
                  <p className="text-white text-lg opacity-90 mb-8">
                    {language === 'tr'
                      ? 'Hızlı ve kolay iletişim için WhatsApp üzerinden bizimle doğrudan iletişime geçebilirsiniz.'
                      : 'For quick and easy communication, you can contact us directly via WhatsApp.'}
                  </p>
                </div>

                <div className="flex justify-center mb-6">
                  <WhatsAppButton />
                </div>

                <div className="text-center">
                  <p className="text-white opacity-75">
                    {language === 'tr'
                      ? '📱 Mesajlarınıza Hafta İçi 09:00–18:00 mesai saatlerinde dönüş yapılacaktır.'
                      : '📱 Replies will be provided on weekdays between 09:00–18:00.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-lg overflow-hidden shadow-2xl"
            style={{ height: "500px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.3663614964257!2d32.6184681!3d39.977917399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d331efb28fca1b%3A0x20c97c140038beac!2sAvukat%20%C4%B0layda%20MERAY%2F%20Eryaman!5e0!3m2!1str!2str!4v1773770412241!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meray Hukuk ve Danışmanlık Konum"
            />
          </div>
        </div>
      </section>
    </div>
  );
}