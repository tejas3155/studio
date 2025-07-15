import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Plan, manage, & achieve. With your AI assistant.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          CoperVise is the connected workspace where better, faster work happens. Now with generative AI.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/register">
            Register
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      <div className="mt-12">
        <Image
          src="https://placehold.co/1200x750.png"
          alt="CoperVise application screenshot"
          width={1200}
          height={750}
          className="mx-auto rounded-xl border shadow-lg"
          data-ai-hint="app screenshot"
        />
      </div>
    </section>
  );
}
