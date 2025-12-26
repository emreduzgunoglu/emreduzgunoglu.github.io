import {
  Scale,
  Heart,
  Briefcase,
  Users,
  FileText,
  Home,
  Building2,
  ShoppingCart,
  Shield,
  Laptop,
  HeartPulse,
  FileSignature
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { useLanguage } from "../contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Scale, title: t.services.criminalLaw.title, description: t.services.criminalLaw.description },
    { icon: Heart, title: t.services.familyLaw.title, description: t.services.familyLaw.description },
    { icon: Briefcase, title: t.services.commercialLaw.title, description: t.services.commercialLaw.description },
    { icon: Users, title: t.services.laborLaw.title, description: t.services.laborLaw.description },
    { icon: FileText, title: t.services.executionLaw.title, description: t.services.executionLaw.description },
    { icon: Home, title: t.services.inheritanceLaw.title, description: t.services.inheritanceLaw.description },
    { icon: Building2, title: t.services.realEstateLaw.title, description: t.services.realEstateLaw.description },
    { icon: ShoppingCart, title: t.services.consumerLaw.title, description: t.services.consumerLaw.description },
    { icon: Shield, title: t.services.insuranceLaw.title, description: t.services.insuranceLaw.description },
    { icon: Laptop, title: t.services.informationLaw.title, description: t.services.informationLaw.description },
    { icon: HeartPulse, title: t.services.healthLaw.title, description: t.services.healthLaw.description },
    { icon: FileSignature, title: t.services.contractLaw.title, description: t.services.contractLaw.description }
  ];

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
            className="mb-4"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}