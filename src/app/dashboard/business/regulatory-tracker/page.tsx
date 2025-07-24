
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bot, CheckCircle2, FileWarning } from "lucide-react";

const regulations = [
  { title: "SEBI Quarterly Compliance", deadline: "2025-08-01", sector: "Finance", status: "Upcoming" },
  { title: "GST Filing - July 2024", deadline: "2024-08-20", sector: "All", status: "Upcoming" },
  { title: "ISO 9001:2015 Audit", deadline: "2024-09-01", sector: "Manufacturing", status: "Pending" },
  { title: "TDS Filing - Q2", deadline: "2024-07-31", sector: "All", status: "Overdue" },
];

const feed = [
  { source: "SEBI", update: "New disclosure norms for listed companies issued.", date: "2024-07-28" },
  { source: "GST Council", update: "Changes in tax slabs for electronic goods.", date: "2024-07-25" },
];

export default function RegulatoryTrackerPage() {
  return (
    <div className="space-y-6">
       <div>
            <h1 className="text-2xl font-bold tracking-tight font-headline">Regulatory Tracker</h1>
            <p className="text-muted-foreground">Track ongoing regulatory requirements and monitor updates.</p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Compliance Deadlines</CardTitle>
                    <CardDescription>Timeline view for all regulatory obligations.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {regulations.map(reg => (
                            <div key={reg.title} className="flex items-start gap-4 p-3 border rounded-lg">
                                {reg.status === 'Overdue' ? <AlertTriangle className="h-5 w-5 text-red-500 mt-1" /> : <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />}
                                <div>
                                    <p className="font-semibold">{reg.title}</p>
                                    <p className="text-sm text-muted-foreground">Deadline: {reg.deadline} | Sector: {reg.sector}</p>
                                </div>
                                <Badge className={`ml-auto ${reg.status === 'Overdue' ? 'bg-red-500' : 'bg-blue-500'}`}>{reg.status}</Badge>
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
                    <CardDescription>Live updates from government bodies.</CardDescription>
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
                     <p className="text-destructive">TDS Filing for Q2 is overdue. Potential penalty: ₹50,000. The responsible SOP 'Monthly Tax Filings' has not been marked as complete.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
