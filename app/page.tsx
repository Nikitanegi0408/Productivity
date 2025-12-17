import { ComponentExample } from "@/components/component-example";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";

export default function Page() {
return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
)
}