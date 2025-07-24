
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bot, CheckCircle2, FileWarning, Link } from "lucide-react";

const regulations = [
  { title: "SEBI Quarterly Filing - Q3", deadline: "2025-08-05", framework: "SEBI", departments: ["Finance", "Legal"], status: "In Progress" },
  { title: "GDPR Data Protection Impact Assessment", deadline: "2024-09-01", framework: "GDPR", departments: ["IT", "Legal"], status: "Pending" },
  { title: "SOC 2 Type 2 Annual Audit", deadline: "2024-11-15", framework: "SOC 2", departments: ["Security", "IT"], status: "Upcoming" },
  { title: "ESG Reporting Deadline", deadline: "2024-07-31", framework: "ESG", departments: ["Sustainability"], status: "Overdue" },
];

const feed = [
  { source: "RBI", update: "New guidelines on digital lending disclosures.", date: "2024-07-28" },
  { source: "SEBI", update: "Circular on mandatory Business Responsibility and Sustainability Reporting (BRSR).", date: "2024-07-25" },
];

export default function CorporateRegulatoryTrackerPage() {
  return (
    <div className="space-y-6">
       <div>
            <h1 className="text-2xl font-bold tracking-tight font-headline">Corporate Regulatory Tracker</h1>
            <p className="text-muted-foreground">Track obligations across departments for SEBI, RBI, GDPR, ESG, etc.</p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Compliance Deadlines</CardTitle>
                    <CardDescription>Multi-department timeline for all regulatory obligations.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {regulations.map(reg => (
                            <div key={reg.title} className="flex items-start gap-4 p-3 border rounded-lg">
                                {reg.status === 'Overdue' ? <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" /> : <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />}
                                <div className="flex-grow">
                                    <p className="font-semibold">{reg.title}</p>
                                    <p className="text-sm text-muted-foreground">Framework: {reg.framework} | Departments: {reg.departments.join(', ')}</p>
                                    <p className="text-sm text-primary flex items-center gap-1 mt-1"><Link className="h-3 w-3" />Linked SOP: "Quarterly Financial Reporting"</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-sm font-bold">Due: {reg.deadline}</p>
                                    <Badge className={`ml-auto mt-1 ${reg.status === 'Overdue' ? 'bg-red-500' : 'bg-blue-500'}`}>{reg.status}</Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bot />AI Regulatory Feed</CardTitle>
                    <CardDescription>Live updates from government bodies parsed by AI.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {feed.map(item => (
                            <li key={item.update} className="text-sm">
                                <span className="font-bold text-primary">{item.source}:</span> {item.update} ({item.date})
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="bg-destructive/10 border-destructive">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive"><FileWarning />Penalty Risk Panel</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-destructive">ESG Reporting deadline was missed. Potential penalty for non-compliance is high. The linked task for data collection is 15 days overdue.</p>
                     <Button variant="secondary" size="sm" className="mt-2">Create Mitigation Task</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
