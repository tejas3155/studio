
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart3, Bot, Briefcase, FilePieChart, Gauge, LineChart, ShieldCheck, Users, HeartPulse, DollarSign, TrendingUp, Handshake, Users2 } from "lucide-react";

const executiveFeatures = [
  { name: "Attrition Risk Radar", icon: HeartPulse, description: "Heatmap of departments/roles with flight risk." },
  { name: "DEI & Culture Tracker", icon: Handshake, description: "Diversity progress and culture health score." },
  { name: "Compliance Health Monitor", icon: ShieldCheck, description: "Risk dials for labor laws, policy renewals, and audits." },
  { name: "Cost-to-Hire Analytics", icon: DollarSign, description: "ROI dashboard for hiring spend vs. new hire productivity." },
  { name: "Employee Sentiment Pulse", icon: TrendingUp, description: "Real-time mood map at the team/department level." },
  { name: "AI Daily Briefing", icon: Bot, description: "Top 3 urgent HR tasks and strategic priorities." },
  { name: "Org Chart", icon: Users2, description: "Visualize the organizational structure." },
  { name: "Workforce Analytics", icon: BarChart3, description: "Key HR KPIs and trends." },
];

export default function HrExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">HR Executive Dashboard</h1>
        <p className="text-muted-foreground">Strategic workforce insights, compliance risks, and culture analytics.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {executiveFeatures.map((feature) => (
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
                    <CardDescription>Your AI assistant for HR policies, employee data, and compliance questions.</CardDescription>
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
