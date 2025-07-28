import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
     Smartphone,
     Zap,
     Palette,
     Gauge,
     DollarSign,
     Users,
} from "lucide-react";

const benefits = [
     {
          icon: Smartphone,
          title: "Single Codebase for Multiple Platforms",
          description:
               "Flutter allows you to develop apps for Android, iOS, Web, and Desktop using one codebase. This eliminates the need for separate development teams and ensures consistency across platforms.",
     },
     {
          icon: Zap,
          title: "Fast Development with Hot Reload",
          description:
               "Flutter's hot reload feature allows developers to instantly see changes without restarting the app, speeding up testing and debugging.",
     },
     {
          icon: Palette,
          title: "Stunning UI with Rich Widgets",
          description:
               "Flutter offers a wide range of customizable widgets and supports smooth animations, enabling developers to create attractive and user-friendly UIs.",
     },
     {
          icon: Gauge,
          title: "Native-Like Performance",
          description:
               "Flutter compiles directly to native ARM code, ensuring apps run efficiently with smooth interactions and fast load times.",
     },
     {
          icon: DollarSign,
          title: "Cost-Effective Development",
          description:
               "A single codebase reduces the need for separate Android and iOS development teams, saving both time and cost.",
     },
     {
          icon: Users,
          title: "Strong Community Support",
          description:
               "Flutter has a growing, active community, providing a wealth of libraries, tools, and continuous updates, making development more efficient.",
     },
];

export default function WhyFlutterSection() {
     return (
          <section className="relative py-20 bg-gray-50 overflow-hidden">
               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              Why Choose{" "}
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Flutter
                              </span>{" "}
                              for App Development?
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              Flutter is an open-source framework by Google that
                              enables developers to create high-performance
                              applications for multiple platforms from a single
                              codebase. Here's why it's the preferred choice:
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {benefits.map((benefit, index) => (
                              <Card
                                   key={index}
                                   className="h-full border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 group"
                              >
                                   <CardHeader>
                                        <div className="flex items-center space-x-3 mb-4">
                                             <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">
                                                  <benefit.icon className="h-7 w-7 text-primary" />
                                             </div>
                                             <h3 className="text-lg leading-tight font-semibold">
                                                  {benefit.title}
                                             </h3>
                                        </div>
                                   </CardHeader>
                                   <CardContent>
                                        <p className="text-muted-foreground">
                                             {benefit.description}
                                        </p>
                                   </CardContent>
                              </Card>
                         ))}
                    </div>
               </div>
               {/* Decorative SVG Bottom */}
               <svg
                    className="absolute bottom-0 left-0 w-full h-12 md:h-20"
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
               >
                    <path
                         fill="#fff"
                         d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
                    />
               </svg>
          </section>
     );
}
