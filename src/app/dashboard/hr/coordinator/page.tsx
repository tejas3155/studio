
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Calendar, FileText, Handshake, Mic, PieChart, Rocket, Siren, UserPlus, TrendingUp, DollarSign, BarChart3, ShieldCheck, Briefcase, FilePlus, LogOut, CheckSquare, Users2 } from "lucide-react";

const features = [
  { name: "Smart Calendar", icon: Calendar, description: "Schedule interviews, offsites, and training sessions." },
  { name: "Voice-to-Task", icon: Mic, description: "Convert leader voice notes into actionable HR tasks." },
  { name: "SOP & Policy Hub", icon: FileText, description: "Upload handbooks and manage compliance documents." },
  { name: "Offer Letter Generator", icon: FilePlus, description: "Draft personalized offers with AI assistance." },
  { name: "Leave Tracker", icon: LogOut, description: "Log PTO/sick leave and flag patterns." },
  { name: "Exit Interview Analysis", icon: PieChart, description: "Upload recordings and analyze attrition themes." },
  { name: "Org Chart Builder", icon: Users2, description: "Update reporting lines and manage team structures." },
  { name: "Recruiting Bot", icon: UserPlus, description: "Post jobs, score candidates, and monitor DEI." },
  { name: "Compliance Tasks", icon: ShieldCheck, description: "Track and manage compliance-related action items." },
  { name: "KPI Data Entry", icon: TrendingUp, description: "Input key HR metrics like time-to-hire and turnover." },
  { name: "Vendor Management", icon: Handshake, description: "Evaluate and manage HR-specific vendors." },
  { name: "AI Playbook Builder", icon: Bot, description: "Create standardized playbooks for HR processes." },
];

export default function HrCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">HR Coordinator Dashboard</h1>
        <p className="text-muted-foreground">Operational hub for HR tasks, document management, and AI-assisted workflows.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
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
