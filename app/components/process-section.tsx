import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
     Search,
     Users,
     UserCheck,
     Rocket,
     Handshake,
     HeadphonesIcon,
     Lightbulb, // Experience & Expertise
     FolderOpen, // Portfolio & Past Projects
     MessageSquare, // Communication Skills
     ClipboardList, // Project Management
     HeartHandshake, // Post-Launch Support
     DollarSign, // Cost & Budget
     User, // Experience Level
     Layers, // Project Complexity
     Globe, // Location
     Clock, // Engagement Model
} from "lucide-react";

const processSteps = [
     {
          icon: Search,
          title: "Discovery",
          description:
               "Share your project requirements, goals, and timeline with us.",
          step: 1,
     },
     {
          icon: Users,
          title: "Talent Match",
          description:
               "We match you with top Flutter developers based on your needs. You'll receive profiles showcasing their skills and experience.",
          step: 2,
     },
     {
          icon: MessageSquare,
          title: "Interview",
          description:
               "Conduct interviews to evaluate technical skills, communication, and team compatibility.",
          step: 3,
     },
     {
          icon: UserCheck,
          title: "Selection",
          description:
               "Choose the developer who best fits your project and team dynamics.",
          step: 4,
     },
     {
          icon: Rocket,
          title: "Onboard",
          description:
               "Fast onboarding within 48 hours, ensuring a smooth start.",
          step: 5,
     },
     {
          icon: Handshake,
          title: "Collaboration",
          description:
               "Begin collaborating with your developer right away for quick progress.",
          step: 6,
     },
     {
          icon: HeadphonesIcon,
          title: "Continuous Support",
          description:
               "Receive ongoing support and updates throughout the project.",
          step: 7,
     },
];

const hiringConsiderations = [
     {
          title: "Experience & Expertise",
          points: [
               "Flutter & Dart Proficiency: Ensure the developer is highly skilled in Flutter and Dart",
               "Cross-Platform Development: Experience building apps for multiple platforms using a single codebase",
               "Advanced Skills: Experience in implementing complex features such as animations, third-party integrations, and custom UI/UX design",
          ],
     },
     {
          title: "Portfolio & Past Projects",
          points: [
               "Review Previous Work: Look for a developer with a solid portfolio that demonstrates their ability to handle projects similar to yours",
               "Case Studies: Check for detailed case studies that show how they approached and solved technical challenges",
               "Relevant Experience: Make sure their past projects align with the type of app you want to build",
          ],
     },
     {
          title: "Communication Skills",
          points: [
               "Clarity and Transparency: A developer who communicates effectively is crucial for project success",
               "Responsiveness: Ensure the developer responds quickly to your inquiries and provides regular updates",
               "Language & Time Zone Compatibility: Check that the developer is comfortable with necessary communication tools",
          ],
     },
     {
          title: "Project Management",
          points: [
               "Task Management Tools: Choose a developer who uses reliable project management tools (like Jira, Trello, or Asana)",
               "Timely Updates: Ensure the developer provides regular progress reports and milestone updates",
               "Delivery Timelines: Confirm that the developer can meet your deadlines and has a structured plan",
          ],
     },
     {
          title: "Post-Launch Support",
          points: [
               "Ongoing Maintenance: Verify whether the developer offers post-launch services like bug fixes, app updates, and security patches",
               "Long-Term Support: If your app needs long-term monitoring or adjustments, ensure the developer can provide continuous support",
               "Scaling: Confirm that the developer has experience in scaling apps if the user base grows",
          ],
     },
     {
          title: "Cost & Budget",
          points: [
               "Transparent Pricing: Ensure the developer provides clear pricing that includes all phases of development",
               "Budget Alignment: Align the developer's rates with your project's budget",
               "Engagement Model: Choose the right pricing model hourly, part-time, or full-time based on the scope and duration",
          ],
     },
];

const considerationIcons = [
     Lightbulb, // Experience & Expertise
     FolderOpen, // Portfolio & Past Projects
     MessageSquare, // Communication Skills
     ClipboardList, // Project Management
     HeartHandshake, // Post-Launch Support
     DollarSign, // Cost & Budget
];

export default function ProcessSection() {
     return (
          <section className="relative py-20 bg-white overflow-hidden">
               <div className="container px-4 mx-auto relative z-10">
                    {/* Engagement Process */}
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Let's Get Started: Our Engagement Process
                              </span>
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              Hiring a dedicated Flutter developer from HFD is a
                              smooth, efficient, and straightforward process
                              designed to get your project off the ground
                              quickly.
                         </p>
                    </div>

                    {/* Animated Timeline */}
                    <div className="relative mb-20">
                         {/* Timeline line for large screens */}

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {processSteps.map((step, index) => (
                                   <Card
                                        key={index}
                                        className={`relative text-center border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 group`}
                                   >
                                        <CardHeader>
                                             <Badge
                                                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow"
                                                  style={{ zIndex: 2 }}
                                             >
                                                  Step {step.step}
                                             </Badge>
                                             <div className="mx-auto p-4 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mt-4 shadow group-hover:scale-110 transition-transform">
                                                  <step.icon className="h-8 w-8 text-primary" />
                                             </div>
                                             <h3 className="text-lg font-semibold">
                                                  {step.title}
                                             </h3>
                                        </CardHeader>
                                        <CardContent>
                                             <p className="text-muted-foreground text-sm">
                                                  {step.description}
                                             </p>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>

                    {/* Hiring Considerations */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl mb-16">
                         <div className="text-center mb-12">
                              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                   Things to Consider While Hiring Flutter App
                                   Developers
                              </h3>
                              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                   When hiring a dedicated Flutter app
                                   developer, it's important to consider various
                                   factors that can impact the quality of your
                                   project, the timeline, and the overall cost.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {hiringConsiderations.map(
                                   (consideration, index) => {
                                        const Icon =
                                             considerationIcons[index] ||
                                             Lightbulb;
                                        return (
                                             <div
                                                  key={index}
                                                  className="h-full border-0 shadow-md bg-white/90 rounded-xl p-6 flex flex-col"
                                             >
                                                  <div className="flex items-center mb-4">
                                                       <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow mr-3">
                                                            <Icon className="h-7 w-7 text-primary" />
                                                       </div>
                                                       <h4 className="text-xl text-primary font-semibold">
                                                            {
                                                                 consideration.title
                                                            }
                                                       </h4>
                                                  </div>
                                                  <ul className="space-y-3 pl-2">
                                                       {consideration.points.map(
                                                            (
                                                                 point,
                                                                 pointIndex
                                                            ) => (
                                                                 <li
                                                                      key={
                                                                           pointIndex
                                                                      }
                                                                      className="text-sm flex items-start"
                                                                 >
                                                                      <span className="mr-2 mt-1 text-indigo-400">
                                                                           •
                                                                      </span>
                                                                      <span>
                                                                           <strong className="text-foreground">
                                                                                {
                                                                                     point.split(
                                                                                          ":"
                                                                                     )[0]
                                                                                }

                                                                                :
                                                                           </strong>
                                                                           <span className="text-muted-foreground">
                                                                                {point
                                                                                     .split(
                                                                                          ":"
                                                                                     )
                                                                                     .slice(
                                                                                          1
                                                                                     )
                                                                                     .join(
                                                                                          ":"
                                                                                     )}
                                                                           </span>
                                                                      </span>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             </div>
                                        );
                                   }
                              )}
                         </div>
                    </div>

                    {/* Cost Factors */}
                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl">
                         <div className="text-center mb-12">
                              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                   Cost of Hiring Dedicated Flutter Expert
                              </h3>
                              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                   Several factors influence the overall cost,
                                   including the experience level of the
                                   developer, the complexity of the project,
                                   their geographical location, and the type of
                                   engagement model.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {/* Experience Level */}
                              <div className="bg-white/90 rounded-xl shadow-md border-t-4 border-indigo-300 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                   <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow mb-4">
                                        <User className="h-7 w-7 text-primary" />
                                   </div>
                                   <h4 className="text-lg font-semibold mb-3">
                                        Experience Level
                                   </h4>
                                   <div className="text-sm mb-1">
                                        <strong>Junior:</strong> Entry-level,
                                        more affordable
                                   </div>
                                   <div className="text-sm mb-1">
                                        <strong>Mid-Level:</strong> Solid
                                        expertise, reasonable pricing
                                   </div>
                                   <div className="text-sm">
                                        <strong>Senior:</strong> High rates for
                                        advanced skills
                                   </div>
                              </div>
                              {/* Project Complexity */}
                              <div className="bg-white/90 rounded-xl shadow-md border-t-4 border-blue-300 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                   <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full shadow mb-4">
                                        <Layers className="h-7 w-7 text-primary" />
                                   </div>
                                   <h4 className="text-lg font-semibold mb-3">
                                        Project Complexity
                                   </h4>
                                   <div className="text-sm mb-1">
                                        <strong>Custom Features:</strong>{" "}
                                        Specialized needs increase costs
                                   </div>
                                   <div className="text-sm mb-1">
                                        <strong>Scalability:</strong> Large user
                                        bases require more resources
                                   </div>
                                   <div className="text-sm">
                                        <strong>Design:</strong> Custom UI/UX
                                        requires more expertise
                                   </div>
                              </div>
                              {/* Location */}
                              <div className="bg-white/90 rounded-xl shadow-md border-t-4 border-purple-300 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                   <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full shadow mb-4">
                                        <Globe className="h-7 w-7 text-primary" />
                                   </div>
                                   <h4 className="text-lg font-semibold mb-3">
                                        Location
                                   </h4>
                                   <div className="text-sm mb-1">
                                        <strong>North America/Europe:</strong>{" "}
                                        Higher rates
                                   </div>
                                   <div className="text-sm">
                                        <strong>Eastern Europe & Asia:</strong>{" "}
                                        More affordable rates
                                   </div>
                              </div>
                              {/* Engagement Model */}
                              <div className="bg-white/90 rounded-xl shadow-md border-t-4 border-cyan-300 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
                                   <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full shadow mb-4">
                                        <Clock className="h-7 w-7 text-primary" />
                                   </div>
                                   <h4 className="text-lg font-semibold mb-3">
                                        Engagement Model
                                   </h4>
                                   <div className="text-sm mb-1">
                                        <strong>Hourly:</strong> Best for
                                        short-term tasks
                                   </div>
                                   <div className="text-sm mb-1">
                                        <strong>Part-Time:</strong> Fixed hours
                                        per week
                                   </div>
                                   <div className="text-sm">
                                        <strong>Full-Time:</strong> 40
                                        hours/week, dedicated attention
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
