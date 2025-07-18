
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Calendar, FileText, Handshake, Mic, PieChart, Rocket, Siren, UserPlus, TrendingUp, DollarSign, BarChart3, ShieldCheck, Briefcase } from "lucide-react";

const features = [
  { name: "Task Management", icon: Calendar, description: "Manage tasks from voice notes, meetings, etc." },
  { name: "Document Hub", icon: FileText, description: "Upload and manage SOPs, contracts, and more." },
  { name: "Data Entry Modules", icon: TrendingUp, description: "Update KPIs, revenue risks, and client data." },
  { name: "Communication Center", icon: Mic, description: "Inbox sorter and investor email tools." },
  { name: "SOP Tracker", icon: FileText, description: "Set renewal alerts and manage SOPs." },
  { name: "Revenue Risk Radar", icon: Siren, description: "Verify AI alerts and mark delayed payments." },
  { name: "Client Sentiment", icon: PieChart, description: "Upload emails and flag communication tone." },
  { name: "Vendor Evaluation", icon: Handshake, description: "Upload vendor docs and add ratings." },
  { name: "Fundraising CRM", icon: DollarSign, description: "Log investor interactions and track pipeline." },
  { name: "Recruiting Bot", icon: UserPlus, description: "Sync job openings and manage resumes." },
  { name: "Legal Compliance", icon: ShieldCheck, description: "Input deadlines and track legal requirements." },
  { name: "Partnership Pipeline", icon: Briefcase, description: "Update status and manage partnerships." },
];

export default function StartupCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Coordinator Dashboard (Startup)</h1>
        <p className="text-muted-foreground">Operational hub for execution, document management, and AI-assisted workflows.</p>
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
