import { Bot, CalendarCheck, LayoutDashboard, Mic, ShieldCheck, Star, Vault } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const blocks = [
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Just type what you need—tasks, notes, or reminders. Our AI will automatically categorize and organize it for you.'
  },
  {
    icon: CalendarCheck,
    title: 'AI-Powered Meetings',
    description: 'Get AI-generated prep points before your meetings and drafted follow-up emails right after.'
  },
  {
    icon: Mic,
    title: 'AI Daily Briefing',
    description: 'Start your day with an intelligent summary of your schedule and priorities, complete with an audio playback.'
  },
  {
    icon: Star,
    title: 'AI Event Prioritization',
    description: 'Our AI analyzes and prioritizes important events, ensuring executives focus on what matters most.'
  },
  {
    icon: Vault,
    title: 'Documents Vault',
    description: 'CoperVise values your executive documents. They can be accessed only by you.'
  },
  {
    icon: ShieldCheck,
    title: 'Institutional Frameworks',
    description: 'Framework-ready for NAAC, NBA, ISO, NIRF, and more. Perfect for educational and corporate compliance.'
  }
];

export function BuildingBlocks() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Execution, Coordination, and Compliance
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            CoperVise provides a single pane of truth for all your institutional needs. Go from fragmented documents and emails to a structured, automated system.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <Card key={block.title} className="bg-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
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
