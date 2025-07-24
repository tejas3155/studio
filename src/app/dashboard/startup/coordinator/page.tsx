
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Calendar, FileText, Handshake, Mic, PieChart, UserPlus, TrendingUp, DollarSign, ShieldCheck, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';

const operationsFeatures = [
  { name: "Task Management", icon: Calendar, description: "Manage tasks from voice notes, meetings, etc." },
  { name: "Document Hub", icon: FileText, description: "Upload and manage SOPs, contracts, and more." },
  { name: "Communication Center", icon: Mic, description: "Inbox sorter and investor email tools." },
  { name: "SOP Tracker", icon: FileText, description: "Set renewal alerts and manage SOPs." },
];

const growthFeatures = [
  { name: "Data Entry Modules", icon: TrendingUp, description: "Update KPIs, revenue risks, and client data." },
  { name: "Revenue Risk Radar", icon: TrendingUp, description: "Verify AI alerts and mark delayed payments." },
  { name: "Client Sentiment", icon: PieChart, description: "Upload emails and flag communication tone." },
  { name: "Partnership Pipeline", icon: Briefcase, description: "Update status and manage partnerships." },
];

const corporateFeatures = [
  { name: "Vendor Evaluation", icon: Handshake, description: "Upload vendor docs and add ratings." },
  { name: "Fundraising CRM", icon: DollarSign, description: "Log investor interactions and track pipeline." },
  { name: "Recruiting Bot", icon: UserPlus, description: "Sync job openings and manage resumes." },
  { name: "Legal Compliance", icon: ShieldCheck, description: "Input deadlines and track legal requirements." },
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


export default function StartupCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Coordinator Dashboard (Startup)</h1>
        <p className="text-muted-foreground">Operational hub for execution, document management, and AI-assisted workflows.</p>
      </div>

      <Accordion type="multiple" defaultValue={['operations', 'growth', 'corporate']} className="w-full space-y-4">
        <AccordionItem value="operations" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Core Operations</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {operationsFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="growth" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Growth & Revenue</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {growthFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="corporate" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Corporate & Fundraising</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {corporateFeatures.map((feature) => (
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
                    <CardDescription>Your AI assistant for product data and team tasks.</CardDescription>
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
