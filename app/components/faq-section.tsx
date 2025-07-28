import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
     {
          question:
               "How much does it cost to hire a dedicated Flutter developer?",
          answer: "The cost of hiring a dedicated Flutter developer depends on factors such as experience, expertise, and project complexity. Contact us for a tailored quote based on your project's specifics.",
     },
     {
          question: "How quickly can I hire a dedicated Flutter developer?",
          answer: "You can hire a dedicated Flutter developer within 3 days. After reviewing your project requirements, we match you with the right developer who can start immediately.",
     },
     {
          question: "Can I change the developer if I'm not satisfied?",
          answer: "Yes, we provide a hassle-free developer replacement process. If you're not satisfied with your dedicated Flutter developer, we'll quickly match you with a new one who suits your project needs.",
     },
     {
          question: "Will the developer work in my time zone?",
          answer: "Yes, your dedicated Flutter developer will work according to your preferred time zone to ensure smooth communication and collaboration.",
     },
     {
          question: "Is my data and intellectual property (IP) protected?",
          answer: "Yes, we sign NDAs to protect your data and intellectual property, ensuring that your dedicated Flutter developer adheres to strict confidentiality.",
     },
     {
          question:
               "How do you ensure the right Flutter developer for my project?",
          answer: "We match developers based on your project requirements, ensuring your dedicated Flutter developer has the right skills, experience, and expertise for your specific needs.",
     },
     {
          question: "Can I track the progress of my Flutter developer?",
          answer: "Yes, you can track the progress of your dedicated Flutter developer through regular status updates and direct communication, keeping you informed throughout the project.",
     },
     {
          question: "How do I get started with hiring a Flutter developer?",
          answer: "Simply provide your project details, and we'll match you with a qualified dedicated Flutter developer within 3 days. You can proceed with the interview and start your project without delay.",
     },
     {
          question: "What sets HireFlutterDeveloper.com apart from others?",
          answer: "We specialize in Flutter development, ensuring our developers have expert knowledge of the framework. Our quick onboarding process matches you with the right dedicated Flutter developer for your project needs.",
     },
     {
          question: "What hiring models do you offer for Flutter developers?",
          answer: "We offer hourly, part-time, full-time, and dedicated Flutter developer models. Choose the model based on your project's scope, duration, and budget.",
     },
     {
          question: "Can I interview the Flutter developer before hiring?",
          answer: "Yes, you can interview your dedicated Flutter developer before hiring to ensure they meet your specific needs and expectations.",
     },
     {
          question: "Do you provide post-launch support?",
          answer: "Yes, we offer post-launch support, including bug fixes, performance monitoring, and updates, ensuring your app continues to perform smoothly after launch.",
     },
     {
          question: "What happens if the project scope changes?",
          answer: "If the project scope changes, we reassess requirements and adjust resources and timelines to keep your dedicated Flutter developer on track.",
     },
     {
          question:
               "Can I hire a Flutter developer for a specific feature or module?",
          answer: "Yes, you can hire a dedicated Flutter developer for specific features or modules within your app.",
     },
     {
          question: "Do you offer any guarantees for your Flutter developers?",
          answer: "Yes, we offer a satisfaction guarantee. If you're not happy with your dedicated Flutter developer, we'll provide a replacement at no additional cost.",
     },
];

export default function FAQSection() {
     return (
          <section
               id="faq"
               className="relative py-20 bg-gray-50 overflow-hidden"
          >
               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Frequently Asked Questions
                              </span>
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              Find answers to common questions about hiring
                              dedicated Flutter developers from HFD.
                         </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                         <Accordion
                              type="single"
                              collapsible
                              className="w-full space-y-4"
                         >
                              {faqs.map((faq, index) => (
                                   <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="bg-white/90 rounded-xl shadow-md border border-gray-100 transition-all"
                                   >
                                        <AccordionTrigger className="text-left font-semibold px-6 py-4 hover:bg-indigo-50 rounded-t-xl transition-colors">
                                             <h3 className="text-lg font-semibold">
                                                  {faq.question}
                                             </h3>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground px-6 pb-4">
                                             <p>{faq.answer}</p>
                                        </AccordionContent>
                                   </AccordionItem>
                              ))}
                         </Accordion>
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl text-center">
                         <p className="text-lg text-muted-foreground mb-6">
                              Still have questions? We're here to help.
                         </p>
                         <Button
                              size="lg"
                              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all px-8 py-4 text-lg font-semibold"
                         >
                              Contact Us
                         </Button>
                    </div>
               </div>
          </section>
     );
}
