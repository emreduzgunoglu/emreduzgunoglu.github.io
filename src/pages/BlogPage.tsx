import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { getBlogPosts, BlogPost } from "../services/sanityService";

export function BlogPage() {
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogPosts().then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

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
                    {loading ? (
                        <div className="text-center text-gray-500 py-10 font-medium">Yazılar Yükleniyor...</div>
                    ) : posts.length === 0 ? (
                        <div className="text-center text-gray-500 py-10 font-medium">Henüz yayınlanmış bir blog yazısı bulunmamaktadır.</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((blog) => (
                                <div
                                    key={blog._id}
                                    onClick={() => navigate(`/blog/${blog.slug.current}`)}
                                    className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col bg-white"
                                    style={{
                                        border: "1px solid #e5e7eb"
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
                                        {blog.mainImage?.asset?.url ? (
                                            <img
                                                src={blog.mainImage.asset.url}
                                                alt={blog.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        )}
                                        <div className="absolute inset-0 bg-black/5 transition-colors duration-300 hover:bg-transparent" />
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 flex flex-col flex-1">
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
                                            {blog.publishedAt && (
                                              <span className="text-xs text-gray-400">
                                                  {new Date(blog.publishedAt).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                                              </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
