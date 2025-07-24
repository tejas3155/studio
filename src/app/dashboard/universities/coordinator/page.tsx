
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCheck, Bot, Calendar, GanttChartSquare, GraduationCap, Mic, Presentation, Search, FileText, Users, FlaskConical, HandCoins } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from 'react';
import { Greeting } from "@/components/dashboard/greeting";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";
import { AiDailyBriefing } from "@/components/dashboard/ai-daily-briefing";

const academicOpsFeatures = [
  { name: "Smart Calendar & AI Scheduler", icon: Calendar, description: "Manage faculty meetings, committees, and resolve scheduling conflicts automatically." },
  { name: "Task Nudger & Deadline Tracker", icon: GanttChartSquare, description: "Set and track deadlines for grants, grades, and reports. Escalate missed deadlines." },
  { name: "Class Pulse Monitor", icon: GraduationCap, description: "Log attendance and assignment data to predict at-risk students and courses." },
];

const complianceFeatures = [
  { name: "Doc Classifier & Portfolio Builder", icon: FileText, description: "Upload faculty research and teaching materials. AI compiles promotion dossiers." },
  { name: "Accreditation Toolkit", icon: BookCheck, description: "Upload past reports (NAAC/NBA) and manage evidence for accreditation criteria." },
  { name: "Policy Hub & SOP Tracker", icon: Search, description: "Manage academic policies and SOPs, with AI alerts for non-compliance." },
  { name: "Plagiarism Shield", icon: Presentation, description: "Upload student submissions for plagiarism and stylistic fraud detection." },
];

const facultySupportFeatures = [
  { name: "Grant Writer", icon: HandCoins, description: "Input research abstracts and budgets to get AI-drafted grant proposals." },
  { name: "Curriculum Mapper", icon: Users, description: "Upload syllabi to map curriculum alignment with accreditation standards." },
  { name: "Tenure Review Accelerator", icon: FlaskConical, description: "Upload candidate files for AI-powered dossier summarization and benchmarking." },
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


export default function UniversityCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <Greeting />
        <p className="text-muted-foreground">Operational hub for accreditation prep, faculty support, and grant management.</p>
      </div>
      
       <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
                <CalendarWithTasks />
            </div>
            <AiDailyBriefing />
       </div>

      <Accordion type="multiple" defaultValue={['ops', 'compliance', 'support']} className="w-full space-y-4">
        <AccordionItem value="ops" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Academic Operations</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {academicOpsFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="compliance" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Compliance & Accreditation</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {complianceFeatures.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="support" className="border rounded-lg bg-card">
          <AccordionTrigger className="px-6 py-4">
            <h3 className="text-lg font-semibold">Faculty & Research Support</h3>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {facultySupportFeatures.map((feature) => (
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
                    <CardDescription>Your AI assistant for university policies, faculty data, and accreditation queries.</CardDescription>
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
