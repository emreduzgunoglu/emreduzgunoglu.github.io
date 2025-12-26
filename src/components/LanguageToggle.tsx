import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-opacity-10"
            style={{
                color: "var(--law-navy)",
                backgroundColor: language === 'en' ? 'rgba(201, 162, 39, 0.1)' : 'transparent',
            }}
            aria-label="Change language"
        >
            <Globe size={18} />
            <span className="font-medium text-sm">
                {language.toUpperCase()}
            </span>
        </button>
    );
}
