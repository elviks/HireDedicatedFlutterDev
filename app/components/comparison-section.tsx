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
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                         <Check className="h-3 w-3 mr-1" />
                         Excellent
                    </span>
               );
          case "good":
               return (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                         <Check className="h-3 w-3 mr-1" />
                         Good
                    </span>
               );
          case "average":
               return (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
                         <span className="h-2 w-2 rounded-full bg-yellow-400 mr-1" />
                         Average
                    </span>
               );
          case "poor":
               return (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                         <span className="h-2 w-2 rounded-full bg-red-400 mr-1" />
                         Poor
                    </span>
               );
          default:
               return null;
     }
}

export default function ComparisonSection() {
     return (
          <section className="py-20 bg-gray-50">
               <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">
                              Why Choose{" "}
                              <span className="text-blue-600">HFD?</span>
                         </h2>
                         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                              Compare our services with other platforms and hiring models to make an informed decision.
                         </p>
                    </div>

                    {/* HFD vs Competitors Table */}
                    <div className="mb-16">
                         <h3 className="text-2xl font-semibold mb-6 text-center">HFD vs Competitors</h3>
                         <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                              <div className="overflow-x-auto">
                                   <table className="w-full">
                                        <thead>
                                             <tr className="bg-gray-50 border-b border-gray-200">
                                                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                                       <span className="flex items-center gap-2">
                                                            <span>Aspect</span>
                                                       </span>
                                                  </th>
                                                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-700">
                                                       <span className="flex items-center justify-center gap-2">
                                                            <img
                                                                 src="/images/hireflutterdev.png"
                                                                 alt="HFD"
                                                                 className="h-6 w-6 rounded-full"
                                                            />
                                                            HFD
                                                       </span>
                                                  </th>
                                                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                                       <span className="flex items-center justify-center gap-2">
                                                            <Star className="h-4 w-4 text-yellow-500" />
                                                            Toptal
                                                       </span>
                                                  </th>
                                                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                                       <span className="flex items-center justify-center gap-2">
                                                            <Users className="h-4 w-4 text-blue-500" />
                                                            Uplers
                                                       </span>
                                                  </th>
                                             </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                             {comparisons.map((row, idx) => (
                                                  <tr key={row.aspect} className="hover:bg-gray-50 transition-colors">
                                                       <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                            <span className="flex items-center gap-2">
                                                                 <row.icon className="h-4 w-4 text-gray-500" />
                                                                 {row.aspect}
                                                            </span>
                                                       </td>
                                                       <td className="px-6 py-4 text-center">
                                                            <div className="flex flex-col items-center gap-2">
                                                                 <ScoreBadge score={row.hfd.score} />
                                                                 <p className="text-xs text-gray-600 max-w-32">
                                                                      {row.hfd.text}
                                                                 </p>
                                                            </div>
                                                       </td>
                                                       <td className="px-6 py-4 text-center">
                                                            <div className="flex flex-col items-center gap-2">
                                                                 <ScoreBadge score={row.toptal.score} />
                                                                 <p className="text-xs text-gray-600 max-w-32">
                                                                      {row.toptal.text}
                                                                 </p>
                                                            </div>
                                                       </td>
                                                       <td className="px-6 py-4 text-center">
                                                            <div className="flex flex-col items-center gap-2">
                                                                 <ScoreBadge score={row.uplers.score} />
                                                                 <p className="text-xs text-gray-600 max-w-32">
                                                                      {row.uplers.text}
                                                                 </p>
                                                            </div>
                                                       </td>
                                                  </tr>
                                             ))}
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>

                    {/* Hiring Models Table */}
                    <div>
                         <h3 className="text-2xl font-semibold mb-6 text-center">Hiring Models Comparison</h3>
                         <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                              <div className="overflow-x-auto">
                                   <table className="w-full">
                                        <thead>
                                             <tr className="bg-gray-50 border-b border-gray-200">
                                                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                                       <span className="flex items-center gap-2">
                                                            <span>Factor</span>
                                                       </span>
                                                  </th>
                                                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-700">
                                                       <span className="flex items-center justify-center gap-2">
                                                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                                                 Dedicated
                                                            </Badge>
                                                       </span>
                                                  </th>
                                                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                                       <span className="flex items-center justify-center gap-2">
                                                            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                                                                 Freelancer
                                                            </Badge>
                                                       </span>
                                                  </th>
                                                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                                       <span className="flex items-center justify-center gap-2">
                                                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                                                                 In-House
                                                            </Badge>
                                                       </span>
                                                  </th>
                                             </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                             {hiringModels.map((row, idx) => (
                                                  <tr key={row.factor} className="hover:bg-gray-50 transition-colors">
                                                       <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                            <span className="flex items-center gap-2">
                                                                 <row.icon className="h-4 w-4 text-gray-500" />
                                                                 {row.factor}
                                                            </span>
                                                       </td>
                                                       <td className="px-6 py-4 text-center">
                                                            <div className="flex flex-col items-center gap-2">
                                                                 <ScoreBadge score={row.dedicated.score} />
                                                                 <p className="text-xs font-medium text-gray-900">
                                                                      {row.dedicated.value}
                                                                 </p>
                                                                 <p className="text-xs text-gray-500 max-w-32">
                                                                      {row.dedicated.description}
                                                                 </p>
                                                            </div>
                                                       </td>
                                                       <td className="px-6 py-4 text-center">
                                                            <div className="flex flex-col items-center gap-2">
                                                                 <ScoreBadge score={row.freelancer.score} />
                                                                 <p className="text-xs font-medium text-gray-900">
                                                                      {row.freelancer.value}
                                                                 </p>
                                                                 <p className="text-xs text-gray-500 max-w-32">
                                                                      {row.freelancer.description}
                                                                 </p>
                                                            </div>
                                                       </td>
                                                       <td className="px-6 py-4 text-center">
                                                            <div className="flex flex-col items-center gap-2">
                                                                 <ScoreBadge score={row.inhouse.score} />
                                                                 <p className="text-xs font-medium text-gray-900">
                                                                      {row.inhouse.value}
                                                                 </p>
                                                                 <p className="text-xs text-gray-500 max-w-32">
                                                                      {row.inhouse.description}
                                                                 </p>
                                                            </div>
                                                       </td>
                                                  </tr>
                                             ))}
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
