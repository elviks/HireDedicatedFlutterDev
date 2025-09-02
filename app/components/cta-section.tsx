"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
     const [ctaData, setCtaData] = useState({
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
          setCtaData(prev => ({ ...prev, [name]: value }));
     };

     const handleCtaSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          
          if (!ctaData.name || !ctaData.email || !ctaData.projectDetails) {
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
               const response = await fetch("/api/cta-request", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(ctaData),
               });

               const result = await response.json();

               if (response.ok) {
                    setSubmitStatus("success");
                    setCtaData({ name: "", email: "", phone: "", company: "", projectDetails: "" });
                    toast({
                         title: "Request Submitted!",
                         description: "We'll review your project and get back to you within 24 hours.",
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
          <section id="cta" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-blue-900/20 opacity-20"></div>
               </div>

               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                              Ready to Build Your{" "}
                              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                   Flutter App?
                              </span>
                         </h2>
                         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                              Get started with a free consultation. Our team will analyze your requirements 
                              and provide a detailed proposal within 24 hours.
                         </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                         <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
                              <CardHeader className="text-center">
                                   <CardTitle className="text-3xl font-bold text-white">
                                        Start Your Project Today
                                   </CardTitle>
                                   <CardDescription className="text-gray-300 text-lg">
                                        Fill out the form below and we'll get back to you with a custom solution
                                   </CardDescription>
                              </CardHeader>
                              <CardContent>
                                   <form onSubmit={handleCtaSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                             <div className="space-y-2">
                                                  <label
                                                       htmlFor="name"
                                                       className="text-sm font-medium text-white"
                                                  >
                                                       Full Name *
                                                  </label>
                                                  <Input
                                                       id="name"
                                                       name="name"
                                                       value={ctaData.name}
                                                       onChange={handleInputChange}
                                                       placeholder="John Doe"
                                                       required
                                                       className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                                  />
                                             </div>
                                             <div className="space-y-2">
                                                  <label
                                                       htmlFor="email"
                                                       className="text-sm font-medium text-white"
                                                  >
                                                       Email Address *
                                                  </label>
                                                  <Input
                                                       id="email"
                                                       name="email"
                                                       value={ctaData.email}
                                                       onChange={handleInputChange}
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
                                                       className="text-sm font-medium text-white"
                                                  >
                                                       Phone Number
                                                  </label>
                                                  <Input
                                                       id="phone"
                                                       name="phone"
                                                       value={ctaData.phone}
                                                       onChange={handleInputChange}
                                                       placeholder="+1 (555) 000-0000"
                                                       className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                                  />
                                             </div>
                                             <div className="space-y-2">
                                                  <label
                                                       htmlFor="company"
                                                       className="text-sm font-medium text-white"
                                                  >
                                                       Company Name
                                                  </label>
                                                  <Input
                                                       id="company"
                                                       name="company"
                                                       value={ctaData.company}
                                                       onChange={handleInputChange}
                                                       placeholder="Your Company"
                                                       className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                                  />
                                             </div>
                                        </div>

                                        <div className="space-y-2">
                                             <label
                                                  htmlFor="project"
                                                  className="text-sm font-medium text-white"
                                             >
                                                  Project Details *
                                             </label>
                                             <Textarea
                                                  id="project"
                                                  name="projectDetails"
                                                  value={ctaData.projectDetails}
                                                  onChange={handleInputChange}
                                                  placeholder="Tell us about your project requirements, timeline, and goals"
                                                  rows={4}
                                                  required
                                                  className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
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
                                             className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all font-bold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                             {isSubmitting ? "Submitting..." : "Submit Request"}
                                        </Button>

                                        <p className="text-xs text-center text-gray-400">
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
