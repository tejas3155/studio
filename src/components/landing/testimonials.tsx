import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "CoperVise is our single source of truth for compliance. The AI-powered alerts have saved us from potential fines multiple times. It's a must-have.",
    author: "Anjali Mehta",
    title: "Compliance Officer, FinTech Corp",
    avatar: "https://placehold.co/40x40.png",
    aiHint: "woman portrait"
  },
  {
    quote: "As a founder, I can finally sleep at night. CoperVise gives me a real-time heatmap of our compliance risks. It's a game-changer for governance.",
    author: "Rohan Desai",
    title: "CEO, InnovateAI",
    avatar: "https://placehold.co/40x40.png",
    aiHint: "man portrait"
  },
  {
    quote: "Audit-readiness used to be a frantic, quarterly fire-drill. Now, with CoperVise's audit trail logging, we can generate reports in minutes.",
    author: "Priya Sharma",
    title: "Legal Head, HealthCare Solutions",
    avatar: "https://placehold.co/40x40.png",
    aiHint: "woman portrait"
  },
];

const companyLogos = [
  { name: 'Company A', logo: 'https://placehold.co/120x50.png?text=FinTechCorp' },
  { name: 'Company B', logo: 'https://placehold.co/120x50.png?text=InnovateAI' },
  { name: 'Company C', logo: 'https://placehold.co/120x50.png?text=HealthCare' },
  { name: 'Company D', logo: 'https://placehold.co/120x50.png?text=InfraCo' },
  { name: 'Company E', logo: 'https://placehold.co/120x50.png?text=Logistics+' },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Teams from fast-growing startups to established enterprises rely on CoperVise for proactive compliance and governance.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="flex flex-col bg-background">
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
            Powering compliance at forward-thinking companies
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
