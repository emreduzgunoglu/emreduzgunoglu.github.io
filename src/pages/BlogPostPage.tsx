import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getBlogPostBySlug, BlogPost } from '../services/sanityService';
import { PortableText } from '@portabletext/react';

// Özel Sanity Metin Tasarımı (Eski blog tasarımıyla uyumlu olması için)
const ptComponents = {
  block: {
    normal: ({children}: any) => <p className="leading-relaxed text-justify text-lg text-gray-800 font-normal mb-6">{children}</p>,
    h1: ({children}: any) => <h1 className="font-black mt-10 mb-4 text-3xl tracking-wide text-black">{children}</h1>,
    h2: ({children}: any) => <h2 className="font-black mt-10 mb-4 text-2xl tracking-wide text-black">{children}</h2>,
    h3: ({children}: any) => <h3 className="font-black mt-8 mb-4 text-xl tracking-wide text-black">{children}</h3>,
    blockquote: ({children}: any) => <blockquote className="border-l-4 pl-4 italic text-gray-600 mb-6 py-2" style={{ borderColor: 'var(--law-gold)' }}>{children}</blockquote>,
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="text-lg text-gray-800">{children}</li>,
    number: ({children}: any) => <li className="text-lg text-gray-800">{children}</li>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-extrabold text-black">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
  }
};

export function BlogPostPage() {
    const { id } = useParams<{ id: string }>(); 
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (id) {
            getBlogPostBySlug(id).then((data) => {
                if (data) {
                    setBlog(data);
                } else {
                    setError(true);
                }
                setLoading(false);
            }).catch(() => {
                setError(true);
                setLoading(false);
            });
        }
    }, [id]);

    if (error) {
        return <Navigate to="/blog" replace />;
    }

    // Yükleniyor durumunda da ana iskeleti göstererek "zıplama" (flash) etkisini engelliyoruz
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
                        className="mb-6"
                        style={{ color: "white", fontSize: "2.5rem", fontWeight: "700" }}
                    >
                        {blog ? blog.title : "Yükleniyor..."}
                    </h1>
                    {blog?.publishedAt && (
                      <p
                          className="max-w-2xl mx-auto"
                          style={{ color: "var(--law-blue)", fontSize: "1.25rem" }}
                      >
                          {new Date(blog.publishedAt).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    )}
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
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

                    <div className="bg-white p-6 md:p-12 rounded-xl shadow-xl border border-gray-100 mt-6 lg:mt-8">
                        {loading ? (
                            <div className="flex flex-col space-y-4 animate-pulse">
                                <div className="h-64 md:h-96 bg-gray-200 rounded-xl w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                        ) : blog ? (
                            <>
                                {/* Image Container */}
                                {blog.mainImage?.asset?.url && (
                                <div className="relative mb-8">
                                    <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg relative group bg-gray-100">
                                        <img
                                            src={blog.mainImage.asset.url}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                                )}

                                {/* Article Text */}
                                <div className="space-y-6 md:space-y-8 mt-8">
                                    {blog.body && <PortableText value={blog.body} components={ptComponents} />}
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </section>
        </div>
    );
}
