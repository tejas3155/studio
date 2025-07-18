
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Calendar, FileText, Handshake, Mic, PieChart, Rocket, Siren, UserPlus, TrendingUp, DollarSign, BarChart3, ShieldCheck, Briefcase, Archive, Scale, Megaphone, Flag, Map } from "lucide-react";

const features = [
  { name: "File Tracker", icon: Archive, description: "Log and monitor physical and digital file movements between departments." },
  { name: "Task & Calendar", icon: Calendar, description: "Manage meetings, public hearings, and internal deadlines." },
  { name: "SOP Tracker", icon: FileText, description: "Ensure protocols for public services and disaster response are up-to-date." },
  { name: "Grievance Logging", icon: Map, description: "Input and categorize citizen complaints by region and service type." },
  { name: "RTI Response Generator", icon: Scale, description: "Upload RTI queries and use AI to draft compliant responses." },
  { name: "Public Notice Engine", icon: Megaphone, description: "Draft and manage public notices for hearings and new regulations." },
  { name: "Scheme Data Entry", icon: TrendingUp, description: "Update progress for government schemes like PMGSY and Ayushman Bharat." },
  { name: "Vendor Evaluation", icon: Handshake, description: "Track performance of vendors and contractors for public projects." },
  { name: "Voice-to-Task", icon: Mic, description: "Convert voice notes from officials into actionable tasks and file notes." },
  { name: "Disaster Response", icon: Siren, description: "Activate SOPs and log resource deployment during crises." },
  { name: "Election Integrity", icon: Flag, description: "Log polling booth preparations and report on readiness." },
  { name: "Statement Builder", icon: Briefcase, description: "Use AI to draft press releases and public statements from key points." },
];

export default function GovernmentCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Coordinator Dashboard (Government)</h1>
        <p className="text-muted-foreground">Operational hub for file management, public communication, and scheme tracking.</p>
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
                    <CardTitle>Ask CoperVise Govt</CardTitle>
                    <CardDescription>Your AI assistant for policy queries, historical data, and file status.</CardDescription>
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
