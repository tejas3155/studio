import Image from 'next/image';

const features = [
  {
    title: 'AI-Powered Assistance',
    description: 'Let CoperVise handle the mundane. Summarize long documents, draft emails, and get intelligent suggestions to boost your productivity. Your AI partner for smarter work.',
    image: 'https://placehold.co/1024x768.png',
    aiHint: 'artificial intelligence'
  },
  {
    title: 'Consolidate your tools. Cut costs.',
    description: 'Tired of juggling apps? CoperVise brings your wikis, docs, and projects into one unified space. Simplify your workflow and reduce your software spend.',
    image: 'https://placehold.co/1024x768.png',
    aiHint: 'team collaboration'
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-20">
          {features.map((feature, index) => (
            <div key={feature.title} className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {feature.title}
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1024}
                  height={768}
                  data-ai-hint={feature.aiHint}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
