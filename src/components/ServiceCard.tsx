import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface ServiceCardProps {
  id: string;
  title: string;
  imagePath: string;
}

export function ServiceCard({ id, title, imagePath }: ServiceCardProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleCardClick = () => {
    navigate(`/hizmetlerimiz/${id}`);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from firing
    navigate('/iletisim');
  };

  return (
    <div
      onClick={handleCardClick}
      className="p-6 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 h-full cursor-pointer flex flex-col group"
      style={{
        backgroundColor: "white",
        border: "1px solid #e5e7eb"
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-lg">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handleContactClick}
            className="px-6 py-2 rounded-lg font-medium transition-transform hover:scale-105"
            style={{
              backgroundColor: "var(--law-gold)",
              color: "white"
            }}
          >
            {language === 'tr' ? 'İletişim' : 'Contact'}
          </button>
        </div>
      </div>
    </div>
  );
}
