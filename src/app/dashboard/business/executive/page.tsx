
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, Bot, LineChart, PieChart, Siren, Wallet, Waves, FileText } from "lucide-react";
import { Greeting } from '@/components/dashboard/greeting';
import { CalendarWithTasks } from '@/components/dashboard/calendar-with-tasks';

const strategicFeatures = [
  { name: "Priority Alerts", icon: Siren },
  { name: "AI Daily Briefing", icon: Bot },
  { name: "Competitive Intelligence", icon: BarChart },
];

const performanceFeatures = [
  { name: "KPI Tracker", icon: LineChart },
  { name: "Forecast Variance", icon: Waves },
  { name: "Client Sentiment", icon: PieChart },
];

const riskFeatures = [
  { name: "Revenue Risk", icon: BarChart },
  { name: "Expense Anomalies", icon: Wallet },
  { name: "Contract Health", icon: FileText },
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
              Visualizations for {feature.name} will be shown here.
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default function BusinessExecutiveDashboard() {
  return (
    <div>
        <div className="mb-4">
            <Greeting />
            <p className="text-muted-foreground">High-level overview of all strategic operations.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
                <CalendarWithTasks />
            </div>
        </div>
      
      <Accordion type="multiple" defaultValue={['strategic', 'performance', 'risk']} className="w-full space-y-4">
        <AccordionItem value="strategic" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Strategic Overview</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {strategicFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="performance" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Performance Metrics</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {performanceFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="risk" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Risk & Compliance</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {riskFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
