import type { Metadata } from "next";

export const metadata: Metadata = {
     title: "Blog | Expert Flutter Development Insights",
     description:
          "Latest articles, insights, and tutorials about Flutter development, Dart best practices, and modern cross-platform app development from our expert team.",
     keywords: [
          "Flutter blog",
          "Dart tutorials",
          "mobile development articles",
          "Flutter insights",
          "development best practices",
          "app development tutorials",
          "tech blog",
          "cross-platform programming",
     ],
     openGraph: {
          title: "Blog | Expert Flutter Development Insights",
          description:
               "Latest articles, insights, and tutorials about Flutter development, Dart best practices, and modern cross-platform app development from our expert team.",
          url: "https://www.hireflutterdeveloper.dev/blog",
          siteName: "Hire Flutter Developers",
          images: [
               {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Flutter Development Blog - Expert Insights",
               },
          ],
          locale: "en_US",
          type: "website",
     },
     twitter: {
          card: "summary_large_image",
          title: "Blog | Flutter Development Insights",
          description:
               "Latest articles and tutorials about Flutter development and modern app development practices.",
          images: ["/og-image.png"],
     },
     alternates: {
          canonical: "https://www.hireflutterdeveloper.dev/blog",
     },
};

export default function BlogLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return children;
}
