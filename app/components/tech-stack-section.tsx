import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
     Cpu,
     Server,
     Workflow,
     GitMerge,
     Database,
     Hammer,
     Gauge,
     Layers,
     ShieldCheck,
} from "lucide-react";

const technologies = [
     {
          icon: Cpu,
          category: "Core Technologies",
          items: [
               {
                    name: "Dart Language",
                    description:
                         "Fast, native performance with single codebase",
               },
               {
                    name: "Flutter SDK",
                    description:
                         "Rich widgets and hot reload for faster development",
               },
          ],
     },
     {
          icon: Server,
          category: "Backend & APIs",
          items: [
               {
                    name: "Firebase & Supabase",
                    description:
                         "Real-time data, authentication, cloud storage",
               },
               {
                    name: "REST & GraphQL APIs",
                    description: "Efficient data exchange and communication",
               },
          ],
     },
     {
          icon: Workflow,
          category: "State Management",
          items: [
               {
                    name: "BLoC, Provider, Riverpod, GetX",
                    description: "Scalable and maintainable state management",
               },
          ],
     },
     {
          icon: GitMerge,
          category: "CI/CD & DevOps",
          items: [
               {
                    name: "GitHub Actions, Codemagic, Bitrise",
                    description: "Automated deployment and testing",
               },
          ],
     },
     {
          icon: Database,
          category: "Databases",
          items: [
               {
                    name: "SQLite, Hive, PostgreSQL",
                    description: "Lightweight offline and robust backend data",
               },
          ],
     },
     {
          icon: Hammer,
          category: "Development Tools",
          items: [
               {
                    name: "Figma, Jira, Git, VS Code",
                    description: "Design, project management, and development",
               },
          ],
     },
];

const whyItMatters = [
     {
          icon: Gauge,
          title: "Performance",
          description: "Native-like performance across all platforms",
     },
     {
          icon: Layers,
          title: "Scalability",
          description: "Built to handle growth and increasing demands",
     },
     {
          icon: ShieldCheck,
          title: "Reliability",
          description: "Proven technologies trusted by industry leaders",
     },
];

export default function TechStackSection() {
     return (
          <section
               id="tech-stack"
               className="relative py-20 bg-white overflow-hidden"
          >
               <div className="absolute inset-0 bg-[url('/path-to-your-tech-bg.svg')] bg-repeat opacity-5"></div>
               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              Our{" "}
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Technology Stack
                              </span>
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              We empower our Flutter developers with the best
                              tools and technologies to deliver high-quality,
                              high-performance apps.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {technologies.map((tech, index) => (
                              <Card
                                   key={index}
                                   className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 group"
                              >
                                   <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow transition-transform duration-300 group-hover:scale-110">
                                             <tech.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">
                                             {tech.category}
                                        </h3>
                                   </CardHeader>
                                   <CardContent className="space-y-4 pt-0">
                                        {tech.items.map((item, itemIndex) => (
                                             <div
                                                  key={itemIndex}
                                                  className="border-l-2 border-primary/20 pl-4 py-1"
                                             >
                                                  <h4 className="font-semibold text-gray-700 mb-0.5">
                                                       {item.name}
                                                  </h4>
                                                  <p className="text-sm text-muted-foreground">
                                                       {item.description}
                                                  </p>
                                             </div>
                                        ))}
                                   </CardContent>
                              </Card>
                         ))}
                    </div>

                    <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl">
                         <div className="text-center">
                              <h3 className="text-2xl font-bold mb-8">
                                   Why Our Tech Stack Matters
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                   {whyItMatters.map((item, index) => (
                                        <div
                                             key={index}
                                             className="flex flex-col items-center text-center"
                                        >
                                             <div className="p-4 bg-white rounded-full shadow-md mb-4">
                                                  <item.icon className="h-8 w-8 text-primary" />
                                             </div>
                                             <h4 className="font-semibold text-lg mb-2">
                                                  {item.title}
                                             </h4>
                                             <p className="text-sm text-muted-foreground">
                                                  {item.description}
                                             </p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
