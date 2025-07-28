import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
     {
          name: "Team Extension",
          subtitle: "Your Own Remote Flutter Squad",
          price: "From $7,500",
          period: "/developer/month",
          description: "Best for long-term, evolving projects",
          features: [
               "1–10 Flutter Devs, PM, QA, UI/UX (as needed)",
               "Monthly advance (fixed per developer)",
               "1 month minimum; scalable up/down",
               "Evolving, unlimited changes",
               "Direct access (Slack, email, calls)",
               "DevOps, code review, QA included",
               "Continuous delivery, sprint reports",
          ],
          popular: false,
     },
     {
          name: "Flexible Partnership",
          subtitle: "Pay As You Go",
          price: "$45–$70",
          period: "/hour",
          description: "Best for flexible, evolving scope; MVPs, POCs",
          features: [
               "Any number, assigned as per phase",
               "Bi-weekly or monthly billing",
               "No minimum; scale as needed",
               "High flexibility; adjust tasks anytime",
               "Project Manager as single point",
               "Code, QA, documentation included",
               "Transparent logs; demos on request",
          ],
          popular: true,
     },
     {
          name: "Full-Cycle Delivery",
          subtitle: "Fixed Scope & Price",
          price: "Starts at $5,000",
          period: "/project",
          description: "Best for well-defined, short/mid-term projects",
          features: [
               "Pre-agreed resource mix",
               "Milestone-based (20–30% upfront)",
               "As per contract commitment",
               "Strictly defined at start",
               "Weekly check-ins; milestone reviews",
               "End-to-end delivery, QA, deployment",
               "Final product, source code, docs",
          ],
          popular: false,
     },
];

export default function PricingSection() {
     return (
          <section id="pricing" className="py-20 bg-gray-50">
               <div className="container px-4 mx-auto">
                    <div className="text-center mb-20">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              HFD Flutter Experts{" "}
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   Engagement Models & Pricing
                              </span>
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              Explore our flexible options designed to give you
                              control, transparency, and results—no matter your
                              Flutter development needs.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
                         {pricingPlans.map((plan, index) => {
                              const cardContent = (
                                   <>
                                        {plan.popular && (
                                             <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-1.5 text-sm font-bold border-0 shadow-lg">
                                                  Most Popular
                                             </Badge>
                                        )}

                                        <CardHeader className="text-center pt-10 pb-6">
                                             <p className="text-lg font-semibold text-primary mb-2">
                                                  {plan.name}
                                             </p>
                                             <h3 className="text-xl font-bold mb-4">
                                                  {plan.subtitle}
                                             </h3>
                                             <div className="mb-4">
                                                  <span className="text-4xl font-extrabold text-gray-900">
                                                       {plan.price}
                                                  </span>
                                                  <span className="text-muted-foreground">
                                                       {plan.period}
                                                  </span>
                                             </div>
                                             <p className="text-sm text-muted-foreground font-medium">
                                                  {plan.description}
                                             </p>
                                        </CardHeader>

                                        <CardContent className="flex-grow flex flex-col px-6 pb-8">
                                             <ul className="space-y-4 flex-grow">
                                                  {plan.features.map(
                                                       (
                                                            feature,
                                                            featureIndex
                                                       ) => (
                                                            <li
                                                                 key={
                                                                      featureIndex
                                                                 }
                                                                 className="flex items-start space-x-3"
                                                            >
                                                                 <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                                 <span className="text-sm text-gray-600">
                                                                      {feature}
                                                                 </span>
                                                            </li>
                                                       )
                                                  )}
                                             </ul>

                                             <Button
                                                  size="lg"
                                                  className={`w-full mt-8 font-bold text-base py-6 transition-all duration-300 ${
                                                       plan.popular
                                                            ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                                                            : "bg-white text-primary border-2 border-primary hover:bg-primary/10"
                                                  }`}
                                             >
                                                  Get Started
                                             </Button>
                                        </CardContent>
                                   </>
                              );

                              if (plan.popular) {
                                   return (
                                        <div
                                             key={index}
                                             className="relative rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 p-1 shadow-2xl transform lg:-translate-y-6"
                                        >
                                             <Card className="h-full rounded-xl flex flex-col">
                                                  {cardContent}
                                             </Card>
                                        </div>
                                   );
                              }

                              return (
                                   <Card
                                        key={index}
                                        className="h-full rounded-2xl flex flex-col shadow-lg bg-white"
                                   >
                                        {cardContent}
                                   </Card>
                              );
                         })}
                    </div>

                    <div className="mt-24 text-center bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
                         <h3 className="text-2xl font-bold mb-4">
                              Need a Custom Solution?
                         </h3>
                         <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                              We're flexible and can tailor our services to your
                              specific project scope, timeline, and budget.
                              Let's build the perfect plan for you.
                         </p>
                         <Button
                              size="lg"
                              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all font-bold px-8 py-4"
                         >
                              Request Custom Quote
                         </Button>
                    </div>
               </div>
          </section>
     );
}
