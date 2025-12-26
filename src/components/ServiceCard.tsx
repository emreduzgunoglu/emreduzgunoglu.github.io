import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div 
      className="p-6 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 h-full"
      style={{ 
        backgroundColor: "white",
        border: "1px solid #e5e7eb"
      }}
    >
      {/* Icon */}
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--law-bg)" }}
      >
        <Icon 
          size={32}
          style={{ color: "var(--law-gold)" }}
        />
      </div>

      {/* Title */}
      <h3 
        className="mb-3"
        style={{ color: "var(--law-navy)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p style={{ color: "var(--law-text)" }}>
        {description}
      </p>
    </div>
  );
}
