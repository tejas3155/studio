import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { FeatureHighlights } from '@/components/landing/feature-highlights';
import { BuildingBlocks } from '@/components/landing/building-blocks';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureHighlights />
        <BuildingBlocks />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
