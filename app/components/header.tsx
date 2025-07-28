"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     return (
          <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg shadow-xl border-b border-b-gradient-to-r from-indigo-400/30 via-blue-400/20 to-purple-400/30">
               <div className="container flex h-16 items-center justify-between px-4">
                    <Link
                         href="/"
                         className="flex items-center space-x-3 group"
                    >
                         <img
                              src="/images/hireflutterdev.png"
                              alt="HireFlutterDeveloper Logo"
                              className="h-24 w-auto rounded-full p-1 group-hover:scale-105 transition-transform duration-300"
                         />
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                         {[
                              { href: "/", label: "Home" },
                              { href: "/about", label: "About" },
                              { href: "/blog", label: "Blog" },
                              { href: "/contact", label: "Contact" },
                         ].map((item) => (
                              <Link
                                   key={item.href}
                                   href={item.href}
                                   className="text-sm font-medium px-3 py-1 rounded-lg hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                              >
                                   {item.label}
                              </Link>
                         ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                         <Button
                              asChild
                              className="hidden sm:inline-flex bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-md hover:from-indigo-600 hover:to-blue-600 transition-all font-semibold"
                         >
                              <Link href="/contact">Get Free Consultation</Link>
                         </Button>
                         <Button
                              variant="ghost"
                              size="icon"
                              className="md:hidden"
                              onClick={() => setMobileMenuOpen(true)}
                              aria-label="Open menu"
                         >
                              <Menu className="h-6 w-6" />
                         </Button>
                    </div>
               </div>

               {/* Mobile Menu Overlay */}
               <div
                    className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
                         mobileMenuOpen
                              ? "opacity-100 pointer-events-auto"
                              : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-hidden={!mobileMenuOpen}
               />
               {/* Mobile Menu Drawer */}
               <aside
                    className={`fixed top-0 right-0 h-full w-72 bg-background/90 backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-300 ${
                         mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    aria-label="Mobile menu"
               >
                    <div className="flex items-center justify-between h-16 px-4 border-b border-gradient-to-r from-indigo-200 via-blue-200 to-purple-200">
                         <Link
                              href="/"
                              className="flex items-center space-x-2"
                              onClick={() => setMobileMenuOpen(false)}
                         >
                              <img
                                   src="/images/hireflutterdev.png"
                                   alt="Logo"
                                   className="h-10 w-auto rounded-full bg-white p-1 shadow"
                              />
                         </Link>
                         <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setMobileMenuOpen(false)}
                              aria-label="Close menu"
                         >
                              <X className="h-6 w-6" />
                         </Button>
                    </div>
                    <nav className="flex flex-col p-6 space-y-4">
                         {[
                              { href: "/", label: "Home" },
                              { href: "/about", label: "About" },
                              { href: "/blog", label: "Blog" },
                              { href: "/contact", label: "Contact" },
                         ].map((item) => (
                              <Link
                                   key={item.href}
                                   href={item.href}
                                   className="text-base font-medium px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:text-primary transition-all duration-200"
                                   onClick={() => setMobileMenuOpen(false)}
                              >
                                   {item.label}
                              </Link>
                         ))}
                         <Button
                              asChild
                              className="mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-md hover:from-indigo-600 hover:to-blue-600 transition-all font-semibold"
                         >
                              <Link
                                   href="/contact"
                                   onClick={() => setMobileMenuOpen(false)}
                              >
                                   Get Free Consultation
                              </Link>
                         </Button>
                    </nav>
               </aside>
          </header>
     );
}
