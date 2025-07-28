import { getAllPosts } from "@/lib/wordpress";
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

     const posts = await getAllPosts({
          search,
          page,
          per_page: perPage,
     });

     return <ModernBlogWrapper posts={posts} search={search} />;
}
