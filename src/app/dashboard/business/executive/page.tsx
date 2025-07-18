
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bot, LineChart, PieChart, Siren, Wallet, Waves } from "lucide-react";

const features = [
  { name: "Priority Alerts", icon: Siren },
  { name: "AI Daily Briefing", icon: Bot },
  { name: "Revenue Risk (Chart)", icon: BarChart },
  { name: "Client Sentiment (Chart)", icon: PieChart },
  { name: "KPI Tracker (Chart)", icon: LineChart },
  { name: "Forecast Variance", icon: Waves },
  { name: "Expense Anomalies", icon: Wallet },
];

export default function BusinessExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Executive Dashboard (Business)</h1>
        <p className="text-muted-foreground">High-level overview of all strategic operations.</p>
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
                Visualizations for {feature.name} will be shown here.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="mt-6">
        <Card>
            <CardHeader>
                <CardTitle>More Insights</CardTitle>
                <CardDescription>Additional strategic visualizations for the Executive.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Competitive Intelligence Feed, Contract Health Dashboard, and other visualizations will be displayed here.</p>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
