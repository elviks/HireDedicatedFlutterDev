import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Star, Users, Award, Calendar, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
     return (
          <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
               <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mx-20">
                         {/* Left Content */}
                         <div className="text-center lg:text-left">
                              <Badge
                                   variant="secondary"
                                   className="mb-6 text-base px-5 py-2 rounded-full shadow-lg animate-fade-in"
                              >
                                   Trusted by 200+ Clients Worldwide
                              </Badge>

                              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
                                   Hire Dedicated Flutter Developer in Just{" "}
                                   <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent drop-shadow">
                                        3 Days
                                   </span>
                              </h1>

                              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl lg:max-w-none">
                                   Scale your business faster by hiring dedicated
                                   Flutter developers: Rigorously vetted and minimum
                                   5,000+ hours of experience.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                   <Button
                                        size="lg"
                                        asChild
                                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-xl hover:from-indigo-600 hover:to-blue-600 transition-all px-8 py-5 text-lg font-semibold"
                                   >
                                        <Link href="#contact">
                                             Request a Free Consultation
                                        </Link>
                                   </Button>
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        asChild
                                        className="border-primary text-primary hover:bg-primary/10 shadow px-8 py-5 text-lg font-semibold"
                                   >
                                        <Link href="#pricing">View Pricing</Link>
                                   </Button>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                                   <div className="flex flex-col items-center lg:items-start">
                                        <div className="flex items-center mb-2">
                                             <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                             <span className="font-semibold">
                                                  5-Round Vetting
                                             </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                             Top 1% Flutter talent
                                        </p>
                                   </div>
                                   <div className="flex flex-col items-center lg:items-start">
                                        <div className="flex items-center mb-2">
                                             <Users className="h-5 w-5 text-blue-500 mr-2" />
                                             <span className="font-semibold">
                                                  500+ Projects
                                             </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                             Successfully delivered
                                        </p>
                                   </div>
                                   <div className="flex flex-col items-center lg:items-start">
                                        <div className="flex items-center mb-2">
                                             <Award className="h-5 w-5 text-purple-500 mr-2" />
                                             <span className="font-semibold">
                                                  7+ Years
                                             </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                             Flutter expertise
                                        </p>
                                   </div>
                                   <div className="flex flex-col items-center lg:items-start">
                                        <div className="flex items-center mb-2">
                                             <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                             <span className="font-semibold">
                                                  5-Star Rating
                                             </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                             Client satisfaction
                                        </p>
                                   </div>
                              </div>

                              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-8 text-sm md:text-base text-muted-foreground mb-8">
                                   <span>
                                        ✓ Flexible hiring: remote, full-time, or
                                        on-demand
                                   </span>
                                   <span>
                                        ✓ Transparent pricing and zero recruitment
                                        fees
                                   </span>
                                   <span>✓ Ready to start in 48 hours</span>
                              </div>
                         </div>

                         {/* Right Consultation Box */}
                         <div className="lg:flex lg:justify-end">
                              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 max-w-md w-full">
                                   <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                             <Calendar className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                             Free Consultation
                                        </h3>
                                        <p className="text-gray-600">
                                             Get your project started in 3 days
                                        </p>
                                   </div>

                                   <form className="space-y-4">
                                        <div>
                                             <Input
                                                  type="text"
                                                  placeholder="Your Name"
                                                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                             />
                                        </div>
                                        <div>
                                             <Input
                                                  type="email"
                                                  placeholder="Email Address"
                                                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                             />
                                        </div>
                                        <div>
                                             <Input
                                                  type="text"
                                                  placeholder="Company Name"
                                                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                             />
                                        </div>
                                        <div>
                                             <Textarea
                                                  placeholder="Tell us about your project..."
                                                  className="min-h-[100px] border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                                             />
                                        </div>
                                        <Button
                                             type="submit"
                                             className="w-full h-12 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all shadow-lg"
                                        >
                                             Get Free Consultation
                                        </Button>
                                   </form>

                                   <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                                             <div className="flex items-center">
                                                  <Phone className="h-4 w-4 mr-1" />
                                                  <span>24/7 Support</span>
                                             </div>
                                             <div className="flex items-center">
                                                  <Mail className="h-4 w-4 mr-1" />
                                                  <span>Response in 2h</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
