"use client";

import { motion } from "framer-motion";
import { ModernPostCard } from "@/components/posts/modern-post-card";
import { ModernSearchInput } from "@/components/posts/modern-search-input";
import {
     BookOpen,
     Search,
     Filter,
     Sparkles,
     Code2,
     Star,
     Zap,
     TrendingUp,
     Calendar,
     User,
} from "lucide-react";
import { useEffect, useState } from "react";

interface BlogWrapperProps {
     posts: any[];
     search: string;
}

export default function ModernBlogWrapper({ posts, search }: BlogWrapperProps) {
     const [selectedCategory, setSelectedCategory] = useState<string>("all");

     // Extract unique categories from posts
     const categories = [
          "all",
          ...new Set(
               posts.flatMap(
                    (post) =>
                         post._embedded?.["wp:term"]?.[0]?.map(
                              (term: any) => term.slug
                         ) || []
               )
          ),
     ];

     const filteredPosts =
          selectedCategory === "all"
               ? posts
               : posts.filter((post) =>
                    post._embedded?.["wp:term"]?.[0]?.some(
                         (term: any) => term.slug === selectedCategory
                    )
               );

     const stats = [
          { number: `${posts.length}+`, label: "Articles", icon: BookOpen },
          { number: "50+", label: "Topics Covered", icon: TrendingUp },
          { number: "10k+", label: "Readers", icon: User },
          { number: "Weekly", label: "New Content", icon: Calendar },
     ];

     return (
          <div className="relative min-h-screen bg-gray-50">
               {/* Main Content */}
               <main className="relative z-10">
                    {/* Hero Section */}
                    <section className="relative py-20 overflow-hidden bg-white">
                         {/* Background Elements */}
                         <div className="absolute inset-0">
                              <motion.div
                                   className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
                                   style={{
                                        background:
                                             "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
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

                              <motion.div
                                   className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
                                   style={{
                                        background:
                                             "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
                                   }}
                                   animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.5, 0.2],
                                   }}
                                   transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2,
                                   }}
                              />
                         </div>

                         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-16">
                                   <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                             duration: 0.6,
                                             delay: 0.2,
                                        }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6"
                                   >
                                        <BookOpen className="w-4 h-4" />
                                        <span>Latest Insights & Articles</span>
                                   </motion.div>

                                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                        Development{" "}
                                        <span className="text-blue-600">
                                             Insights
                                        </span>
                                   </h1>

                                   <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                        Discover the latest trends, best
                                        practices, and expert insights in
                                        Flutter development, Dart patterns, and
                                        modern mobile technologies.
                                   </p>
                              </div>

                              {/* Stats Section */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                                   {stats.map((stat, index) => (
                                        <div
                                             key={stat.label}
                                             className="text-center group"
                                        >
                                             <div className="relative mb-4">
                                                  <div className="inline-flex p-3 rounded-xl bg-blue-100 border border-blue-200 group-hover:border-blue-400 transition-colors">
                                                       <stat.icon className="w-6 h-6 text-blue-600" />
                                                  </div>
                                             </div>
                                             <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                                  {stat.number}
                                             </div>
                                             <div className="text-gray-600 text-sm font-medium">
                                                  {stat.label}
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>

                    {/* Search and Filter Section */}
                    <section className="py-12 bg-white border-b border-gray-200">
                         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <motion.div
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.8 }}
                                   className="flex flex-col lg:flex-row gap-8 items-center justify-between"
                              >
                                   {/* Search */}
                                   <div className="flex-1 max-w-md">
                                        <ModernSearchInput
                                             defaultValue={search}
                                        />
                                   </div>

                                   {/* Category Filter */}
                                   <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 text-gray-500">
                                             <Filter className="w-4 h-4" />
                                             <span className="text-sm font-medium">
                                                  Filter:
                                             </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                             {categories
                                                  .slice(0, 5)
                                                  .map((category) => (
                                                       <motion.button
                                                            key={category}
                                                            whileHover={{
                                                                 scale: 1.05,
                                                            }}
                                                            whileTap={{
                                                                 scale: 0.95,
                                                            }}
                                                            onClick={() =>
                                                                 setSelectedCategory(
                                                                      category
                                                                 )
                                                            }
                                                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${selectedCategory ===
                                                                      category
                                                                      ? "bg-blue-600 text-white shadow-md"
                                                                      : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                                                                 }`}
                                                       >
                                                            {category === "all"
                                                                 ? "All"
                                                                 : category
                                                                      .charAt(
                                                                           0
                                                                      )
                                                                      .toUpperCase() +
                                                                 category.slice(
                                                                      1
                                                                 )}
                                                       </motion.button>
                                                  ))}
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </section>

                    {/* Blog Posts Grid */}
                    <section className="py-20 bg-gray-50">
                         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              {filteredPosts.length > 0 ? (
                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                   >
                                        {filteredPosts.map((post, index) => (
                                             <motion.div
                                                  key={post.id}
                                                  initial={{
                                                       opacity: 0,
                                                       y: 30,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                  }}
                                                  viewport={{ once: true }}
                                                  transition={{
                                                       duration: 0.6,
                                                       delay: index * 0.1,
                                                  }}
                                             >
                                                  <ModernPostCard post={post} />
                                             </motion.div>
                                        ))}
                                   </motion.div>
                              ) : (
                                   <div className="text-center py-16">
                                        <div className="relative mb-8">
                                             <div className="inline-flex p-6 rounded-full bg-blue-100 border border-blue-200">
                                                  <Search className="w-12 h-12 text-blue-600" />
                                             </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                             No articles found
                                        </h3>
                                        <p className="text-gray-600 max-w-md mx-auto">
                                             We couldn't find any articles
                                             matching your search criteria. Try
                                             adjusting your filters or search
                                             terms.
                                        </p>
                                   </div>
                              )}
                         </div>
                    </section>
               </main>
          </div>
     );
}
