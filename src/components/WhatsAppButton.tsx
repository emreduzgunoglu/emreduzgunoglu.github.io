import { MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function WhatsAppButton() {
    const { language } = useLanguage();

    const handleWhatsAppClick = () => {
        const phoneNumber = "905079355963"; // 0507 935 59 63
        const message = language === 'tr'
            ? "Merhaba, bilgi almak istiyorum."
            : "Hello, I would like to get information.";

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="group relative overflow-hidden px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3"
            style={{
                backgroundColor: "#25D366",
                color: "white",
                boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
            }}
        >
            {/* Background Animation */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(45deg, #128C7E 0%, #25D366 100%)'
                }}
            />

            {/* Icon */}
            <MessageCircle
                size={24}
                className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
            />

            {/* Text */}
            <span className="relative z-10 font-medium text-lg">
                {language === 'tr' ? 'WhatsApp ile İletişime Geçin' : 'Contact via WhatsApp'}
            </span>
        </button>
    );
}
