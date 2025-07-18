
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart3, Bot, Briefcase, FilePieChart, Gauge, LineChart, ShieldCheck, Users } from "lucide-react";

const executiveFeatures = [
  { name: "Executive Snapshot", icon: Gauge, description: "Key risks and summaries for the week." },
  { name: "Department Heatmap", icon: FilePieChart, description: "Visualize department workload and risk." },
  { name: "Compliance Overview", icon: ShieldCheck, description: "At-a-glance view of compliance status." },
  { name: "Vendor Risk Matrix", icon: Users, description: "Compare vendor risk profiles." },
  { name: "Revenue Risk (Corporate)", icon: AreaChart, description: "Risks aggregated across business units." },
  { name: "KPI Dashboard (Corporate)", icon: LineChart, description: "Track corporate and department KPIs." },
  { name: "Boardroom Briefings", icon: Briefcase, description: "Access and review meeting packs." },
  { name: "Scenario Planner", icon: BarChart3, description: "Model potential business scenarios." },
];

export default function CorporateExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Executive Dashboard (Corporate)</h1>
        <p className="text-muted-foreground">High-level overview of corporate strategy, risk, and compliance.</p>
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
