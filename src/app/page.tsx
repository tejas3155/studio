import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import dynamic from 'next/dynamic';
const FeatureHighlights = dynamic(() => import('@/components/landing/feature-highlights').then(mod => mod.FeatureHighlights));
const BuildingBlocks = dynamic(() => import('@/components/landing/building-blocks').then(mod => mod.BuildingBlocks));
const WhoIsItFor = dynamic(() => import('@/components/landing/who-is-it-for').then(mod => mod.WhoIsItFor));
const Cta = dynamic(() => import('@/components/landing/cta').then(mod => mod.Cta));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
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
