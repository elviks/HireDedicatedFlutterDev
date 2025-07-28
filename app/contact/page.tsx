import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
     return (
          <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
               <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                         <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                              Contact Us
                         </h1>
                         <p className="text-xl text-muted-foreground mb-6">
                              We’d love to hear from you! Whether you have a
                              project in mind, need support, or just want to say
                              hello, our team is here to help you every step of
                              the way.
                         </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                         {/* Contact Form */}
                         <form className="bg-white/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 backdrop-blur-lg border border-blue-100 animate-fade-in">
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
                              <div className="space-y-2">
                                   <label
                                        htmlFor="message"
                                        className="text-sm font-medium"
                                   >
                                        Message
                                   </label>
                                   <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        rows={4}
                                        required
                                        className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                                   />
                              </div>
                              <Button
                                   type="submit"
                                   className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all font-bold text-lg py-6 animate-bounce-slow"
                              >
                                   Send Message
                              </Button>
                              <p className="text-xs text-center text-muted-foreground">
                                   By submitting this form, you agree to our
                                   privacy policy and terms of service.
                              </p>
                         </form>
                         {/* Company Info & Map */}
                         <div className="flex flex-col gap-8 items-center justify-center animate-fade-in delay-200">
                              <div className="bg-white/80 rounded-xl shadow-xl p-6 w-full border border-blue-100">
                                   <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                        Our Info
                                   </h2>
                                   <div className="flex items-center gap-3 mb-3 text-gray-700">
                                        <Mail className="h-5 w-5 text-primary" />{" "}
                                        info@hireflutterdeveloper.com
                                   </div>
                                   <div className="flex items-center gap-3 mb-3 text-gray-700">
                                        <Phone className="h-5 w-5 text-primary" />{" "}
                                        +1 (555) 000-0000
                                   </div>
                                   <div className="flex items-center gap-3 mb-3 text-gray-700">
                                        <MapPin className="h-5 w-5 text-primary" />{" "}
                                        123 Tech Street, San Francisco, CA 94107
                                   </div>
                                   <div className="flex items-center gap-3 text-gray-700">
                                        <Clock className="h-5 w-5 text-primary" />{" "}
                                        <span>
                                             Support Hours: Mon–Fri, 9am–6pm PST
                                        </span>
                                   </div>
                              </div>
                              <div className="w-full h-48 rounded-xl shadow-inner border border-blue-100 overflow-hidden">
                                   <iframe
                                        title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019073964049!2d-122.4013636846816!3d37.7879939797567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d2b7e6e1%3A0x8e3b0e7e6e7e6e7e!2s123%20Tech%20St%2C%20San%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-48 md:h-56 rounded-xl border-none"
                                   ></iframe>
                              </div>
                              <div className="text-center mt-4">
                                   <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                        Let’s Build Something Amazing Together!
                                   </h3>
                                   <p className="text-muted-foreground max-w-xs mx-auto">
                                        We’re excited to learn about your
                                        project and help you achieve your goals
                                        with Flutter.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               {/* Decorative SVG Bottom */}
               <svg
                    className="absolute bottom-0 left-0 w-full h-12 md:h-20 pointer-events-none opacity-10"
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
               >
                    <path
                         fill="#fff"
                         d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
                    />
               </svg>
          </section>
     );
}
