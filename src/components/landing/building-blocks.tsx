import { ShieldAlert, Bot, CalendarClock, Workflow, BarChart3, Fingerprint } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const blocks = [
  {
    icon: Bot,
    title: 'AI Event Analysis',
    description: 'Checks if tasks meet compliance rules (SEBI, GDPR, ISO).'
  },
  {
    icon: ShieldAlert,
    title: 'PenaltyGuard™ Alerts',
    description: 'Predictive engine alerts you before an obligation becomes a fine.'
  },
  {
    icon: CalendarClock,
    title: 'Smart Compliance Calendar',
    description: 'Auto-syncs obligations across departments with real-time updates.'
  },
  {
    icon: Fingerprint,
    title: 'Audit Trail Logging',
    description: 'Everything is time-stamped and stored with context for legal audits.'
  },
  {
    icon: BarChart3,
    title: 'Risk Heatmaps',
    description: 'Visualize potential financial or legal risk of missed items.'
  },
  {
    icon: Workflow,
    title: 'Dynamic Workflow Engine',
    description: 'Create adaptive flows for SOPs that auto-trigger based on rules.'
  }
];

export function BuildingBlocks() {
  return (
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Platform Built for Proactive Compliance
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            CoperVise provides a single pane of truth for all your compliance needs. Go from fragmented documents and emails to a structured, automated system.
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
