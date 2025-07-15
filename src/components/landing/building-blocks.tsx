import { Terminal, Bot, Zap, Files, Share2, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const blocks = [
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Leverage AI to summarize, translate, and generate content effortlessly.'
  },
  {
    icon: Files,
    title: 'Wikis',
    description: 'Centralize knowledge, documents, and standard operating procedures.'
  },
  {
    icon: Terminal,
    title: 'Projects',
    description: 'Manage complex projects without the chaos. One tool for all your tasks.'
  },
  {
    icon: Share2,
    title: 'Docs',
    description: 'Simple, powerful, and collaborative documents for your team.'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Connect CoperVise to your favorite tools and automate repetitive tasks.'
  },
  {
    icon: Search,
    title: 'Universal Search',
    description: 'Find anything instantly across your entire workspace.'
  }
];

export function BuildingBlocks() {
  return (
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful building blocks
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Customize CoperVise to work the way you do. Just drag and drop.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <Card key={block.title} className="bg-background">
              <CardHeader>
                <block.icon className="mb-4 h-8 w-8 text-primary" />
                <CardTitle>{block.title}</CardTitle>
                <CardDescription>{block.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
