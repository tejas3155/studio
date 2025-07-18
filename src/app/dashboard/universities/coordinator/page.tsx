
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCheck, Bot, Calendar, GanttChartSquare, GraduationCap, Mic, Presentation, Search, FileText, Users, FlaskConical, HandCoins } from "lucide-react";

const coordinatorFeatures = [
  { name: "Smart Calendar & AI Scheduler", icon: Calendar, description: "Manage faculty meetings, committees, and resolve scheduling conflicts automatically." },
  { name: "Task Nudger & Deadline Tracker", icon: GanttChartSquare, description: "Set and track deadlines for grants, grades, and reports. Escalate missed deadlines." },
  { name: "Doc Classifier & Portfolio Builder", icon: FileText, description: "Upload faculty research and teaching materials. AI compiles promotion dossiers." },
  { name: "Accreditation Toolkit", icon: BookCheck, description: "Upload past reports (NAAC/NBA) and manage evidence for accreditation criteria." },
  { name: "Grant Writer", icon: HandCoins, description: "Input research abstracts and budgets to get AI-drafted grant proposals." },
  { name: "Class Pulse Monitor", icon: GraduationCap, description: "Log attendance and assignment data to predict at-risk students and courses." },
  { name: "Policy Hub & SOP Tracker", icon: Search, description: "Manage academic policies and SOPs, with AI alerts for non-compliance." },
  { name: "Curriculum Mapper", icon: Users, description: "Upload syllabi to map curriculum alignment with accreditation standards." },
  { name: "Plagiarism Shield", icon: Presentation, description: "Upload student submissions for plagiarism and stylistic fraud detection." },
  { name: "Tenure Review Accelerator", icon: FlaskConical, description: "Upload candidate files for AI-powered dossier summarization and benchmarking." },
];

export default function UniversityCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Coordinator Dashboard (University)</h1>
        <p className="text-muted-foreground">Operational hub for accreditation prep, faculty support, and grant management.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coordinatorFeatures.map((feature) => (
          <Card key={feature.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{feature.name}</CardTitle>
              <feature.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
               <div className="text-2xl font-bold mt-2">...</div>
            </CardContent>
          </Card>
        ))}
      </div>
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
