"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
     const [consultationData, setConsultationData] = useState({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectDetails: "",
     });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
     const { toast } = useToast();

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setConsultationData(prev => ({ ...prev, [name]: value }));
     };

     const handleConsultationSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          
          if (!consultationData.name || !consultationData.email || !consultationData.projectDetails) {
               toast({
                    title: "Validation Error",
                    description: "Please fill in all required fields.",
                    variant: "destructive",
               });
               return;
          }

          setIsSubmitting(true);
          setSubmitStatus("idle");

          try {
               const response = await fetch("/api/consultation", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(consultationData),
               });

               const result = await response.json();

               if (response.ok) {
                    setSubmitStatus("success");
                    setConsultationData({ name: "", email: "", phone: "", company: "", projectDetails: "" });
                    toast({
                         title: "Consultation Requested!",
                         description: "We'll schedule a consultation call within 48 hours.",
                    });
               } else {
                    setSubmitStatus("error");
                    toast({
                         title: "Error",
                         description: result.error || "Failed to submit request. Please try again.",
                         variant: "destructive",
                    });
               }
          } catch (error) {
               setSubmitStatus("error");
               toast({
                    title: "Error",
                    description: "Network error. Please check your connection and try again.",
                    variant: "destructive",
               });
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
               </div>

               <div className="container px-4 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         {/* Left Content */}
                         <div className="text-center lg:text-left">
                              <div className="mb-6">
                                   <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0 px-4 py-2 text-sm font-medium">
                                        🚀 Ready to Start in 48 Hours
                                   </Badge>
                              </div>

                              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                   Hire Expert{" "}
                                   <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                        Flutter Developers
                                   </span>{" "}
                                   for Your Project
                              </h1>

                              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                                   Get world-class Flutter development expertise with our pre-vetted developers. 
                                   Scale your team instantly with zero recruitment fees and guaranteed quality.
                              </p>

                              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 max-w-lg mx-auto lg:mx-0">
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

                                   <form onSubmit={handleConsultationSubmit} className="space-y-4">
                                        <div>
                                             <Input
                                                  name="name"
                                                  value={consultationData.name}
                                                  onChange={handleInputChange}
                                                  type="text"
                                                  placeholder="Your Name *"
                                                  required
                                                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                             />
                                        </div>
                                        <div>
                                             <Input
                                                  name="email"
                                                  value={consultationData.email}
                                                  onChange={handleInputChange}
                                                  type="email"
                                                  placeholder="Email Address *"
                                                  required
                                                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                             />
                                        </div>
                                        <div>
                                             <Input
                                                  name="phone"
                                                  value={consultationData.phone}
                                                  onChange={handleInputChange}
                                                  type="tel"
                                                  placeholder="Phone Number"
                                                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                             />
                                        </div>
                                        <div>
                                             <Input
                                                  name="company"
                                                  value={consultationData.company}
                                                  onChange={handleInputChange}
                                                  type="text"
                                                  placeholder="Company Name"
                                                  className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                             />
                                        </div>
                                        <div>
                                             <Textarea
                                                  name="projectDetails"
                                                  value={consultationData.projectDetails}
                                                  onChange={handleInputChange}
                                                  placeholder="Tell us about your project... *"
                                                  required
                                                  className="min-h-[100px] border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                                             />
                                        </div>

                                        {/* Status Messages */}
                                        {submitStatus === "success" && (
                                             <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                                                  <CheckCircle className="h-5 w-5" />
                                                  <span className="text-sm font-medium">Request submitted successfully!</span>
                                             </div>
                                        )}
                                        
                                        {submitStatus === "error" && (
                                             <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                                                  <AlertCircle className="h-5 w-5" />
                                                  <span className="text-sm font-medium">Failed to submit request. Please try again.</span>
                                             </div>
                                        )}

                                        <Button
                                             type="submit"
                                             disabled={isSubmitting}
                                             className="w-full h-12 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                             {isSubmitting ? "Submitting..." : "Get Free Consultation"}
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
