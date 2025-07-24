
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Bot, Download, Send, CheckCircle2, CircleDashed } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Textarea } from '@/components/ui/textarea';

const reports = [
  { period: "July 2025", status: "Draft" },
  { period: "June 2025", status: "Reviewed" },
  { period: "May 2025", status: "Sent" },
  { period: "April 2025", status: "Sent" },
];

const reportContent = {
    overview: "July showed steady performance with a 5% increase in MRR, though new user acquisition was 10% below target. Key highlight was the successful launch of the 'Alpha' feature, which received positive early feedback.",
    kpis: "MRR: $235k (+5%), Churn: 3.5% (-0.3%), CSAT: 92% (+1%). User Acquisition: 850 (Target: 950).",
    revenueRisk: "High risk detected for TechCorp account due to project delays. Overdue invoices total $44,500, a 15% increase from June.",
    aiSummary: "Overall, July was a positive month driven by product milestones. However, attention is required on the TechCorp account and the overall user acquisition funnel to mitigate future revenue risks and hit Q3 targets."
}

export default function MonthlyReportsPage() {
    const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Monthly Business Reviews</h1>
        <p className="text-muted-foreground">Generate, review, and distribute AI-powered monthly reports.</p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Report History</CardTitle>
            <CardDescription>Access previously generated and drafted reports.</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="space-y-3">
                {reports.map(report => (
                    <li key={report.period} className="flex justify-between items-center p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                            {report.status === 'Sent' ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <CircleDashed className="h-5 w-5 text-yellow-500" />}
                            <div>
                                <p className="font-semibold">{report.period} Business Review</p>
                                <p className="text-sm text-muted-foreground">Status: {report.status}</p>
                            </div>
                        </div>
                         <Drawer open={isEditorOpen} onOpenChange={setIsEditorOpen}>
                            <DrawerTrigger asChild>
                                <Button variant="outline">View & Edit</Button>
                            </DrawerTrigger>
                             <DrawerContent className="h-[90vh]">
                                <DrawerHeader className="text-left">
                                  <DrawerTitle>Editing: July 2025 Business Review</DrawerTitle>
                                  <DrawerDescription>Review and edit the AI-generated sections below. When ready, approve and send to stakeholders.</DrawerDescription>
                                </DrawerHeader>
                                <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-y-auto">
                                    <div className="lg:col-span-2 space-y-4">
                                        <Card>
                                            <CardHeader><CardTitle>Overview</CardTitle></CardHeader>
                                            <CardContent><Textarea defaultValue={reportContent.overview} rows={5}/></CardContent>
                                        </Card>
                                         <Card>
                                            <CardHeader><CardTitle>Key KPIs</CardTitle></CardHeader>
                                            <CardContent><Textarea defaultValue={reportContent.kpis} rows={4}/></CardContent>
                                        </Card>
                                         <Card>
                                            <CardHeader><CardTitle>Revenue & Risk Analysis</CardTitle></CardHeader>
                                            <CardContent><Textarea defaultValue={reportContent.revenueRisk} rows={4}/></CardContent>
                                        </Card>
                                    </div>
                                    <div className="space-y-4">
                                        <Card className="bg-primary/10 border-primary">
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2"><Bot />AI Executive Summary</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm">{reportContent.aiSummary}</p>
                                            </CardContent>
                                        </Card>
                                         <div className="space-y-2">
                                            <Button className="w-full" size="lg" onClick={() => setIsEditorOpen(false)}><Send className="mr-2 h-4 w-4" />Approve & Send</Button>
                                            <Button variant="secondary" className="w-full"><Download className="mr-2 h-4 w-4" />Export as PDF</Button>
                                            <Button variant="outline" className="w-full"><Bot className="mr-2 h-4 w-4"/>Regenerate with AI</Button>
                                         </div>
                                    </div>
                                </div>
                              </DrawerContent>
                        </Drawer>
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
