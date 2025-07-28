import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
     Shield,
     Users,
     Zap,
     MessageSquare,
     Lock,
     Layers,
     Scale,
     Target,
     Clock,
} from "lucide-react";

const features = [
     {
          icon: Shield,
          title: "Vetted Developers",
          description:
               "Our developers are handpicked based on their coding skills, experience, and reliability.",
     },
     {
          icon: Users,
          title: "Thorough Selection Process",
          description:
               "We ensure only top-tier developers are assigned to your project through a rigorous vetting process.",
     },
     {
          icon: Layers,
          title: "Flexible Engagement Models",
          description:
               "Hire part-time, full-time, or hourly based on your project scope, with the option to scale as needed.",
     },
     {
          icon: Zap,
          title: "Fast Onboarding",
          description:
               "Developers are ready to start in 48 hours or less to keep your project moving without delays.",
     },
     {
          icon: MessageSquare,
          title: "Clear Communication",
          description:
               "Stay updated with regular progress reports, daily standups, and a dedicated project manager.",
     },
     {
          icon: Lock,
          title: "IP Protection",
          description:
               "Your intellectual property is safe. We sign NDAs, ensuring complete ownership of your project and its assets.",
     },
     {
          icon: Scale,
          title: "Scalable Resources",
          description:
               "Adjust team size and expertise as your project evolves, ensuring flexibility without overcommitting.",
     },
     {
          icon: Target,
          title: "Effective Project Management",
          description:
               "A dedicated project manager ensures smooth development, timely updates, and efficient milestone tracking.",
     },
     {
          icon: Clock,
          title: "Quality Delivery",
          description:
               "We focus on delivering high-quality Flutter apps that align with your business goals.",
     },
];

export default function WhyHireSection() {
     return (
          <section
               id="why-hire"
               className="relative py-20 bg-white overflow-hidden"
          >
               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              Why Hire Flutter Developers from{" "}
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   HFD?
                              </span>
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              At HFD, we deliver tailored solutions to make your
                              app development smooth, efficient, and
                              high-quality. Here's what sets our team apart:
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {features.map((feature, index) => (
                              <Card
                                   key={index}
                                   className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90"
                              >
                                   <CardHeader>
                                        <div className="flex items-center space-x-3">
                                             <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow">
                                                  <feature.icon className="h-7 w-7 text-primary" />
                                             </div>
                                             <h3 className="text-lg font-semibold">
                                                  {feature.title}
                                             </h3>
                                        </div>
                                   </CardHeader>
                                   <CardContent>
                                        <p className="text-muted-foreground">
                                             {feature.description}
                                        </p>
                                   </CardContent>
                              </Card>
                         ))}
                    </div>

                    <div className="relative mt-16">
                         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl relative z-10">
                              <h3 className="text-2xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Why Hire a Dedicated Flutter Developer?
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                   {/* Card 1 */}
                                   <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow">
                                             {/* Icon: Control (Target) */}
                                             <svg
                                                  className="h-7 w-7 text-primary"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <circle
                                                       cx="12"
                                                       cy="12"
                                                       r="10"
                                                  />
                                                  <circle
                                                       cx="12"
                                                       cy="12"
                                                       r="4"
                                                  />
                                                  <line
                                                       x1="12"
                                                       y1="2"
                                                       x2="12"
                                                       y2="6"
                                                  />
                                                  <line
                                                       x1="12"
                                                       y1="18"
                                                       x2="12"
                                                       y2="22"
                                                  />
                                                  <line
                                                       x1="2"
                                                       y1="12"
                                                       x2="6"
                                                       y2="12"
                                                  />
                                                  <line
                                                       x1="18"
                                                       y1="12"
                                                       x2="22"
                                                       y2="12"
                                                  />
                                             </svg>
                                        </div>
                                        <h4 className="font-semibold mb-2">
                                             Full Control Over Development
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                             You make key decisions and shape
                                             the direction of the project.
                                        </p>
                                   </div>
                                   {/* Card 2 */}
                                   <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow">
                                             {/* Icon: Fast (Zap) */}
                                             <svg
                                                  className="h-7 w-7 text-primary"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <polygon points="13 2 2 14 12 14 11 22 22 10 12 10 13 2" />
                                             </svg>
                                        </div>
                                        <h4 className="font-semibold mb-2">
                                             Faster Development Cycles
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                             With no distractions, your
                                             developer delivers updates and
                                             features quickly.
                                        </p>
                                   </div>
                                   {/* Card 3 */}
                                   <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow">
                                             {/* Icon: Productivity (Gauge) */}
                                             <svg
                                                  className="h-7 w-7 text-primary"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path d="M12 21a9 9 0 1 1 9-9" />
                                                  <path d="M12 3v9l6 3" />
                                             </svg>
                                        </div>
                                        <h4 className="font-semibold mb-2">
                                             Higher Productivity
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                             The developer's sole focus is on
                                             your project, leading to better
                                             output.
                                        </p>
                                   </div>
                                   {/* Card 4 */}
                                   <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow">
                                             {/* Icon: Collaboration (Users) */}
                                             <svg
                                                  className="h-7 w-7 text-primary"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                                                  <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                                                  <circle
                                                       cx="12"
                                                       cy="7"
                                                       r="4"
                                                  />
                                             </svg>
                                        </div>
                                        <h4 className="font-semibold mb-2">
                                             Seamless Collaboration
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                             Direct communication ensures a
                                             smoother workflow and fewer
                                             misunderstandings.
                                        </p>
                                   </div>
                                   {/* Card 5 */}
                                   <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow">
                                             {/* Icon: Quality (Star) */}
                                             <svg
                                                  className="h-7 w-7 text-primary"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
                                             </svg>
                                        </div>
                                        <h4 className="font-semibold mb-2">
                                             Consistent Quality
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                             A dedicated developer maintains
                                             high standards without shifting
                                             focus.
                                        </p>
                                   </div>
                                   {/* Card 6 */}
                                   <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow">
                                             {/* Icon: Partnership (Handshake/Heart) */}
                                             <svg
                                                  className="h-7 w-7 text-primary"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path d="M12 21C12 21 7 16.5 7 12.5C7 9.5 9.5 7 12 7C14.5 7 17 9.5 17 12.5C17 16.5 12 21 12 21Z" />
                                             </svg>
                                        </div>
                                        <h4 className="font-semibold mb-2">
                                             Long-Term Partnership
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                             Building a lasting relationship for
                                             future updates and enhancements.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
