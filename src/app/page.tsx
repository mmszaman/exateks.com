import { LandingLayout } from '@/layouts';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ProductsSection } from '@/components/sections/products-section';
import { CTASection } from '@/components/sections/cta-section';
import { FeaturesSection } from '@/components/sections/features-section';

export default function Home() {
  return (
    <LandingLayout>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ProductsSection />
      <CTASection />
    </LandingLayout>
  );
}
