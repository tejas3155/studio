import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "CoperVise has revolutionized our workflow. The AI assistant saves us hours every week, allowing us to focus on what truly matters.",
    author: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/40x40.png",
    companyLogo: "https://placehold.co/100x40.png?text=Innovate",
    aiHint: "woman portrait"
  },
  {
    quote: "The ability to have all our docs, projects, and wikis in one place is a game-changer. CoperVise is the single source of truth for our entire company.",
    author: "Michael Chen",
    title: "CTO, Tech Solutions",
    avatar: "https://placehold.co/40x40.png",
    companyLogo: "https://placehold.co/100x40.png?text=TechCo",
    aiHint: "man portrait"
  },
  {
    quote: "As a startup, we need tools that are powerful yet affordable. CoperVise delivers on both fronts, with features that scale as we grow.",
    author: "Emily Rodriguez",
    title: "Founder, Creative Minds",
    avatar: "https://placehold.co/40x40.png",
    companyLogo: "https://placehold.co/100x40.png?text=Creative",
    aiHint: "woman portrait"
  },
];

const companyLogos = [
  { name: 'Company A', logo: 'https://placehold.co/120x50.png?text=CompanyA' },
  { name: 'Company B', logo: 'https://placehold.co/120x50.png?text=CompanyB' },
  { name: 'Company C', logo: 'https://placehold.co/120x50.png?text=CompanyC' },
  { name: 'Company D', logo: 'https://placehold.co/120x50.png?text=CompanyD' },
  { name: 'Company E', logo: 'https://placehold.co/120x50.png?text=CompanyE' },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join a global movement. Unleash your potential.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From startups to Fortune 500s, millions use CoperVise to power their teams.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <blockquote className="text-lg">"{testimonial.quote}"</blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Image src={testimonial.avatar} alt={testimonial.author} width={40} height={40} className="rounded-full" data-ai-hint={testimonial.aiHint} />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-20">
          <h3 className="text-center text-lg font-semibold text-muted-foreground">
            Trusted by teams at
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {companyLogos.map((company) => (
              <Image key={company.name} src={company.logo} alt={company.name} width={120} height={50} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="company logo"/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
