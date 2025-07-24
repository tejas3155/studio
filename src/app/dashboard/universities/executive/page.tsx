
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Bot, Briefcase, FilePieChart, GraduationCap, HandCoins, ShieldCheck, Users, FlaskConical } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";

const institutionalHealthFeatures = [
  { name: "Accreditation Health Monitor", icon: ShieldCheck, description: "Compliance scorecard for accreditation standards (NAAC, NBA)." },
  { name: "Student Success Radar", icon: GraduationCap, description: "Monitor at-risk student trends from LMS data and advisor notes." },
  { name: "Alumni Engagement Engine", icon: Briefcase, description: "Predict donor likelihood and analyze the lifetime value of alumni networks." },
];

const academicExcellenceFeatures = [
  { name: "Grant Performance Dashboard", icon: HandCoins, description: "Track funding pipeline, ROI by department, and identify potential RFPs." },
  { name: "Research Impact Tracker", icon: FlaskConical, description: "Track citations, patents, and industry collaborations by department." },
  { name: "Curriculum & Integrity", icon: FilePieChart, description: "Oversee curriculum alignment and view department-level integrity reports." },
];

const resourceManagementFeatures = [
  { name: "Faculty Workload Balancer", icon: Users, description: "Heatmap of teaching, research, and service hours to prevent burnout." },
  { name: "Space Utilization Optimizer", icon: BarChart3, description: "Analyze room bookings and class sizes to recommend cost savings." },
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

export default function UniversityExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <Greeting />
        <p className="text-muted-foreground">High-level insights on accreditation, research, faculty, and student success.</p>
      </div>
      
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <CalendarWithTasks />
      </div>

       <Accordion type="multiple" defaultValue={['health', 'excellence', 'resources']} className="w-full space-y-4">
        <AccordionItem value="health" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Institutional Health</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {institutionalHealthFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="excellence" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Academic Excellence</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {academicExcellenceFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="resources" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Resource Management</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {resourceManagementFeatures.map((feature) => (
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
                    <CardTitle>Ask CoperVise Academic</CardTitle>
                    <CardDescription>Your AI assistant for academic data, compliance, and strategic planning.</CardDescription>
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
