"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
     DollarSign,
     GraduationCap,
     ShoppingCart,
     CheckCircle,
     ArrowRight,
     Star,
     Sparkles,
     TrendingUp,
     Users,
     Clock,
     Award,
     Zap,
     Play,
     Eye,
     Target,
     Trophy,
} from "lucide-react";
import { useState, SetStateAction } from "react";

const successStories = [
     {
          icon: DollarSign,
          title: "FinTech Revolution",
          company: "Nexus Financial",
          location: "San Francisco, USA",
          industry: "FinTech",
          description:
               "Revolutionary mobile banking platform that transformed how 50,000+ users manage their finances with AI-powered insights and military-grade security.",
          challenge:
               "Create a secure, scalable finance app that could handle real-time transactions while maintaining user trust and regulatory compliance.",
          solution:
               "Built with Flutter for cross-platform excellence, integrated advanced banking APIs, and implemented blockchain-level security protocols.",
          impact: "50K+ active users, 4.8★ rating, $2M+ in transactions processed daily",
          metrics: {
               users: "50K+",
               rating: "4.8★",
               revenue: "$2M+",
               timeline: "3 months",
          },
          tags: ["Flutter", "Banking APIs", "Security", "Real-time"],
          color: "from-blue-500 via-blue-400 to-blue-600",
          bgPattern:
               "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.15) 0%, transparent 50%)",
          height: "h-[600px]",
     },
     {
          icon: GraduationCap,
          title: "EdTech Innovation",
          company: "LearnSphere",
          location: "Melbourne, Australia",
          industry: "Education",
          description:
               "Next-generation eLearning platform serving 100,000+ students with immersive AR experiences and AI-driven personalized learning paths.",
          challenge:
               "Develop an engaging platform that could support massive concurrent users while delivering personalized content offline and online.",
          solution:
               "Created feature-rich Flutter app with AR integration, real-time video streaming, and intelligent offline synchronization capabilities.",
          impact: "100K+ students, 4.9★ rating, 95% completion rate, EdTech Award Winner",
          metrics: {
               users: "100K+",
               rating: "4.9★",
               completion: "95%",
               timeline: "4 months",
          },
          tags: ["Flutter", "AR/VR", "AI", "Video Streaming"],
          color: "from-blue-600 via-blue-400 to-blue-700",
          bgPattern:
               "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
          height: "h-[550px]",
     },
     {
          icon: ShoppingCart,
          title: "Commerce Empire",
          company: "MegaMart",
          location: "Dubai, UAE",
          industry: "Retail",
          description:
               "Omnichannel shopping experience that revolutionized Middle Eastern retail with AR try-ons and AI recommendations, serving 75,000+ customers.",
          challenge:
               "Transform traditional retail into a cutting-edge digital experience with real-time inventory and personalized shopping journeys.",
          solution:
               "Developed cross-platform app with AR integration, AI-powered recommendations, and seamless payment processing across multiple currencies.",
          impact: "75K+ customers, 4.7★ rating, 300% sales increase, Regional Excellence Award",
          metrics: {
               users: "75K+",
               rating: "4.7★",
               growth: "300%",
               timeline: "5 months",
          },
          tags: ["Flutter", "AR Shopping", "AI", "Multi-currency"],
          color: "from-blue-700 via-blue-400 to-blue-800",
          bgPattern:
               "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
          height: "h-[650px]",
     },
];

export default function StunningSuccessStories() {
     const [selectedStory, setSelectedStory] = useState<number | null>(null);
     const [hoveredStory, setHoveredStory] = useState<number | null>(null);

     return (
          <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
               {/* Floating geometric shapes */}
               <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-full animate-pulse"></div>
                    <div
                         className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-blue-200/20 rotate-45 animate-spin"
                         style={{ animationDuration: "8s" }}
                    ></div>
                    <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-blue-300/20 to-blue-400/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-blue-200/20 to-blue-400/20 rotate-12 animate-pulse"></div>
               </div>

               <div className="container mx-auto px-4 relative z-10">
                    {/* Hero Header */}
                    <div className="text-center mb-20">
                         <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-8 py-3 mb-8 shadow-lg">
                              <Trophy className="w-6 h-6 text-blue-600" />
                              <span className="font-bold text-blue-800">
                                   Success Stories
                              </span>
                              <Sparkles className="w-6 h-6 text-blue-500" />
                         </div>

                         <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                              <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent block">
                                   Stories of
                              </span>
                              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent block mt-2">
                                   Transformation
                              </span>
                         </h1>

                         <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
                              Discover how visionary companies partnered with us
                              to build revolutionary apps that
                              <span className="font-bold text-blue-600">
                                   {" "}
                                   transformed entire industries
                              </span>{" "}
                              and
                              <span className="font-bold text-blue-500">
                                   {" "}
                                   captivated millions of users worldwide
                              </span>
                              .
                         </p>
                    </div>

                    {/* Masonry Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                         {successStories.map((story, index) => (
                              <div
                                   key={index}
                                   className={`group cursor-pointer ${story.height}`}
                                   onMouseEnter={() =>
                                        setHoveredStory(
                                             index as SetStateAction<
                                                  number | null
                                             >
                                        )
                                   }
                                   onMouseLeave={() => setHoveredStory(null)}
                                   onClick={() =>
                                        setSelectedStory(
                                             selectedStory === index
                                                  ? null
                                                  : (index as SetStateAction<
                                                         number | null
                                                    >)
                                        )
                                   }
                              >
                                   <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105">
                                        {/* Background with pattern */}
                                        <div
                                             className="absolute inset-0 opacity-90"
                                             style={{
                                                  background: story.bgPattern,
                                             }}
                                        ></div>

                                        {/* Gradient overlay */}
                                        <div
                                             className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                                        ></div>

                                        {/* Content */}
                                        <div className="relative h-full p-8 flex flex-col justify-between text-white">
                                             <div>
                                                  <div className="flex items-center justify-between mb-6">
                                                       <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                                            <story.icon className="w-8 h-8 text-white" />
                                                       </div>
                                                       <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
                                                            {story.industry}
                                                       </Badge>
                                                  </div>

                                                  <h3 className="text-3xl font-black mb-3 leading-tight group-hover:scale-105 transition-transform duration-300">
                                                       {story.title}
                                                  </h3>

                                                  <div className="mb-4">
                                                       <p className="text-white/90 font-bold text-lg">
                                                            {story.company}
                                                       </p>
                                                       <p className="text-white/70 text-sm">
                                                            {story.location}
                                                       </p>
                                                  </div>

                                                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                                                       {story.description}
                                                  </p>

                                                  {/* Tags */}
                                                  <div className="flex flex-wrap gap-2 mb-6">
                                                       {story.tags.map(
                                                            (tag, tagIndex) => (
                                                                 <span
                                                                      key={
                                                                           tagIndex
                                                                      }
                                                                      className="bg-white/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full border border-white/30"
                                                                 >
                                                                      {tag}
                                                                 </span>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             <div>
                                                  {/* Metrics */}
                                                  <div className="grid grid-cols-2 gap-4 mb-6">
                                                       <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                                            <div className="text-2xl font-black">
                                                                 {
                                                                      story
                                                                           .metrics
                                                                           .users
                                                                 }
                                                            </div>
                                                            <div className="text-white/70 text-xs">
                                                                 Active Users
                                                            </div>
                                                       </div>
                                                       <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                                            <div className="text-2xl font-black">
                                                                 {
                                                                      story
                                                                           .metrics
                                                                           .rating
                                                                 }
                                                            </div>
                                                            <div className="text-white/70 text-xs">
                                                                 User Rating
                                                            </div>
                                                       </div>
                                                  </div>

                                                  <Button className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 group/btn">
                                                       <Eye className="w-4 h-4 mr-2" />
                                                       <span>
                                                            View Full Story
                                                       </span>
                                                       <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                  </Button>
                                             </div>
                                        </div>

                                        {/* Hover effects */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                             <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                  <Play className="w-6 h-6 text-white" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Expanded Story Details */}
                    {selectedStory !== null && (
                         <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border-2 border-blue-100">
                              <div className="grid lg:grid-cols-2 gap-12">
                                   <div>
                                        <div className="flex items-center gap-4 mb-8">
                                             <div
                                                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${successStories[selectedStory].color} flex items-center justify-center shadow-xl`}
                                             >
                                                  {successStories[
                                                       selectedStory
                                                  ].icon({
                                                       className:
                                                            "w-8 h-8 text-white",
                                                  })}
                                             </div>
                                             <div>
                                                  <h3 className="text-3xl font-black text-blue-900">
                                                       {
                                                            successStories[
                                                                 selectedStory
                                                            ].title
                                                       }
                                                  </h3>
                                                  <p className="text-blue-700">
                                                       {
                                                            successStories[
                                                                 selectedStory
                                                            ].company
                                                       }
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="space-y-6">
                                             <div>
                                                  <h4 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                                                       <Target className="w-5 h-5 text-blue-500 mr-2" />
                                                       The Challenge
                                                  </h4>
                                                  <p className="text-blue-700 leading-relaxed">
                                                       {
                                                            successStories[
                                                                 selectedStory
                                                            ].challenge
                                                       }
                                                  </p>
                                             </div>

                                             <div>
                                                  <h4 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                                                       <Zap className="w-5 h-5 text-blue-400 mr-2" />
                                                       Our Solution
                                                  </h4>
                                                  <p className="text-blue-700 leading-relaxed">
                                                       {
                                                            successStories[
                                                                 selectedStory
                                                            ].solution
                                                       }
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div>
                                        <div
                                             className={`bg-gradient-to-br ${successStories[selectedStory].color} rounded-2xl p-8 text-white mb-8`}
                                        >
                                             <h4 className="text-xl font-bold mb-4 flex items-center">
                                                  <Award className="w-6 h-6 mr-2" />
                                                  Remarkable Impact
                                             </h4>
                                             <p className="leading-relaxed text-lg">
                                                  {
                                                       successStories[
                                                            selectedStory
                                                       ].impact
                                                  }
                                             </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                             {Object.entries(
                                                  successStories[selectedStory]
                                                       .metrics
                                             ).map(([key, value]) => (
                                                  <div
                                                       key={key}
                                                       className="bg-blue-50 rounded-xl p-4 text-center"
                                                  >
                                                       <div className="text-2xl font-black text-blue-900">
                                                            {value}
                                                       </div>
                                                       <div className="text-blue-700 text-sm capitalize">
                                                            {key}
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )}

                    {/* Call to Action */}
                    <div className="text-center">
                         <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                              <div className="absolute inset-0 bg-blue-900/10 rounded-3xl"></div>
                              <div className="relative z-10">
                                   <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                                        Your Success Story
                                        <span className="block text-blue-200">
                                             Starts Here
                                        </span>
                                   </h3>
                                   <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                                        Ready to join these industry leaders?
                                        Let's transform your vision into the
                                        next breakthrough application that
                                        captivates users and dominates markets.
                                   </p>
                                   <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button
                                             size="lg"
                                             className="bg-white text-blue-600 hover:bg-blue-100 shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-bold "
                                        >
                                             <Sparkles className="w-5 h-5 mr-2" />
                                             Start Your Journey
                                        </Button>
                                        <Button
                                             size="lg"
                                             variant="outline"
                                             className="border-white/30 text-black hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-bold"
                                        >
                                             Schedule a Call
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
