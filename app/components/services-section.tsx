import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
     Smartphone,
     Globe,
     Palette,
     RefreshCw,
     TestTube,
     Wrench,
     Database,
} from "lucide-react";

const services = [
     {
          icon: Smartphone,
          title: "Custom Mobile App Development",
          description:
               "We specialize in building custom mobile apps that cater to your specific requirements. Whether you're creating an innovative startup product or a complex enterprise solution, our Flutter developers craft high-performance, feature-rich apps designed to meet your business goals.",
     },
     {
          icon: Globe,
          title: "Cross-Platform App Development",
          description:
               "With Flutter, we deliver cross-platform apps that work seamlessly on Android, iOS, Web, and Desktop. Save time and costs with a single codebase that ensures consistency and functionality across multiple platforms, all without sacrificing performance or user experience.",
     },
     {
          icon: Palette,
          title: "Flutter UI/UX Design",
          description:
               "Our team of skilled designers creates visually stunning and intuitive UI/UX designs using Flutter's powerful toolkit. We ensure that your app isn't just functional but also offers an engaging user experience with rich animations and beautiful interfaces tailored to your brand.",
     },
     {
          icon: RefreshCw,
          title: "Flutter App Migration",
          description:
               "We help businesses migrate their existing apps to Flutter, allowing you to take advantage of its performance benefits and cross-platform capabilities. Whether you're moving from native apps or other frameworks, our developers ensure a smooth transition with minimal disruption to your users.",
     },
     {
          icon: TestTube,
          title: "App Testing and QA",
          description:
               "Our comprehensive testing and QA services ensure your Flutter app is free from bugs and performs flawlessly across all platforms. We conduct rigorous manual and automated testing to ensure the highest quality and seamless user experience, from the first interaction to the final deployment.",
     },
     {
          icon: Wrench,
          title: "Maintenance and Support",
          description:
               "App development doesn't end after launch. We offer ongoing maintenance and support to ensure your Flutter app stays up-to-date, secure, and performs optimally. Whether it's fixing bugs, adding new features, or addressing updates, we're here to keep your app running smoothly.",
     },
     {
          icon: Database,
          title: "Firebase and Backend Integration",
          description:
               "We provide Firebase integration and backend services to enhance the functionality of your Flutter app. Whether it's real-time databases, authentication, or push notifications, our experts integrate Firebase solutions for a robust, scalable backend that supports your app's growth.",
     },
];

export default function ServicesSection() {
     return (
          <section
               id="services"
               className="relative py-20 bg-white overflow-hidden"
          >
               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              Our{" "}
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Flutter App Development
                              </span>{" "}
                              Services
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              When you hire dedicated Flutter developers from
                              us, you unlock a wide range of development
                              services:
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {services.map((service, index) => (
                              <Card
                                   key={index}
                                   className="h-full border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 group"
                              >
                                   <CardHeader>
                                        <div className="flex items-start space-x-4 mb-2">
                                             <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full shadow transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse flex-shrink-0">
                                                  <service.icon className="h-7 w-7 text-primary" />
                                             </div>
                                             <div>
                                                  <h3 className="text-xl font-semibold mb-2">
                                                       {service.title}
                                                  </h3>
                                             </div>
                                        </div>
                                   </CardHeader>
                                   <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                             {service.description}
                                        </p>
                                   </CardContent>
                              </Card>
                         ))}
                    </div>
               </div>
          </section>
     );
}
