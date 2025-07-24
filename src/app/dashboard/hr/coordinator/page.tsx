
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Calendar, FileText, Handshake, Mic, PieChart, UserPlus, TrendingUp, ShieldCheck, FilePlus, LogOut, Users2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";
import { AiDailyBriefing } from "@/components/dashboard/ai-daily-briefing";

const coreFeatures = [
  { name: "Smart Calendar", icon: Calendar, description: "Schedule interviews, offsites, and training sessions." },
  { name: "Voice-to-Task", icon: Mic, description: "Convert leader voice notes into actionable HR tasks." },
  { name: "SOP & Policy Hub", icon: FileText, description: "Upload handbooks and manage compliance documents." },
  { name: "Leave Tracker", icon: LogOut, description: "Log PTO/sick leave and flag patterns." },
];

const recruitingFeatures = [
  { name: "Offer Letter Generator", icon: FilePlus, description: "Draft personalized offers with AI assistance." },
  { name: "Recruiting Bot", icon: UserPlus, description: "Post jobs, score candidates, and monitor DEI." },
  { name: "Org Chart Builder", icon: Users2, description: "Update reporting lines and manage team structures." },
];

const analyticsFeatures = [
  { name: "Exit Interview Analysis", icon: PieChart, description: "Upload recordings and analyze attrition themes." },
  { name: "Compliance Tasks", icon: ShieldCheck, description: "Track and manage compliance-related action items." },
  { name: "KPI Data Entry", icon: TrendingUp, description: "Input key HR metrics like time-to-hire and turnover." },
  { name: "Vendor Management", icon: Handshake, description: "Evaluate and manage HR-specific vendors." },
  { name: "AI Playbook Builder", icon: Bot, description: "Create standardized playbooks for HR processes." },
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

export default function HrCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <Greeting />
        <p className="text-muted-foreground">Operational hub for HR tasks, document management, and AI-assisted workflows.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mb-6">
        <div className="lg:col-span-2">
            <CalendarWithTasks />
        </div>
        <AiDailyBriefing />
      </div>

      <Accordion type="multiple" defaultValue={['core', 'recruiting', 'analytics']} className="w-full space-y-4">
        <AccordionItem value="core" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Core HR Operations</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {coreFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="recruiting" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Recruiting & Onboarding</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recruitingFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="analytics" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Analytics & Compliance</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {analyticsFeatures.map((feature) => (
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
                    <CardDescription>Your AI assistant for employee queries and policy information.</CardDescription>
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
