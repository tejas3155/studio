
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Bot, Handshake, HeartPulse, ShieldCheck, DollarSign, TrendingUp, Users2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";

const talentFeatures = [
  { name: "Attrition Risk Radar", icon: HeartPulse, description: "Heatmap of departments/roles with flight risk." },
  { name: "DEI & Culture Tracker", icon: Handshake, description: "Diversity progress and culture health score." },
  { name: "Employee Sentiment Pulse", icon: TrendingUp, description: "Real-time mood map at the team/department level." },
];

const performanceFeatures = [
  { name: "Cost-to-Hire Analytics", icon: DollarSign, description: "ROI dashboard for hiring spend vs. new hire productivity." },
  { name: "Compliance Health Monitor", icon: ShieldCheck, description: "Risk dials for labor laws, policy renewals, and audits." },
  { name: "Workforce Analytics", icon: BarChart3, description: "Key HR KPIs and trends." },
];

const orgFeatures = [
    { name: "AI Daily Briefing", icon: Bot, description: "Top 3 urgent HR tasks and strategic priorities." },
    { name: "Org Chart", icon: Users2, description: "Visualize the organizational structure." },
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

export default function HrExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <Greeting />
        <p className="text-muted-foreground">Strategic workforce insights, compliance risks, and culture analytics.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mb-6">
        <div className="lg:col-span-2">
            <CalendarWithTasks />
        </div>
      </div>

      <Accordion type="multiple" defaultValue={['talent', 'performance', 'org']} className="w-full space-y-4">
        <AccordionItem value="talent" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Talent & Culture</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {talentFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="performance" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Performance & Compliance</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {performanceFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="org" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Organizational Tools</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {orgFeatures.map((feature) => (
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
                    <CardDescription>Your AI assistant for HR policies, employee data, and compliance questions.</CardDescription>
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
