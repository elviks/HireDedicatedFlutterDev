import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
     Facebook,
     Twitter,
     Linkedin,
     Instagram,
     Mail,
     Phone,
     MapPin,
} from "lucide-react";

export default function Footer() {
     return (
          <footer className="bg-gray-900 text-gray-200 relative overflow-hidden">
               <div className="container px-4 py-16 mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                         <div>
                              <Link
                                   href="/"
                                   className="flex items-center space-x-2 mb-6"
                              >
                                   <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                        HFD
                                   </span>
                              </Link>
                              <p className="text-gray-400 mb-6">
                                   Scale your business faster by hiring
                                   dedicated Flutter developers. Rigorously
                                   vetted and minimum 5,000+ hours of
                                   experience.
                              </p>
                              <div className="flex space-x-4">
                                   <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 bg-transparent animate-bounce-slow"
                                   >
                                        <Facebook className="h-5 w-5" />
                                   </Button>
                                   <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-sky-400 focus:text-sky-400 transition-colors duration-200 bg-transparent animate-bounce-slow delay-150"
                                   >
                                        <Twitter className="h-5 w-5" />
                                   </Button>
                                   <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-blue-700 focus:text-blue-700 transition-colors duration-200 bg-transparent animate-bounce-slow delay-300"
                                   >
                                        <Linkedin className="h-5 w-5" />
                                   </Button>
                                   <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-pink-500 focus:text-pink-500 transition-colors duration-200 bg-transparent animate-bounce-slow delay-500"
                                   >
                                        <Instagram className="h-5 w-5" />
                                   </Button>
                              </div>
                         </div>

                         <div>
                              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Quick Links
                              </h3>
                              <ul className="space-y-4">
                                   <li>
                                        <Link
                                             href="#services"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             Services
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="#pricing"
                                             className="text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                             Pricing
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
                              <form className="flex flex-col sm:flex-row gap-2">
                                   <Input
                                        placeholder="Your email"
                                        className="bg-white/10 border border-gray-700 text-gray-200 focus:ring-primary focus:border-primary transition-all rounded-full px-4 py-2 backdrop-blur-md"
                                   />
                                   <Button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow hover:from-indigo-600 hover:to-blue-600 transition-all rounded-full px-6 py-2 font-semibold">
                                        Subscribe
                                   </Button>
                              </form>
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
