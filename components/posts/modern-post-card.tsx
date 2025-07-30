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
               whileHover={{ y: -8 }}
               transition={{ duration: 0.3, ease: "easeOut" }}
               className="group relative h-full"
          >
               {/* Card Container */}
               <div className="relative h-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                         {featuredImage && !imageError ? (
                              <Image
                                   src={featuredImage.source_url}
                                   alt={featuredImage.alt_text || post.title.rendered}
                                   fill
                                   className="object-cover transition-transform duration-500 group-hover:scale-105"
                                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                                   onError={() => setImageError(true)}
                              />
                         ) : (
                              <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-50">
                                   <div className="text-center">
                                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500">No image available</p>
                                   </div>
                              </div>
                         )}

                         {/* Gradient Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                         {/* Category Badge */}
                         {category && (
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.3, delay: 0.1 }}
                                   className="absolute top-4 left-4"
                              >
                                   <Link
                                        href={`/blog/category/${category.slug}`}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 text-gray-700 text-xs font-medium hover:bg-white transition-colors cursor-pointer shadow-sm"
                                   >
                                        <Tag className="w-3 h-3" />
                                        {category.name}
                                   </Link>
                              </motion.div>
                         )}

                         {/* Reading Time Badge */}
                         <div className="absolute top-4 right-4">
                              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                                   <Clock className="w-3 h-3" />
                                   {readingTime} min
                              </div>
                         </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 flex flex-col flex-1">
                         {/* Meta Information */}
                         <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                              {author && (
                                   <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        <span className="font-medium">{author.name}</span>
                                   </div>
                              )}

                              <div className="flex items-center gap-1.5">
                                   <Calendar className="w-3.5 h-3.5" />
                                   <time dateTime={post.date} className="font-medium">
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
                                   className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover/title:text-blue-600 transition-colors duration-300 leading-tight"
                                   dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                   }}
                              />
                         </Link>

                         {/* Excerpt */}
                         <div className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                              {cleanExcerpt.length > 150
                                   ? `${cleanExcerpt.substring(0, 150)}...`
                                   : cleanExcerpt
                              }
                         </div>

                         {/* Read More Button */}
                         <Link
                              href={`/blog/${post.slug}`}
                              className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 cursor-pointer mt-auto"
                         >
                              <span>Read More</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                         </Link>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent  transition-all duration-300 pointer-events-none" />
               </div>
          </motion.article>
     );
}
