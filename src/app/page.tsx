import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { FeatureHighlights } from '@/components/landing/feature-highlights';
import { BuildingBlocks } from '@/components/landing/building-blocks';
import { Cta } from '@/components/landing/cta';
import { WhoIsItFor } from '@/components/landing/who-is-it-for';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureHighlights />
        <BuildingBlocks />
        <WhoIsItFor />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
