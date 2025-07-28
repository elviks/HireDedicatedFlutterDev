import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
     return (
          <section
               id="contact"
               className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden"
          >
               <div className="container px-4 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
                              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                   <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                        Get Started Now
                                   </span>
                              </h2>
                              <p className="text-xl text-muted-foreground mb-8">
                                   Ready to build your next mobile app with
                                   confidence? Hire a dedicated Flutter
                                   developer today and launch faster, smarter,
                                   and with peace of mind.
                              </p>

                              <div className="space-y-6">
                                   <div className="flex items-center space-x-4">
                                        <div className="bg-primary/10 p-3 rounded-full animate-bounce-slow">
                                             <ArrowRight className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                             <h3 className="font-semibold text-lg">
                                                  Request a Free Quote
                                             </h3>
                                             <p className="text-muted-foreground">
                                                  Get a detailed estimate for
                                                  your project
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex items-center space-x-4">
                                        <div className="bg-primary/10 p-3 rounded-full animate-bounce-slow delay-150">
                                             <ArrowRight className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                             <h3 className="font-semibold text-lg">
                                                  Book a 30-minute Consultation
                                             </h3>
                                             <p className="text-muted-foreground">
                                                  Discuss your project with our
                                                  experts
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex items-center space-x-4">
                                        <div className="bg-primary/10 p-3 rounded-full animate-bounce-slow delay-300">
                                             <ArrowRight className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                             <h3 className="font-semibold text-lg">
                                                  Start Your Project in 48 Hours
                                             </h3>
                                             <p className="text-muted-foreground">
                                                  Quick onboarding and immediate
                                                  progress
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <Card className="shadow-2xl bg-white/70 backdrop-blur-lg border-0 rounded-2xl">
                              <CardHeader>
                                   <CardTitle className="text-2xl font-bold text-center">
                                        Request a Free Consultation
                                   </CardTitle>
                              </CardHeader>
                              <CardContent>
                                   <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                             <div className="space-y-2">
                                                  <label
                                                       htmlFor="name"
                                                       className="text-sm font-medium"
                                                  >
                                                       Full Name
                                                  </label>
                                                  <Input
                                                       id="name"
                                                       placeholder="John Doe"
                                                       required
                                                       className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                                  />
                                             </div>
                                             <div className="space-y-2">
                                                  <label
                                                       htmlFor="email"
                                                       className="text-sm font-medium"
                                                  >
                                                       Email Address
                                                  </label>
                                                  <Input
                                                       id="email"
                                                       type="email"
                                                       placeholder="john@example.com"
                                                       required
                                                       className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                                  />
                                             </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                             <div className="space-y-2">
                                                  <label
                                                       htmlFor="phone"
                                                       className="text-sm font-medium"
                                                  >
                                                       Phone Number
                                                  </label>
                                                  <Input
                                                       id="phone"
                                                       placeholder="+1 (555) 000-0000"
                                                       className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                                  />
                                             </div>
                                             <div className="space-y-2">
                                                  <label
                                                       htmlFor="company"
                                                       className="text-sm font-medium"
                                                  >
                                                       Company Name
                                                  </label>
                                                  <Input
                                                       id="company"
                                                       placeholder="Your Company"
                                                       className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                                  />
                                             </div>
                                        </div>

                                        <div className="space-y-2">
                                             <label
                                                  htmlFor="project"
                                                  className="text-sm font-medium"
                                             >
                                                  Project Details
                                             </label>
                                             <Textarea
                                                  id="project"
                                                  placeholder="Tell us about your project requirements, timeline, and goals"
                                                  rows={4}
                                                  required
                                                  className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                             />
                                        </div>

                                        <Button
                                             type="submit"
                                             className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all font-bold text-lg py-6"
                                        >
                                             Submit Request
                                        </Button>

                                        <p className="text-xs text-center text-muted-foreground">
                                             By submitting this form, you agree
                                             to our privacy policy and terms of
                                             service.
                                        </p>
                                   </form>
                              </CardContent>
                         </Card>
                    </div>
               </div>
          </section>
     );
}
