
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Bot, Calendar, HeartHandshake, Mic, Siren, TrendingUp, Wallet, FileText, Users } from "lucide-react";

const features = [
  { name: "Priority Alerts", icon: Siren },
  { name: "Smart Calendar", icon: Calendar },
  { name: "AI Daily Briefing", icon: Bot },
  { name: "Revenue Risk Radar", icon: Wallet },
  { name: "Client Sentiment", icon: HeartHandshake },
  { name: "Voice-to-Task", icon: Mic },
  { name: "KPI Tracker", icon: TrendingUp },
  { name: "Competitive Intelligence", icon: BarChart3 },
  { name: "Contract Health", icon: FileText },
  { name: "Team Management", icon: Users },
];

export default function BusinessCoordinatorDashboard() {
  return (
    <div>
       <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Coordinator Dashboard (Business)</h1>
        <p className="text-muted-foreground">Manage day-to-day operations and team coordination.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{feature.name}</CardTitle>
              <feature.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">...</div>
              <p className="text-xs text-muted-foreground">
                Details for {feature.name} will be shown here.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="mt-6">
        <Card>
            <CardHeader>
                <CardTitle>More Features</CardTitle>
                <CardDescription>Additional tools and modules for the Coordinator.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Forecast Variance Tracker, Expense Anomaly Detector, and more will be displayed here.</p>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
