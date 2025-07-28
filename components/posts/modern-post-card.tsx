"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";
import type { Post } from "@/lib/wordpress.d";

interface ModernPostCardProps {
     post: Post;
}

export function ModernPostCard({ post }: ModernPostCardProps) {
     const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
     const author = post._embedded?.author?.[0];
     const category = post._embedded?.["wp:term"]?.[0]?.[0];

     // Calculate reading time (rough estimate)
     const readingTime = Math.ceil(
          post.content.rendered.replace(/<[^>]*>/g, "").split(" ").length / 200
     );

     return (
          <motion.article
               whileHover={{ y: -8 }}
               transition={{ duration: 0.3, ease: "easeOut" }}
               className="group relative h-full"
          >
               {/* Card Container */}
               <div className="relative h-full overflow-hidden rounded-2xl bg-dark-surface/50 border border-white/10 backdrop-blur-sm hover:border-glow-primary/30 transition-all duration-300">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-primary/0 via-glow-primary/5 to-glow-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Featured Image */}
                    {featuredImage && (
                         <div className="relative aspect-[16/9] overflow-hidden">
                              <Image
                                   src={featuredImage.source_url}
                                   alt={
                                        featuredImage.alt_text ||
                                        post.title.rendered
                                   }
                                   fill
                                   className="object-cover transition-transform duration-500 group-hover:scale-110"
                                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                              />

                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent" />

                              {/* Category Badge */}
                              {category && (
                                   <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                             duration: 0.3,
                                             delay: 0.1,
                                        }}
                                        className="absolute top-4 left-4"
                                   >
                                        <Link
                                             href={`/blog/category/${category.slug}`}
                                             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-glow-primary/20 backdrop-blur-sm border border-glow-primary/30 text-glow-primary text-xs font-medium hover:bg-glow-primary/30 transition-colors cursor-pointer"
                                        >
                                             <Tag className="w-3 h-3" />
                                             {category.name}
                                        </Link>
                                   </motion.div>
                              )}
                         </div>
                    )}

                    {/* Content */}
                    <div className="relative p-6 flex flex-col flex-1">
                         {/* Title */}
                         <Link
                              href={`/blog/${post.slug}`}
                              className="group/title"
                         >
                              <h2
                                   className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover/title:text-glow-primary transition-colors duration-300"
                                   dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                   }}
                              />
                         </Link>

                         {/* Excerpt */}
                         <div
                              className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1"
                              dangerouslySetInnerHTML={{
                                   __html: post.excerpt.rendered,
                              }}
                         />

                         {/* Meta Information */}
                         <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                              <div className="flex items-center gap-4">
                                   {author && (
                                        <div className="flex items-center gap-1.5">
                                             <User className="w-3.5 h-3.5" />
                                             <span>{author.name}</span>
                                        </div>
                                   )}

                                   <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <time dateTime={post.date}>
                                             {new Date(
                                                  post.date
                                             ).toLocaleDateString("en-US", {
                                                  month: "short",
                                                  day: "numeric",
                                                  year: "numeric",
                                             })}
                                        </time>
                                   </div>
                              </div>

                              <div className="flex items-center gap-1.5">
                                   <Clock className="w-3.5 h-3.5" />
                                   <span>{readingTime} min read</span>
                              </div>
                         </div>

                         {/* Read More Button */}
                         <Link
                              href={`/blog/${post.slug}`}
                              className="group/btn inline-flex items-center gap-2 text-glow-primary hover:text-glow-secondary text-sm font-medium transition-colors duration-300 cursor-pointer"
                         >
                              <span>Read More</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                         </Link>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-glow-primary/20 transition-all duration-300 pointer-events-none" />
               </div>
          </motion.article>
     );
}
