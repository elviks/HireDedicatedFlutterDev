import { getAllPosts } from "@/lib/wordpress";

export default async function TestBlogPage() {
     try {
          console.log('WORDPRESS_URL:', process.env.WORDPRESS_URL);
          const posts = await getAllPosts({
               per_page: 5,
          });

          console.log('Posts fetched:', posts?.length);
          
          return (
               <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8">Blog Posts (Test)</h1>
                    {posts && posts.length > 0 ? (
                         <div className="space-y-6">
                              {posts.map((post) => (
                                   <div key={post.id} className="border p-4 rounded">
                                        <h2 className="text-xl font-semibold mb-2">
                                             {post.title.rendered}
                                        </h2>
                                        <div 
                                             className="text-gray-600"
                                             dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                        />
                                        <p className="text-sm text-gray-500 mt-2">
                                             {new Date(post.date).toLocaleDateString()}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    ) : (
                         <p>No posts found</p>
                    )}
               </div>
          );
     } catch (error) {
          console.error('Error in test blog page:', error);
          return (
               <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8">Blog Posts (Test)</h1>
                    <p className="text-red-500">Error loading posts: {String(error)}</p>
               </div>
          );
     }
}
