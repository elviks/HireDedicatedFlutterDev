import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
     Rocket,
     ShoppingCart,
     Heart,
     Home,
     GraduationCap,
     Plane,
     DollarSign,
     Truck,
     Users,
     Award,
     CheckCircle,
} from "lucide-react";

const industries = [
     {
          icon: Rocket,
          title: "Startups & MVP Builders",
          description:
               "We help startups rapidly develop Minimum Viable Products (MVPs) that are scalable and adaptable for future growth, allowing quick market entry and iteration based on user feedback.",
          color: "from-orange-100 to-red-100",
          iconColor: "text-orange-600",
          projects: "150+",
     },
     {
          icon: ShoppingCart,
          title: "E-commerce & Retail",
          description:
               "We build mobile apps that enhance the user shopping experience, streamline transactions, integrate secure payment systems, and support business growth through scalable solutions.",
          color: "from-green-100 to-emerald-100",
          iconColor: "text-green-600",
          projects: "200+",
     },
     {
          icon: Heart,
          title: "Healthcare & Telemedicine",
          description:
               "We develop HIPAA-compliant healthcare and telemedicine apps, ensuring high levels of security and privacy while providing seamless user experiences that improve patient care.",
          color: "from-pink-100 to-rose-100",
          iconColor: "text-pink-600",
          projects: "80+",
     },
     {
          icon: Home,
          title: "Real Estate",
          description:
               "Our solutions include property listing apps, virtual tours, and client management tools that simplify the property search and transaction process, improving efficiency for agents and clients.",
          color: "from-blue-100 to-cyan-100",
          iconColor: "text-blue-600",
          projects: "120+",
     },
     {
          icon: GraduationCap,
          title: "EdTech & eLearning",
          description:
               "We design and develop learning management systems (LMS) and mobile apps that provide an interactive, engaging, and effective learning environment, enhancing the educational experience.",
          color: "from-purple-100 to-violet-100",
          iconColor: "text-purple-600",
          projects: "90+",
     },
     {
          icon: Plane,
          title: "Travel & Hospitality",
          description:
               "We create custom apps for travel agencies, hotels, and airlines, improving customer service, simplifying bookings, and offering personalized experiences that enhance client satisfaction.",
          color: "from-sky-100 to-blue-100",
          iconColor: "text-sky-600",
          projects: "70+",
     },
     {
          icon: DollarSign,
          title: "FinTech & Banking",
          description:
               "We build secure mobile apps for banking, payment processing, and investment management, ensuring compliance with financial regulations and offering seamless, high-performance experiences.",
          color: "from-yellow-100 to-amber-100",
          iconColor: "text-yellow-600",
          projects: "60+",
     },
     {
          icon: Truck,
          title: "On-Demand Services",
          description:
               "We develop scalable apps for industries like food delivery, ride-sharing, and home services, improving real-time service delivery, enhancing user engagement, and optimizing operational efficiency.",
          color: "from-indigo-100 to-blue-100",
          iconColor: "text-indigo-600",
          projects: "110+",
     },
];

const stats = [
     { icon: Users, value: "500+", label: "Happy Clients" },
     { icon: Award, value: "880+", label: "Projects Delivered" },
     { icon: CheckCircle, value: "98%", label: "Success Rate" },
];

export default function IndustriesSection() {
     return (
          <section className="relative py-20 bg-white overflow-hidden">
               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              Industries{" "}
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   We Serve
                              </span>
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                              At HFD, we specialize in providing Flutter
                              development solutions for a range of industries,
                              creating apps that are efficient, user-friendly,
                              and perfectly aligned with business goals.
                         </p>

                         {/* Stats Section */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                              {stats.map((stat, index) => (
                                   <div
                                        key={index}
                                        className="flex flex-col items-center"
                                   >
                                        <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full mb-3">
                                             <stat.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 mb-1">
                                             {stat.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                             {stat.label}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                         {industries.map((industry, index) => (
                              <Card
                                   key={index}
                                   className="h-full border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 group cursor-pointer"
                              >
                                   <CardHeader className="text-center pb-4">
                                        <div
                                             className={`mx-auto p-4 bg-gradient-to-br ${industry.color} rounded-full w-16 h-16 flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}
                                        >
                                             <industry.icon
                                                  className={`h-8 w-8 ${industry.iconColor}`}
                                             />
                                        </div>
                                        <CardTitle className="text-lg font-semibold leading-tight mb-2">
                                             {industry.title}
                                        </CardTitle>
                                        <div className="text-sm font-bold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block">
                                             {industry.projects} Projects
                                        </div>
                                   </CardHeader>
                                   <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                             {industry.description}
                                        </p>
                                   </CardContent>
                              </Card>
                         ))}
                    </div>

                    <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
                         {/* Decorative pattern */}
                         <div className="absolute inset-0 opacity-5">
                              <svg
                                   className="w-full h-full"
                                   viewBox="0 0 100 100"
                                   fill="none"
                              >
                                   <defs>
                                        <pattern
                                             id="grid"
                                             width="10"
                                             height="10"
                                             patternUnits="userSpaceOnUse"
                                        >
                                             <path
                                                  d="M 10 0 L 0 0 0 10"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="0.5"
                                             />
                                        </pattern>
                                   </defs>
                                   <rect
                                        width="100"
                                        height="100"
                                        fill="url(#grid)"
                                   />
                              </svg>
                         </div>
                         <div className="relative z-10">
                              <h3 className="text-2xl font-bold mb-4">
                                   Don't See Your Industry?
                              </h3>
                              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                   We work with businesses across all sectors
                                   and have the expertise to understand your
                                   unique requirements and deliver tailored
                                   solutions that drive growth.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                   <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all px-8 py-4 text-lg font-semibold"
                                   >
                                        Discuss Your Project
                                   </Button>
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold"
                                   >
                                        View Portfolio
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
