import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
     Check,
     Star,
     Zap,
     Shield,
     Clock,
     DollarSign,
     Users,
     Target,
} from "lucide-react";
import clsx from "clsx";

const comparisons = [
     {
          aspect: "Expertise",
          icon: Star,
          hfd: {
               text: "Specialized in Flutter development",
               score: "excellent",
          },
          toptal: {
               text: "Broad expertise across technologies",
               score: "good",
          },
          uplers: {
               text: "Various skills but less Flutter focus",
               score: "average",
          },
     },
     {
          aspect: "Communication",
          icon: Users,
          hfd: {
               text: "Direct with developer and project manager",
               score: "excellent",
          },
          toptal: { text: "May involve intermediaries", score: "average" },
          uplers: {
               text: "Direct communication with some complexity",
               score: "good",
          },
     },
     {
          aspect: "Cost",
          icon: DollarSign,
          hfd: {
               text: "Competitive pricing and flexible models",
               score: "excellent",
          },
          toptal: {
               text: "Higher pricing for top-tier talent",
               score: "average",
          },
          uplers: {
               text: "Mid-range pricing, cost-effective for long-term",
               score: "good",
          },
     },
     {
          aspect: "Flexibility",
          icon: Zap,
          hfd: {
               text: "Highly flexible engagement models",
               score: "excellent",
          },
          toptal: {
               text: "Limited flexibility, mostly long-term",
               score: "average",
          },
          uplers: { text: "Flexible, but not as adaptive", score: "good" },
     },
     {
          aspect: "Onboarding",
          icon: Clock,
          hfd: { text: "Quick, usually within 3 days", score: "excellent" },
          toptal: { text: "Longer onboarding process", score: "average" },
          uplers: { text: "Quick onboarding but may vary", score: "good" },
     },
];

const hiringModels = [
     {
          factor: "Cost",
          icon: DollarSign,
          dedicated: {
               value: "Higher (monthly retainer)",
               score: "good",
               description: "Predictable monthly costs",
          },
          freelancer: {
               value: "Lower (pay per task/hour)",
               score: "excellent",
               description: "Pay only for work done",
          },
          inhouse: {
               value: "Very high (salary + benefits)",
               score: "poor",
               description: "Highest long-term costs",
          },
     },
     {
          factor: "Flexibility",
          icon: Zap,
          dedicated: {
               value: "Medium (committed to project)",
               score: "good",
               description: "Dedicated but adaptable",
          },
          freelancer: {
               value: "High (adjust working hours)",
               score: "excellent",
               description: "Complete schedule control",
          },
          inhouse: {
               value: "Low (fixed schedules)",
               score: "poor",
               description: "Limited scheduling flexibility",
          },
     },
     {
          factor: "Expertise",
          icon: Star,
          dedicated: {
               value: "High (specialized skills)",
               score: "excellent",
               description: "Vetted Flutter experts",
          },
          freelancer: {
               value: "Varies (can be high or low)",
               score: "average",
               description: "Quality inconsistent",
          },
          inhouse: {
               value: "High (depends on hire)",
               score: "good",
               description: "Control over expertise level",
          },
     },
     {
          factor: "Control",
          icon: Shield,
          dedicated: {
               value: "Medium (managed by agency)",
               score: "good",
               description: "Professional management",
          },
          freelancer: {
               value: "Low (self-managed)",
               score: "poor",
               description: "No management support",
          },
          inhouse: {
               value: "High (direct management)",
               score: "excellent",
               description: "Full control over workflow",
          },
     },
     {
          factor: "Best For",
          icon: Target,
          dedicated: {
               value: "Large, ongoing projects",
               score: "excellent",
               description: "Ideal for scaling teams",
          },
          freelancer: {
               value: "Short-term, specific tasks",
               score: "good",
               description: "Perfect for quick fixes",
          },
          inhouse: {
               value: "Long-term, full-scale projects",
               score: "good",
               description: "Best for core products",
          },
     },
];

function ScoreBadge({ score }: { score: string }) {
     switch (score) {
          case "excellent":
               return (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                         <Check className="h-4 w-4 mr-1 text-green-500" />{" "}
                         Excellent
                    </span>
               );
          case "good":
               return (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                         <Check className="h-4 w-4 mr-1 text-blue-500" /> Good
                    </span>
               );
          case "average":
               return (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">
                         <span className="h-3 w-3 rounded-full bg-yellow-400 mr-1 inline-block" />{" "}
                         Average
                    </span>
               );
          case "poor":
               return (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200">
                         <span className="h-3 w-3 rounded-full bg-red-400 mr-1 inline-block" />{" "}
                         Poor
                    </span>
               );
          default:
               return null;
     }
}

export default function ComparisonSection() {
     return (
          <section className="relative py-20 bg-gray-50 overflow-hidden">
               <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                              Why Choose{" "}
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                   HFD?
                              </span>
                         </h2>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                              Compare our services with other platforms and
                              hiring models to make an informed decision.
                         </p>
                    </div>

                    {/* HFD vs Competitors Table */}
                    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/90 mb-16">
                         <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 sticky top-0 z-10">
                                   <tr>
                                        <th className="px-6 py-4 text-left text-lg font-bold text-gray-900 whitespace-nowrap rounded-tl-2xl">
                                             <span className="flex items-center gap-2">
                                                  <span>Aspect</span>
                                             </span>
                                        </th>
                                        <th className="px-6 py-4 text-center text-lg font-bold text-green-700 whitespace-nowrap">
                                             <span className="flex items-center justify-center gap-2">
                                                  <img
                                                       src="/images/hireflutterdev.png"
                                                       alt="HFD"
                                                       className="h-7 w-7 rounded-full"
                                                  />
                                                  HFD
                                             </span>
                                        </th>
                                        <th className="px-6 py-4 text-center text-lg font-bold text-gray-700 whitespace-nowrap">
                                             <span className="flex items-center justify-center gap-2">
                                                  <Star className="h-5 w-5 text-yellow-500" />
                                                  Toptal
                                             </span>
                                        </th>
                                        <th className="px-6 py-4 text-center text-lg font-bold text-gray-700 whitespace-nowrap rounded-tr-2xl">
                                             <span className="flex items-center justify-center gap-2">
                                                  <Users className="h-5 w-5 text-blue-500" />
                                                  Uplers
                                             </span>
                                        </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {comparisons.map((row, idx) => (
                                        <tr
                                             key={row.aspect}
                                             className={clsx(
                                                  "transition-colors",
                                                  idx % 2 === 0
                                                       ? "bg-white"
                                                       : "bg-blue-50",
                                                  "hover:bg-indigo-50"
                                             )}
                                        >
                                             <td className="px-6 py-5 font-semibold text-gray-900 text-base whitespace-nowrap">
                                                  <span className="flex items-center gap-2">
                                                       <row.icon className="h-5 w-5 text-primary" />
                                                       {row.aspect}
                                                  </span>
                                             </td>
                                             <td className="px-6 py-5 text-center align-top">
                                                  <div className="flex flex-col items-center gap-1">
                                                       <ScoreBadge
                                                            score={
                                                                 row.hfd.score
                                                            }
                                                       />
                                                       <span className="text-sm text-gray-600">
                                                            {row.hfd.text}
                                                       </span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-5 text-center align-top">
                                                  <div className="flex flex-col items-center gap-1">
                                                       <ScoreBadge
                                                            score={
                                                                 row.toptal
                                                                      .score
                                                            }
                                                       />
                                                       <span className="text-sm text-gray-600">
                                                            {row.toptal.text}
                                                       </span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-5 text-center align-top">
                                                  <div className="flex flex-col items-center gap-1">
                                                       <ScoreBadge
                                                            score={
                                                                 row.uplers
                                                                      .score
                                                            }
                                                       />
                                                       <span className="text-sm text-gray-600">
                                                            {row.uplers.text}
                                                       </span>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>

                    {/* Hiring Models Table */}
                    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/90">
                         <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 sticky top-0 z-10">
                                   <tr>
                                        <th className="px-6 py-4 text-left text-lg font-bold text-gray-900 whitespace-nowrap rounded-tl-2xl">
                                             <span className="flex items-center gap-2">
                                                  <span>Factor</span>
                                             </span>
                                        </th>
                                        <th className="px-6 py-4 text-center text-lg font-bold text-blue-700 whitespace-nowrap">
                                             <span className="flex items-center justify-center gap-2">
                                                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                                       Dedicated
                                                  </Badge>
                                             </span>
                                        </th>
                                        <th className="px-6 py-4 text-center text-lg font-bold text-gray-700 whitespace-nowrap">
                                             <span className="flex items-center justify-center gap-2">
                                                  <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                                                       Freelancer
                                                  </Badge>
                                             </span>
                                        </th>
                                        <th className="px-6 py-4 text-center text-lg font-bold text-gray-700 whitespace-nowrap rounded-tr-2xl">
                                             <span className="flex items-center justify-center gap-2">
                                                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                                                       In-House
                                                  </Badge>
                                             </span>
                                        </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {hiringModels.map((row, idx) => (
                                        <tr
                                             key={row.factor}
                                             className={clsx(
                                                  "transition-colors",
                                                  idx % 2 === 0
                                                       ? "bg-white"
                                                       : "bg-blue-50",
                                                  "hover:bg-indigo-50"
                                             )}
                                        >
                                             <td className="px-6 py-5 font-semibold text-gray-900 text-base whitespace-nowrap">
                                                  <span className="flex items-center gap-2">
                                                       <row.icon className="h-5 w-5 text-primary" />
                                                       {row.factor}
                                                  </span>
                                             </td>
                                             <td className="px-6 py-5 text-center align-top">
                                                  <div className="flex flex-col items-center gap-1">
                                                       <ScoreBadge
                                                            score={
                                                                 row.dedicated
                                                                      .score
                                                            }
                                                       />
                                                       <span className="text-sm text-gray-600">
                                                            {
                                                                 row.dedicated
                                                                      .value
                                                            }
                                                       </span>
                                                       <span className="text-xs text-gray-400">
                                                            {
                                                                 row.dedicated
                                                                      .description
                                                            }
                                                       </span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-5 text-center align-top">
                                                  <div className="flex flex-col items-center gap-1">
                                                       <ScoreBadge
                                                            score={
                                                                 row.freelancer
                                                                      .score
                                                            }
                                                       />
                                                       <span className="text-sm text-gray-600">
                                                            {
                                                                 row.freelancer
                                                                      .value
                                                            }
                                                       </span>
                                                       <span className="text-xs text-gray-400">
                                                            {
                                                                 row.freelancer
                                                                      .description
                                                            }
                                                       </span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-5 text-center align-top">
                                                  <div className="flex flex-col items-center gap-1">
                                                       <ScoreBadge
                                                            score={
                                                                 row.inhouse
                                                                      .score
                                                            }
                                                       />
                                                       <span className="text-sm text-gray-600">
                                                            {row.inhouse.value}
                                                       </span>
                                                       <span className="text-xs text-gray-400">
                                                            {
                                                                 row.inhouse
                                                                      .description
                                                            }
                                                       </span>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </div>
          </section>
     );
}
