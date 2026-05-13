import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getBlogPostBySlug, BlogPost } from '../services/sanityService';
import { PortableText } from '@portabletext/react';

// Özel Sanity Metin Tasarımı (Eski blog tasarımıyla uyumlu olması için)
const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?.url) return null;
            return (
                <div style={{ margin: '2rem 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img src={value.asset.url} alt="Blog Görseli" style={{ borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxWidth: '100%', height: 'auto' }} />
                </div>
            );
        }
    },
    block: {
        normal: ({ children }: any) => <p style={{ lineHeight: '1.8', textAlign: 'justify', fontSize: '1.1rem', color: '#1f2937', fontWeight: '400', marginBottom: '1.5rem' }}>{children}</p>,
        h1: ({ children }: any) => <h1 style={{ fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '2rem', letterSpacing: '0.025em', color: '#000', display: 'block' }}>{children}</h1>,
        h2: ({ children }: any) => <h2 style={{ fontWeight: '900', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.625rem', letterSpacing: '0.025em', color: '#000', display: 'block' }}>{children}</h2>,
        h3: ({ children }: any) => <h3 style={{ fontWeight: '900', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.375rem', letterSpacing: '0.025em', color: '#000', display: 'block' }}>{children}</h3>,
        h4: ({ children }: any) => <h4 style={{ fontWeight: '700', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.2rem', letterSpacing: '0.025em', color: '#000', display: 'block' }}>{children}</h4>,
        h5: ({ children }: any) => <h5 style={{ fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.05rem', letterSpacing: '0.025em', color: '#000', display: 'block' }}>{children}</h5>,
        h6: ({ children }: any) => <h6 style={{ fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '0.95rem', letterSpacing: '0.025em', color: '#000', display: 'block' }}>{children}</h6>,
        blockquote: ({ children }: any) => <blockquote style={{ borderLeft: '4px solid var(--law-gold)', paddingLeft: '1rem', fontStyle: 'italic', color: '#4b5563', marginBottom: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>{children}</blockquote>,
    },
    list: {
        bullet: ({ children }: any) => <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>{children}</ul>,
        number: ({ children }: any) => <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li style={{ fontSize: '1.1rem', color: '#1f2937', marginBottom: '0.5rem' }}>{children}</li>,
        number: ({ children }: any) => <li style={{ fontSize: '1.1rem', color: '#1f2937', marginBottom: '0.5rem' }}>{children}</li>,
    },
    marks: {
        strong: ({ children }: any) => <strong style={{ fontWeight: '800', color: '#000' }}>{children}</strong>,
        em: ({ children }: any) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
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
                    <div className="bg-white p-6 md:p-12 rounded-xl shadow-xl border border-gray-100">
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

                        {loading ? (
                            <div className="flex flex-col space-y-4 animate-pulse">
                                <div className="w-full max-w-4xl mx-auto h-64 md:h-[28rem] bg-gray-200 rounded-xl mb-10"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                        ) : blog ? (
                            <>
                                {/* Image Container */}
                                {blog.mainImage?.asset?.url && (
                                    <div className="w-full max-w-4xl mx-auto h-64 md:h-[28rem] mb-10 overflow-hidden rounded-xl shadow-lg relative group bg-gray-100 flex items-center justify-center">
                                        <img
                                            src={blog.mainImage.asset.url}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
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
