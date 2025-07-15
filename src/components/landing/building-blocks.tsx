import { FileCheck, Bot, Zap, Users, CalendarClock, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const blocks = [
  {
    icon: Bot,
    title: 'AI for Compliance',
    description: 'Your built-in assistant for NAAC, ISO, audits and other compliance events.'
  },
  {
    icon: FileCheck,
    title: 'Coordinator-Driven Workflows',
    description: 'Manage tasks with executive summaries. No more chasing for updates.'
  },
  {
    icon: Users,
    title: 'Institutional Hierarchy',
    description: 'Model your organization with departments, roles, and responsibilities.'
  },
  {
    icon: CalendarClock,
    title: 'Smart Compliance Calendar',
    description: 'Auto-linked obligations and deadlines to keep you on track.'
  },
  {
    icon: Zap,
    title: 'Framework-Ready',
    description: 'Plug-and-play templates for NAAC, NBA, ISO, NIRF, and more.'
  },
  {
    icon: Mail,
    title: 'AI-Generated Reminders',
    description: 'Automate follow-up emails and notifications to ensure tasks get done.'
  }
];

export function BuildingBlocks() {
  return (
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Platform for Institutional Excellence
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            CoperVise integrates the critical functions that Notion, Airtable, and traditional ERPs can't handle together.
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
