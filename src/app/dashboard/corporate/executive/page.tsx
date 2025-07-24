
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart3, Bot, Briefcase, FilePieChart, Gauge, LineChart, ShieldCheck, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';

const overviewFeatures = [
  { name: "Executive Snapshot", icon: Gauge, description: "Key risks and summaries for the week." },
  { name: "Department Heatmap", icon: FilePieChart, description: "Visualize department workload and risk." },
  { name: "Compliance Overview", icon: ShieldCheck, description: "At-a-glance view of compliance status." },
];

const performanceFeatures = [
  { name: "KPI Dashboard (Corporate)", icon: LineChart, description: "Track corporate and department KPIs." },
  { name: "Revenue Risk (Corporate)", icon: AreaChart, description: "Risks aggregated across business units." },
  { name: "Vendor Risk Matrix", icon: Users, description: "Compare vendor risk profiles." },
];

const strategicFeatures = [
  { name: "Boardroom Briefings", icon: Briefcase, description: "Access and review meeting packs." },
  { name: "Scenario Planner", icon: BarChart3, description: "Model potential business scenarios." },
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

export default function CorporateExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Executive Dashboard (Corporate)</h1>
        <p className="text-muted-foreground">High-level overview of corporate strategy, risk, and compliance.</p>
      </div>

       <Accordion type="multiple" defaultValue={['overview', 'performance', 'strategic']} className="w-full space-y-4">
        <AccordionItem value="overview" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Strategic Overview</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {overviewFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="performance" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Performance & Risk</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {performanceFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="strategic" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Strategic Planning</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {strategicFeatures.map((feature) => (
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
