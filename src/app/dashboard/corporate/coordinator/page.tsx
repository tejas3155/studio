
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, ClipboardCheck, FileText, Gauge, MicVocal, Search, Users, ShieldCheck, FilePieChart, Briefcase, Bot } from "lucide-react";

const coordinatorFeatures = [
  { name: "Smart Calendar", icon: Calendar, description: "Manage cross-departmental meetings." },
  { name: "Task Manager", icon: ClipboardCheck, description: "Assign and track tasks across departments." },
  { name: "Voice-to-Task", icon: MicVocal, description: "Convert voice notes to assigned tasks." },
  { name: "Compliance Dashboard", icon: ShieldCheck, description: "Track SEBI/ISO compliance status." },
  { name: "Contract Summarizer", icon: FileText, description: "Verify AI-generated contract summaries." },
  { name: "Regulatory Tracker", icon: Search, description: "Monitor and action regulatory changes." },
  { name: "Boardroom Briefing Prep", icon: Briefcase, description: "Generate one-pager briefing packs." },
  { name: "Executive Snapshot", icon: Gauge, description: "Review and confirm weekly snapshots." },
  { name: "Department Heatmaps", icon: FilePieChart, description: "Update workload and risk levels." },
];

export default function CorporateCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Coordinator Dashboard (Corporate)</h1>
        <p className="text-muted-foreground">Oversee corporate operations, compliance, and cross-departmental workflows.</p>
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
