import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Smart Compliance Automation &amp; Monitoring
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          CoperVise prevents regulatory slip-ups, auto-tracks obligations, and offers intelligent oversight using AI, workflows, and smart calendars.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/register">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      <div className="mt-12">
        <Image
          src="https://placehold.co/1200x750.png"
          alt="CoperVise application dashboard showing compliance status"
          width={1200}
          height={750}
          className="mx-auto rounded-xl border shadow-lg"
          data-ai-hint="compliance dashboard risk"
        />
      </div>
    </section>
  );
}
