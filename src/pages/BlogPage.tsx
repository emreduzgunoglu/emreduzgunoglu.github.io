import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

// Function to resolve asset paths properly in Vite.
function getImagePath(prefix: string, language: string) {
    // If the prefix is 'Blog yazısı 2', there is no language-specific image, just use .jpeg
    if (prefix === 'Blog yazısı 2') {
        return new URL(`../assets/Blog yazısı 2.jpeg`, import.meta.url).href;
    }
    return new URL(`../assets/${prefix} ${language}.jpeg`, import.meta.url).href;
}

export function BlogPage() {
    const { t, language } = useLanguage();
    const navigate = useNavigate();

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
                        {t.header.blog}
                    </h1>
                    <p
                        className="max-w-2xl mx-auto"
                        style={{ color: "var(--law-blue)", fontSize: "1.25rem" }}
                    >
                        {language === 'tr'
                            ? 'Hukuk dünyasındaki güncel gelişmeler ve makaleler.'
                            : 'Current developments and articles in the legal world.'}
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section
                className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
                style={{ background: `linear-gradient(180deg, #f0f4f8 0%, white 50%, #f0f4f8 100%)` }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.blogs.map((blog) => (
                            <div
                                key={blog.id}
                                onClick={() => navigate(`/blog/${blog.id}`)}
                                className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col bg-white"
                                style={{
                                    border: "1px solid #e5e7eb"
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-56 overflow-hidden">
                                    <img
                                        src={getImagePath(blog.imagePrefix, language)}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 hover:bg-transparent" />
                                </div>

                                {/* Content Container */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Category Row */}
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="h-px w-8" style={{ backgroundColor: "#8c2e21" }}></div>
                                        <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                            {blog.id === 'gumrukte-el-konulan-mallar'
                                                ? (language === 'tr' ? 'Gümrük Hukuku | Ceza Hukuku' : 'Customs Law | Criminal Law')
                                                : (language === 'tr' ? 'Gayrimenkul Hukuku' : 'Real Estate Law')}
                                        </span>
                                    </div>

                                    <h3
                                        className="font-bold text-xl mb-4 line-clamp-3 leading-snug"
                                        style={{ color: "var(--law-navy)" }}
                                    >
                                        {blog.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex justify-between items-center w-full" style={{ borderTop: "1px solid #f3f4f6" }}>
                                        <span
                                            className="text-sm font-semibold transition-colors"
                                            style={{ color: "var(--law-gold)" }}
                                        >
                                            {t.blog.readMore}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
