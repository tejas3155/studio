
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart, Bot, Briefcase, Calendar, DollarSign, FileText, Filter, Gauge, Handshake, LineChart, PieChart, Rocket, Siren, Users, TrendingUp, BarChart3, Waves, Wallet } from "lucide-react";

const features = [
  { name: "Priority Alerts", icon: Siren, description: "Critical issues needing immediate attention." },
  { name: "AI Daily Briefing", icon: Bot, description: "Your daily summary of tasks and events." },
  { name: "Revenue Risk", icon: BarChart, description: "Delayed payments and at-risk projects." },
  { name: "Client Sentiment", icon: PieChart, description: "Overall health of client communications." },
  { name: "KPI Tracker", icon: TrendingUp, description: "CAC, LTV, MRR, Churn." },
  { name: "Forecast Variance", icon: Waves, description: "Actual performance vs. projections." },
  { name: "Expense Anomalies", icon: Wallet, description: "Unusual spending patterns flagged by AI." },
  { name: "Contract Health", icon: FileText, description: "Key contract milestones and renewals." },
  { name: "Burn Rate Monitor", icon: DollarSign, description: "Cash runway and monthly burn rate." },
  { name: "Competitive Intelligence", icon: BarChart3, description: "Updates and analysis on competitors." },
  { name: "Product Launch Tracker", icon: Rocket, description: "Status of upcoming product launches." },
  { name:ag: "Employee Sentiment", icon: Users, description: "Overall team morale and feedback trends." },
];

export default function StartupExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Executive Dashboard (Startup)</h1>
        <p className="text-muted-foreground">High-level overview of your startup's health and trajectory.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                    <CardDescription>Your AI assistant for startup data, cap tables, and market analysis.</CardDescription>
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
