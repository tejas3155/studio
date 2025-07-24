
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, ClipboardCheck, FileText, Gauge, MicVocal, Search, Users, ShieldCheck, FilePieChart, Briefcase, Bot } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";
import { AiDailyBriefing } from "@/components/dashboard/ai-daily-briefing";

const operationsFeatures = [
  { name: "Smart Calendar", icon: Calendar, description: "Manage cross-departmental meetings." },
  { name: "Task Manager", icon: ClipboardCheck, description: "Assign and track tasks across departments." },
  { name: "Voice-to-Task", icon: MicVocal, description: "Convert voice notes to assigned tasks." },
];

const complianceFeatures = [
    { name: "Compliance Dashboard", icon: ShieldCheck, description: "Track SEBI/ISO compliance status." },
    { name: "Contract Summarizer", icon: FileText, description: "Verify AI-generated contract summaries." },
    { name: "Regulatory Tracker", icon: Search, description: "Monitor and action regulatory changes." },
];

const strategyFeatures = [
  { name: "Boardroom Briefing Prep", icon: Briefcase, description: "Generate one-pager briefing packs." },
  { name: "Executive Snapshot", icon: Gauge, description: "Review and confirm weekly snapshots." },
  { name: "Department Heatmaps", icon: FilePieChart, description: "Update workload and risk levels." },
];

const FeatureCard = ({ feature }: { feature: { name: string; icon: React.ElementType, description: string } }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate data loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{feature.name}</CardTitle>
        <feature.icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        ) : (
          <>
            <p className="text-xs text-muted-foreground">
              {feature.description}
            </p>
             <div className="text-2xl font-bold mt-2">...</div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default function CorporateCoordinatorDashboard() {
  return (
    <div>
        <div className="mb-4">
            <Greeting />
            <p className="text-muted-foreground">Oversee corporate operations, compliance, and cross-departmental workflows.</p>
        </div>
      
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mb-6">
             <div className="lg:col-span-2">
                <CalendarWithTasks />
            </div>
            <AiDailyBriefing />
        </div>

       <Accordion type="multiple" defaultValue={['operations', 'compliance', 'strategy']} className="w-full space-y-4">
        <AccordionItem value="operations" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Operations</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {operationsFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="compliance" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Compliance & Legal</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {complianceFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="strategy" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Strategy & Reporting</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {strategyFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      <div className="mt-6 grid grid-cols-1 gap-6">
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Bot className="h-6 w-6 text-primary" />
                <div>
                    <CardTitle>Ask CoperVise</CardTitle>
                    <CardDescription>Your AI assistant for corporate data and policies.</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p>Chat interface will be available here.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
