import { getAllPosts } from "@/lib/wordpress-api";
import ModernBlogWrapper from "@/components/modern-blog-wrapper";

interface BlogPageProps {
     searchParams: Promise<{
          search?: string;
          page?: string;
     }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
     const params = await searchParams;
     const search = params?.search || "";
     const page = parseInt(params?.page || "1");
     const perPage = 9; // Number of posts per page

     try {
          const posts = await getAllPosts({
               search,
               page,
               per_page: perPage,
          });

          return <ModernBlogWrapper posts={posts} search={search} />;
     } catch (error) {
          console.error('Error fetching posts:', error);
          
          // Fallback UI when WordPress is not available
          return (
               <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">Blog</h1>
                    <div className="text-center py-12">
                         <p className="text-gray-600 mb-4">
                              Unable to load blog posts at the moment.
                         </p>
                         <p className="text-sm text-gray-500">
                              Please check that WordPress CMS is properly configured.
                         </p>
                    </div>
               </div>
          );
     }
}
