import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Function to resolve asset paths properly in Vite.
function getImagePath(prefix: string, language: string) {
    // If the prefix is 'Blog yazısı 2', there is no language-specific image, just use .jpeg
    if (prefix === 'Blog yazısı 2') {
        return new URL(`../assets/Blog yazısı 2.jpeg`, import.meta.url).href;
    }
    return new URL(`../assets/${prefix} ${language}.jpeg`, import.meta.url).href;
}

export function BlogPostPage() {
    const { id } = useParams<{ id: string }>();
    const { t, language } = useLanguage();
    const navigate = useNavigate();

    // Find the requested blog based on ID
    const blog = t.blogs.find(b => b.id === id);

    if (!blog) {
        // Redirect to blog list if ID is not found
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="pt-16 min-h-screen" style={{ backgroundColor: "var(--law-bg)" }}>
            {/* Hero Section */}
            <section
                className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`
                }}
            >
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1
                        className="mb-6 text-xl sm:text-2xl md:text-4xl leading-snug px-2"
                        style={{ color: "white", fontWeight: "700" }}
                    >
                        {blog.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/blog')}
                        className="mb-8 flex items-center space-x-2 text-sm font-semibold transition-colors hover:opacity-70"
                        style={{ color: "var(--law-navy)" }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>{t.blog.backToBlog}</span>
                    </button>

                    <div className="bg-white p-6 md:p-12 rounded-xl shadow-xl border border-gray-100 mt-6 lg:mt-8 ml-2 lg:ml-4">
                        {/* Image Container */}
                        <div className="relative mb-8">
                            <div className="w-full h-64 md:h-[32rem] overflow-hidden rounded-xl shadow-lg relative group">
                                <img
                                    src={getImagePath(blog.imagePrefix, language)}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Category Row */}
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="h-px w-12" style={{ backgroundColor: "#8c2e21" }}></div>
                            <span
                                className="text-base font-bold tracking-wider text-black uppercase"
                            >
                                {blog.id === 'gumrukte-el-konulan-mallar'
                                    ? (language === 'tr' ? 'Gümrük Hukuku | Ceza Hukuku' : 'Customs Law | Criminal Law')
                                    : (language === 'tr' ? 'Gayrimenkul Hukuku' : 'Real Estate Law')}
                            </span>
                        </div>

                        {/* Article Text */}
                        <div className="space-y-6 md:space-y-8">
                            {blog.content.map((paragraph, idx) => {
                                // Enhanced text detection for better readability
                                const isShortSubtitle = !paragraph.startsWith('•') && (paragraph.match(/^[0-9]\./) || (paragraph.length < 100 && paragraph.split(' ').length < 15));

                                // Handling bullet point items where there's a title (before colon) and long text
                                if (paragraph.startsWith('•')) {
                                    const colonIndex = paragraph.indexOf(':');
                                    if (colonIndex !== -1 && colonIndex < 80) {
                                        const title = paragraph.substring(0, colonIndex + 1);
                                        const text = paragraph.substring(colonIndex + 1);
                                        return (
                                            <p key={idx} className="text-lg leading-relaxed text-justify text-gray-800 font-normal">
                                                <span className="font-extrabold text-xl mr-2 text-black">{title}</span>
                                                {text}
                                            </p>
                                        );
                                    }
                                    return (
                                        <p key={idx} className="text-lg leading-relaxed text-justify text-gray-800 font-normal">
                                            {paragraph}
                                        </p>
                                    );
                                }

                                return (
                                    <p
                                        key={idx}
                                        className={`leading-relaxed text-justify ${isShortSubtitle ? 'font-black mt-10 mb-4 text-2xl tracking-wide text-black' : 'text-lg text-gray-800 font-normal'}`}
                                    >
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
