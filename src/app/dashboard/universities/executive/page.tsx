
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart3, Bot, Briefcase, FilePieChart, Gauge, LineChart, ShieldCheck, Users, GraduationCap, FlaskConical, HandCoins } from "lucide-react";

const executiveFeatures = [
  { name: "Accreditation Health Monitor", icon: ShieldCheck, description: "Compliance scorecard for accreditation standards (NAAC, NBA)." },
  { name: "Grant Performance Dashboard", icon: HandCoins, description: "Track funding pipeline, ROI by department, and identify potential RFPs." },
  { name: "Faculty Workload Balancer", icon: Users, description: "Heatmap of teaching, research, and service hours to prevent burnout." },
  { name: "Student Success Radar", icon: GraduationCap, description: "Monitor at-risk student trends from LMS data and advisor notes." },
  { name: "Research Impact Tracker", icon: FlaskConical, description: "Track citations, patents, and industry collaborations by department." },
  { name: "Alumni Engagement Engine", icon: Briefcase, description: "Predict donor likelihood and analyze the lifetime value of alumni networks." },
  { name: "Space Utilization Optimizer", icon: BarChart3, description: "Analyze room bookings and class sizes to recommend cost savings." },
  { name: "Curriculum & Integrity", icon: FilePieChart, description: "Oversee curriculum alignment and view department-level integrity reports." },
];

export default function UniversityExecutiveDashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight font-headline">Executive Dashboard (University)</h1>
        <p className="text-muted-foreground">High-level insights on accreditation, research, faculty, and student success.</p>
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
                    <CardTitle>Ask CoperVise Academic</CardTitle>
                    <CardDescription>Your AI assistant for academic data, compliance, and strategic planning.</CardDescription>
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
