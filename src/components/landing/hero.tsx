import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Your AI Copilot for Execution &amp; Coordination
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          CoperVise streamlines your workflow with an AI assistant, automated meeting summaries, and intelligent daily briefings, empowering you to focus on what truly matters.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/signup">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      <div className="mt-12">
        <Image
          src="/images/hero-image.png" // Replace with the actual, optimized hero image
          alt="CoperVise application dashboard showing compliance status"
          width={1200}
          height={750}
          className="mx-auto rounded-xl border shadow-lg"
          data-ai-hint="compliance dashboard risk"
          priority
        />
      </div>
      {/* Consider image optimization techniques like using appropriate formats (WebP), compression, and responsive images. */}
    </section>
  );
}
