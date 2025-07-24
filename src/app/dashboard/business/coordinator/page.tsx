
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { BarChart3, Bot, Calendar, HeartHandshake, Mic, Siren, TrendingUp, Wallet, FileText, Users } from "lucide-react";
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";

const operationalFeatures = [
  { name: "Priority Alerts", icon: Siren },
  { name: "Smart Calendar", icon: Calendar },
  { name: "Voice-to-Task", icon: Mic },
  { name: "Team Management", icon: Users },
];

const financialFeatures = [
  { name: "Revenue Risk Radar", icon: Wallet },
  { name: "KPI Tracker", icon: TrendingUp },
  
];

const clientFeatures = [
  { name: "Client Sentiment", icon: HeartHandshake },
  { name: "Contract Health", icon: FileText },
  { name: "Competitive Intelligence", icon: BarChart3 },
];

const aiFeatures = [
    { name: "AI Daily Briefing", icon: Bot },
];

const FeatureCard = ({ feature }: { feature: { name: string; icon: React.ElementType } }) => {
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
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <>
            <div className="text-2xl font-bold">...</div>
            <p className="text-xs text-muted-foreground">
              Details for {feature.name} will be shown here.
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};


export default function BusinessCoordinatorDashboard() {
  return (
    <div>
        <div className="mb-4">
            <Greeting />
            <p className="text-muted-foreground">Manage day-to-day operations and team coordination.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <CalendarWithTasks />
        </div>

       <Accordion type="multiple" defaultValue={['operational', 'financial', 'client']} className="w-full space-y-4">
        <AccordionItem value="operational" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Operational Tools</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {operationalFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="financial" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Financial & Performance</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {financialFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="client" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Client & Market Intelligence</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {clientFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="ai" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {aiFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
