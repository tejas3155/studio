
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Gauge, Map, ShieldCheck, Siren, Target, Wallet, Scale } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";

const citizenServicesFeatures = [
  { name: "Grievance Heatmap", icon: Map, description: "Real-time map of citizen complaint density and sentiment." },
  { name: "Public Trust Index", icon: ShieldCheck, description: "District-wise satisfaction scores mapped to service delivery quality." },
];

const performanceFeatures = [
  { name: "Scheme Performance", icon: Target, description: "Fund utilization vs. beneficiary reach for key government schemes." },
  { name: "Department KPIs", icon: Gauge, description: "Scorecards for departmental performance against key metrics." },
  { name: "Revenue & Fiscal Risk", icon: Wallet, description: "Geospatial view of tax collection shortfalls and fiscal risks." },
];

const strategicFeatures = [
  { name: "Policy Simulator", icon: Bot, description: "Model the fiscal and social impact of new policies before implementation." },
  { name: "Legislative Tracker", icon: Scale, description: "Monitor bill progress and analyze stakeholder sentiment." },
  { name: "Disaster Response", icon: Siren, description: "Live crisis map with resource tracking during emergencies." },
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


export default function GovernmentExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <Greeting />
        <p className="text-muted-foreground">Strategic command center for policy impact, public sentiment, and scheme performance.</p>
      </div>
      
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <CalendarWithTasks />
      </div>

      <Accordion type="multiple" defaultValue={['citizen', 'performance', 'strategic']} className="w-full space-y-4">
        <AccordionItem value="citizen" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Citizen Services & Sentiment</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {citizenServicesFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="performance" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Performance & Fiscal Health</h3>
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
            <h3 className="text-lg font-semibold">Strategic Planning & Crisis Management</h3>
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
                    <CardTitle>Ask CoperVise Govt</CardTitle>
                    <CardDescription>Your AI assistant for policy analysis, historical data, and crisis management.</CardDescription>
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
