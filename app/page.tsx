import type { Metadata } from "next";
import HeroSection from "./components/hero-section";
import WhyHireSection from "./components/why-hire-section";
import WhyFlutterSection from "./components/why-flutter-section";
import ServicesSection from "./components/services-section";
import PricingSection from "./components/pricing-section";
import TechStackSection from "./components/tech-stack-section";
import ComparisonSection from "./components/comparison-section";
import IndustriesSection from "./components/industries-section";
import SuccessStoriesSection from "./components/success-stories-section";
import ProcessSection from "./components/process-section";
import FAQSection from "./components/faq-section";
import CTASection from "./components/cta-section";

export const metadata: Metadata = {
     title: "Hire Dedicated Flutter Developer in Just 3 Days | HFD",
     description:
          "Scale your business faster by hiring dedicated Flutter developers. Rigorously vetted, 5000+ hours experience. 500+ successful projects, trusted by 200+ clients.",
     keywords:
          "hire flutter developer, dedicated flutter developer, flutter app development, cross-platform development, mobile app development",
     openGraph: {
          title: "Hire Dedicated Flutter Developer in Just 3 Days",
          description:
               "Scale your business faster by hiring dedicated Flutter developers. Rigorously vetted, 5000+ hours experience.",
          type: "website",
          url: "https://hireflutterdeveloper.com",
     },
     twitter: {
          card: "summary_large_image",
          title: "Hire Dedicated Flutter Developer in Just 3 Days",
          description:
               "Scale your business faster by hiring dedicated Flutter developers. Rigorously vetted, 5000+ hours experience.",
     },
     alternates: {
          canonical: "https://hireflutterdeveloper.com",
     },
};

export default function HomePage() {
     return (
          <main className="min-h-screen">
               <HeroSection />
               <WhyHireSection />
               <WhyFlutterSection />
               <ServicesSection />
               <PricingSection />
               <TechStackSection />
               <ComparisonSection />
               <IndustriesSection />
               <SuccessStoriesSection />
               <ProcessSection />
               <FAQSection />
               <CTASection />
          </main>
     );
}
