import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Function to resolve asset paths properly in Vite.
function getImagePath(prefix: string, language: string) {
    return new URL(`../assets/${prefix} ${language}.jpeg`, import.meta.url).href;
}

export function ServiceDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { t, language } = useLanguage();

    // Find the requested category based on ID
    const service = t.services.categories.find(c => c.id === id);

    if (!service) {
        // Redirect to services list if ID is not found
        return <Navigate to="/hizmetlerimiz" replace />;
    }

    return (
        <div className="pt-16 min-h-screen" style={{ backgroundColor: "var(--law-bg)" }}>
            {/* Hero Section using navy background for consistency */}
            <section
                className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`
                }}
            >
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1
                        className="mb-6"
                        style={{ color: "var(--law-gold)", fontSize: "2.5rem", fontWeight: "700" }}
                    >
                        {service.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    <div className="max-w-4xl mx-auto">
                        {/* Dynamic Image */}
                        <div className="w-full h-64 md:h-[28rem] mb-10 overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={getImagePath(service.imagePrefix, language)}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-8">
                            {service.content.map((paragraph, idx) => (
                                <p key={idx} className="text-lg leading-relaxed text-justify" style={{ color: "var(--law-text)" }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
