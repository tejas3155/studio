
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bot, DollarSign, FileText, PieChart, Rocket, Siren, Users, TrendingUp, BarChart3, Waves, Wallet } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";

const priorityFeatures = [
  { name: "Priority Alerts", icon: Siren, description: "Critical issues needing immediate attention." },
  { name: "AI Daily Briefing", icon: Bot, description: "Your daily summary of tasks and events." },
  { name: "Revenue Risk", icon: BarChart, description: "Delayed payments and at-risk projects." },
];

const performanceFeatures = [
  { name: "Client Sentiment", icon: PieChart, description: "Overall health of client communications." },
  { name: "KPI Tracker", icon: TrendingUp, description: "CAC, LTV, MRR, Churn." },
  { name: "Forecast Variance", icon: Waves, description: "Actual performance vs. projections." },
  { name: "Expense Anomalies", icon: Wallet, description: "Unusual spending patterns flagged by AI." },
];

const strategicFeatures = [
  { name: "Contract Health", icon: FileText, description: "Key contract milestones and renewals." },
  { name: "Burn Rate Monitor", icon: DollarSign, description: "Cash runway and monthly burn rate." },
  { name: "Competitive Intelligence", icon: BarChart3, description: "Updates and analysis on competitors." },
  { name: "Product Launch Tracker", icon: Rocket, description: "Status of upcoming product launches." },
  { name: "Employee Sentiment", icon: Users, description: "Overall team morale and feedback trends." },
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


export default function StartupExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <Greeting />
        <p className="text-muted-foreground">High-level overview of your startup's health and trajectory.</p>
      </div>

       <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
                <CalendarWithTasks />
            </div>
       </div>

       <Accordion type="multiple" defaultValue={['priority', 'performance', 'strategic']} className="w-full space-y-4">
        <AccordionItem value="priority" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Priority Hub</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {priorityFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="performance" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Performance & Financials</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {performanceFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="strategic" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Strategic Initiatives</h3>
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
                    <CardDescription>Your AI assistant for startup data, cap tables, and market analysis.</CardDescription>
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
