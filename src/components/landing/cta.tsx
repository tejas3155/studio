import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';

export function Cta() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <Briefcase className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Automate Your Life. Elevate Your Success.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See how CoperVise can be your ultimate strategic advantage.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/signup">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
