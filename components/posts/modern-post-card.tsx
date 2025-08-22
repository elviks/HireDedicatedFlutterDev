"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight, Tag, Image as ImageIcon } from "lucide-react";
import type { Post } from "@/lib/wordpress.d";
import { useState } from "react";

interface ModernPostCardProps {
     post: Post;
}

export function ModernPostCard({ post }: ModernPostCardProps) {
     const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
     const author = post._embedded?.author?.[0];
     const category = post._embedded?.["wp:term"]?.[0]?.[0];
     const [imageError, setImageError] = useState(false);

     // Calculate reading time (rough estimate)
     const readingTime = Math.ceil(
          post.content.rendered.replace(/<[^>]*>/g, "").split(" ").length / 200
     );

     // Clean excerpt text
     const cleanExcerpt = post.excerpt.rendered
          .replace(/<[^>]*>/g, "")
          .replace(/&nbsp;/g, " ")
          .trim();

     return (
          <motion.article
               whileHover={{ y: -4 }}
               transition={{ duration: 0.2, ease: "easeOut" }}
               className="group h-full"
          >
               <div className="h-full overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                         {featuredImage && !imageError ? (
                              <Image
                                   src={featuredImage.source_url}
                                   alt={featuredImage.alt_text || post.title.rendered}
                                   fill
                                   className="object-cover transition-transform duration-300 group-hover:scale-105"
                                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                                   onError={() => setImageError(true)}
                              />
                         ) : (
                              <div className="flex items-center justify-center h-full bg-gray-100">
                                   <ImageIcon className="w-12 h-12 text-gray-400" />
                              </div>
                         )}

                         {/* Category Badge */}
                         {category && (
                              <div className="absolute top-3 left-3">
                                   <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium">
                                        <Tag className="w-3 h-3" />
                                        {category.name}
                                   </span>
                              </div>
                         )}

                         {/* Reading Time */}
                         <div className="absolute top-3 right-3">
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                                   <Clock className="w-3 h-3" />
                                   {readingTime} min
                              </span>
                         </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                         {/* Meta */}
                         <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                              {author && (
                                   <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        <span>{author.name}</span>
                                   </div>
                              )}
                              <div className="flex items-center gap-1">
                                   <Calendar className="w-3 h-3" />
                                   <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                             month: "short",
                                             day: "numeric",
                                             year: "numeric",
                                        })}
                                   </time>
                              </div>
                         </div>

                         {/* Title */}
                         <Link href={`/blog/${post.slug}`} className="group/title">
                              <h2
                                   className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover/title:text-blue-600 transition-colors"
                                   dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                   }}
                              />
                         </Link>

                         {/* Excerpt */}
                         <div className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                              {cleanExcerpt.length > 120
                                   ? `${cleanExcerpt.substring(0, 120)}...`
                                   : cleanExcerpt
                              }
                         </div>

                         {/* Read More */}
                         <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors group/btn"
                         >
                              <span>Read more</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                         </Link>
                    </div>
               </div>
          </motion.article>
     );
}
