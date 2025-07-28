"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
     Calendar,
     User,
     Clock,
     Tag,
     ArrowLeft,
     Share2,
     BookOpen,
     Eye,
     Heart,
     MessageCircle,
     Sparkles,
     Code2,
     Star,
     Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

interface BlogPost {
     slug: string;
     title: string;
     description: string;
     content: string;
     publishedAt: string;
     author: string;
     image: string;
     tags: string[];
     category?: string;
     readingTime?: number;
}

interface ModernBlogPostWrapperProps {
     post: BlogPost;
}

export function ModernBlogPostWrapper({ post }: ModernBlogPostWrapperProps) {
     const [isScrolled, setIsScrolled] = useState(false);
     const [readingProgress, setReadingProgress] = useState(0);

     // No dark mode effect; use default theme

     useEffect(() => {
          const handleScroll = () => {
               const scrollTop = window.scrollY;
               const docHeight =
                    document.documentElement.scrollHeight - window.innerHeight;
               const scrollPercent = (scrollTop / docHeight) * 100;

               setReadingProgress(scrollPercent);
               setIsScrolled(scrollTop > 100);
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     const handleShare = async () => {
          if (navigator.share) {
               try {
                    await navigator.share({
                         title: post.title,
                         text: post.description,
                         url: window.location.href,
                    });
               } catch (error) {
                    console.log("Error sharing:", error);
               }
          } else {
               // Fallback to clipboard
               await navigator.clipboard.writeText(window.location.href);
          }
     };

     return (
          <div className="relative min-h-screen bg-background text-foreground">
               {/* Reading Progress Bar */}
               <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
                    style={{
                         scaleX: readingProgress / 100,
                         transformOrigin: "0%",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: readingProgress / 100 }}
                    transition={{ duration: 0.1 }}
               />

               {/* No heavy background effects for light mode */}

               {/* Main Content */}
               <main className="relative z-10">
                    {/* Back Button */}
                    <nav
                         className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
                         aria-label="Breadcrumb"
                    >
                         <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                         >
                              <Link
                                   href="/blog"
                                   className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer"
                              >
                                   <ArrowLeft className="w-4 h-4" />
                                   <span>Back to Blog</span>
                              </Link>
                         </motion.div>
                    </nav>

                    {/* Article Header */}
                    <header className="relative py-16 overflow-hidden">
                         {/* Background Elements */}
                         <div className="absolute inset-0">
                              <motion.div
                                   className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
                                   style={{
                                        background:
                                             "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
                                   }}
                                   animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                   }}
                                   transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                   }}
                              />
                         </div>

                         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="text-center">
                                   {/* Category Badge */}
                                   {post.category && (
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                                             <Tag className="w-4 h-4" />
                                             <span>{post.category}</span>
                                        </div>
                                   )}

                                   {/* Title */}
                                   <h1
                                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight"
                                        dangerouslySetInnerHTML={{
                                             __html: post.title,
                                        }}
                                   />

                                   {/* Description */}
                                   <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                                        {post.description}
                                   </p>

                                   {/* Meta Information */}
                                   <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
                                        <div className="flex items-center gap-2">
                                             <User className="w-4 h-4" />
                                             <span>{post.author}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                             <Calendar className="w-4 h-4" />
                                             <time dateTime={post.publishedAt}>
                                                  {new Date(
                                                       post.publishedAt
                                                  ).toLocaleDateString(
                                                       "en-US",
                                                       {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                       }
                                                  )}
                                             </time>
                                        </div>

                                        {post.readingTime && (
                                             <div className="flex items-center gap-2">
                                                  <Clock className="w-4 h-4" />
                                                  <span>
                                                       {post.readingTime} min
                                                       read
                                                  </span>
                                             </div>
                                        )}
                                   </div>

                                   {/* Action Buttons */}
                                   <div className="flex items-center justify-center gap-4">
                                        <button
                                             onClick={handleShare}
                                             className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                                        >
                                             <Share2 className="w-4 h-4" />
                                             <span>Share</span>
                                        </button>
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-gray-500">
                                             <Eye className="w-4 h-4" />
                                             <span>1.2k views</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </header>

                    {/* Featured Image */}
                    {post.image && (
                         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                                   <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                   />
                                   {/* Gradient Overlay */}
                                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
                              </div>
                         </div>
                    )}

                    {/* Article Content */}
                    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                         <div
                              className="prose prose-lg max-w-none"
                              style={
                                   {
                                        "--tw-prose-body": "#334155",
                                        "--tw-prose-headings": "#0f172a",
                                        "--tw-prose-lead": "#64748b",
                                        "--tw-prose-links": "#2563eb",
                                        "--tw-prose-bold": "#0f172a",
                                        "--tw-prose-counters": "#64748b",
                                        "--tw-prose-bullets": "#64748b",
                                        "--tw-prose-hr": "#e2e8f0",
                                        "--tw-prose-quotes": "#0f172a",
                                        "--tw-prose-quote-borders": "#e2e8f0",
                                        "--tw-prose-captions": "#64748b",
                                        "--tw-prose-code": "#0f172a",
                                        "--tw-prose-pre-code": "#334155",
                                        "--tw-prose-pre-bg": "#f1f5f9",
                                        "--tw-prose-th-borders": "#e2e8f0",
                                        "--tw-prose-td-borders": "#e2e8f0",
                                   } as React.CSSProperties
                              }
                         >
                              <div
                                   dangerouslySetInnerHTML={{
                                        __html: post.content,
                                   }}
                              />
                         </div>
                    </article>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                              <div className="flex flex-wrap gap-3">
                                   <span className="text-gray-500 text-sm font-medium">
                                        Tags:
                                   </span>
                                   {post.tags.map((tag) => (
                                        <span
                                             key={tag}
                                             className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm"
                                        >
                                             {tag}
                                        </span>
                                   ))}
                              </div>
                         </div>
                    )}

                    {/* CTA Section */}
                    <section className="py-16 bg-blue-50/60">
                         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                              <div className="relative bg-white rounded-2xl border border-blue-100 p-8 shadow">
                                   <h2 className="text-2xl font-bold text-blue-900 mb-4">
                                        Need Expert Next.js Development?
                                   </h2>
                                   <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
                                        Our team of skilled Next.js developers
                                        can help you build modern, scalable web
                                        applications. Get in touch to discuss
                                        your project.
                                   </p>
                                   <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-300 cursor-pointer"
                                   >
                                        <span>Get Started</span>
                                        <ArrowLeft className="w-4 h-4 rotate-180" />
                                   </Link>
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
}
