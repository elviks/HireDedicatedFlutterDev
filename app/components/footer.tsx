"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
     const [newsletterEmail, setNewsletterEmail] = useState("");
     const [isSubscribing, setIsSubscribing] = useState(false);
     const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");
     const { toast } = useToast();

     const handleNewsletterSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          
          if (!newsletterEmail) {
               toast({
                    title: "Validation Error",
                    description: "Please enter your email address.",
                    variant: "destructive",
               });
               return;
          }

          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(newsletterEmail)) {
               toast({
                    title: "Invalid Email",
                    description: "Please enter a valid email address.",
                    variant: "destructive",
               });
               return;
          }

          setIsSubscribing(true);
          setSubscribeStatus("idle");

          try {
               const response = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: newsletterEmail }),
               });

               const result = await response.json();

               if (response.ok) {
                    setSubscribeStatus("success");
                    setNewsletterEmail("");
                    toast({
                         title: "Subscribed Successfully!",
                         description: "You'll now receive our latest updates and insights.",
                    });
               } else {
                    setSubscribeStatus("error");
                    toast({
                         title: "Error",
                         description: result.error || "Failed to subscribe. Please try again.",
                         variant: "destructive",
                    });
               }
          } catch (error) {
               setSubscribeStatus("error");
               toast({
                    title: "Error",
                    description: "Network error. Please check your connection and try again.",
                    variant: "destructive",
               });
          } finally {
               setIsSubscribing(false);
          }
     };

     return (
          <footer className="bg-gray-900 text-white relative overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-blue-900/10 opacity-20"></div>
               </div>

               <div className="container px-4 mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                         <div>
                              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   HireFlutterDeveloper
                              </h3>
                              <p className="text-gray-400 mb-6">
                                   Your trusted partner for hiring dedicated Flutter developers. 
                                   We connect you with pre-vetted talent to build exceptional mobile applications.
                              </p>
                              <div className="flex space-x-4">
                                   <Link
                                        href="#"
                                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                                   >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                   </Link>
                                   <Link
                                        href="#"
                                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                                   >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                   </Link>
                              </div>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Services
                              </h3>
                              <ul className="space-y-4">
                                   <li>
                                        <Link
                                             href="#services"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             Dedicated Flutter Developers
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#services"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             Flutter App Development
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#services"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             UI/UX Design
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#services"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             App Maintenance
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Company
                              </h3>
                              <ul className="space-y-4">
                                   <li>
                                        <Link
                                             href="#about"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             About Us
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#process"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             Our Process
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#success-stories"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             Success Stories
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#faq"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             FAQ
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#contact"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             Contact Us
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Contact Info
                              </h3>
                              <ul className="space-y-4">
                                   <li className="flex items-start space-x-3">
                                        <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                                        <span className="text-gray-400">
                                             info@hireflutterdeveloper.com
                                        </span>
                                   </li>
                                   <li className="flex items-start space-x-3">
                                        <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                                        <span className="text-gray-400">
                                             +1 (555) 000-0000
                                        </span>
                                   </li>
                                   <li className="flex items-start space-x-3">
                                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                                        <span className="text-gray-400">
                                             123 Tech Street, San Francisco, CA
                                             94107
                                        </span>
                                   </li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Newsletter
                              </h3>
                              <p className="text-gray-400 mb-4">
                                   Subscribe to our newsletter for the latest
                                   updates on Flutter development.
                              </p>
                              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                                   <Input
                                        type="email"
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        placeholder="Your email"
                                        className="bg-white/10 border border-gray-700 text-gray-200 focus:ring-primary focus:border-primary transition-all rounded-full px-4 py-2 backdrop-blur-md"
                                   />
                                   <Button 
                                        type="submit"
                                        disabled={isSubscribing}
                                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow hover:from-indigo-600 hover:to-blue-600 transition-all rounded-full px-6 py-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                   >
                                        {isSubscribing ? "..." : "Subscribe"}
                                   </Button>
                              </form>
                              
                              {/* Newsletter Status Messages */}
                              {subscribeStatus === "success" && (
                                   <div className="flex items-center gap-2 text-green-400 mt-3 text-sm">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>Subscribed successfully!</span>
                                   </div>
                              )}
                              
                              {subscribeStatus === "error" && (
                                   <div className="flex items-center gap-2 text-red-400 mt-3 text-sm">
                                        <AlertCircle className="h-4 w-4" />
                                        <span>Failed to subscribe</span>
                                   </div>
                              )}
                         </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                         <p className="text-gray-400 text-sm mb-4 md:mb-0">
                              &copy; {new Date().getFullYear()}{" "}
                              HireFlutterDeveloper.com. All rights reserved.
                         </p>
                         <div className="flex space-x-6">
                              <Link
                                   href="#"
                                   className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                              >
                                   Privacy Policy
                              </Link>
                              <Link
                                   href="#"
                                   className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                              >
                                   Terms of Service
                              </Link>
                              <Link
                                   href="#"
                                   className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                              >
                                   Cookie Policy
                              </Link>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
