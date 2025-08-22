"use client";

import { motion } from "framer-motion";
import { ModernPostCard } from "@/components/posts/modern-post-card";
import { ModernSearchInput } from "@/components/posts/modern-search-input";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

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

     return (
          <div className="min-h-screen bg-gray-50">
               {/* Header Section */}
               <div className="bg-white border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 py-12">
                         <div className="text-center mb-8">
                              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                   Blog
                              </h1>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Discover insights, tutorials, and best practices for Flutter development
                              </p>
                         </div>

                         {/* Search and Filter */}
                         <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                              {/* Search */}
                              <div className="flex-1 max-w-md">
                                   <ModernSearchInput defaultValue={search} />
                              </div>

                              {/* Category Filter */}
                              <div className="flex items-center gap-3">
                                   <Filter className="w-4 h-4 text-gray-500" />
                                   <div className="flex flex-wrap gap-2">
                                        {categories.slice(0, 4).map((category) => (
                                             <button
                                                  key={category}
                                                  onClick={() => setSelectedCategory(category)}
                                                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                                       selectedCategory === category
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                  }`}
                                             >
                                                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                                             </button>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Blog Posts */}
               <div className="max-w-6xl mx-auto px-4 py-12">
                    {filteredPosts.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {filteredPosts.map((post, index) => (
                                   <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                   >
                                        <ModernPostCard post={post} />
                                   </motion.div>
                              ))}
                         </div>
                    ) : (
                         <div className="text-center py-16">
                              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                   No articles found
                              </h3>
                              <p className="text-gray-600">
                                   Try adjusting your search or filters
                              </p>
                         </div>
                    )}
               </div>
          </div>
     );
}
