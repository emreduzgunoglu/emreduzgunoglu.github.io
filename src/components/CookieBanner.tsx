import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function CookieBanner() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieBannerDismissed");
    if (!accepted) {
      // Sayfa açıldıktan kısa bir süre sonra göster (animasyon için)
      const showTimer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(showTimer);
    }
  }, []);


  const handleDismiss = () => {
    setDismissed(true);
    // Animasyon bittikten sonra tamamen kaldır
    setTimeout(() => {
      setVisible(false);
      localStorage.setItem("cookieBannerDismissed", "true");
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: dismissed ? "translateY(100%)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        animation: !dismissed ? "slideUpBanner 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : undefined,
      }}
    >
      <style>{`
        @keyframes slideUpBanner {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
      <div
        style={{
          backgroundColor: "#0c2340",
          borderTop: "2px solid #c9a227",
          padding: "1rem 1.5rem",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            position: "relative",
          }}
        >
          {/* Metin */}
          <p
            style={{
              color: "#d1d5db",
              fontSize: "0.875rem",
              lineHeight: "1.6",
              flex: 1,
              paddingRight: "2rem",
              margin: 0,
            }}
          >
            {language === "tr" ? (
              <>
                Sitenin işlevselliğini sağlamak ve tarafımıza ulaşmanızı kolaylaştırmak amacıyla 6698 sayılı
                Kişisel Verilerin Korunması Kanununa (KVKK) ve Avrupa Birliği Veri Koruma Tüzüğüne (GDPR) uygun
                olarak sitemizde üçüncü tarafların çerezleri yer almaktadır. Detaylı bilgi için{" "}
                <Link
                  to="/cerez-aydinlatma-metni"
                  style={{
                    color: "#60a5fa",
                    textDecoration: "underline",
                    fontWeight: 500,
                  }}
                >
                  Çerez Aydınlatma Metni
                </Link>
                &apos;ni inceleyebilirsiniz.
              </>
            ) : (
              <>
                In order to ensure the functionality of the site and to facilitate your communication with us,
                third-party cookies are placed on our website in accordance with the Personal Data Protection
                Law No. 6698 (KVKK) and the European Union General Data Protection Regulation (GDPR). For
                detailed information, you may review our{" "}
                <Link
                  to="/cerez-aydinlatma-metni"
                  style={{
                    color: "#60a5fa",
                    textDecoration: "underline",
                    fontWeight: 500,
                  }}
                >
                  Cookie Policy
                </Link>
                .
              </>
            )}
          </p>

          {/* Kapatma butonu */}
          <button
            onClick={handleDismiss}
            aria-label={language === "tr" ? "Kapat" : "Close"}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
              padding: "0.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              transition: "color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#9ca3af";
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
