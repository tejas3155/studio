
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Bot, Download, Send, CheckCircle2, CircleDashed, Briefcase, Calendar } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const reports = [
  { period: "Q3 2025 Board Meeting", status: "Draft" },
  { period: "Q2 2025 Board Meeting", status: "Sent" },
  { period: "July 2025 Audit Committee", status: "Sent" },
  { period: "June 2025 All Hands", status: "Sent" },
];

const reportContent = {
    slides: [
        { title: "Revenue vs Plan", content: "Q3 revenue reached $1.2M, which is 92% of the $1.3M forecast. The 8% shortfall is primarily driven by project delays in the APAC Services division and churn of two mid-market clients in the EMEA region. Enterprise sales in NA exceeded targets by 15%." },
        { title: "Top 5 Risks & Mitigations", content: "1. **APAC Project Delays:** Mitigation in progress, resources re-allocated. 2. **EMEA Churn:** Account managers creating get-well plan. 3. **Vendor Lock-in (Quantum IT):** Exploring alternative vendors. 4. **ESG Reporting Gap:** Task force assigned. 5. **Competitor Pricing Pressure:** Product team analyzing response." },
        { title: "Compliance Posture", content: "Overall compliance health is at 92% (Healthy). One major deadline for SEBI is due in 15 days, currently on track. 4 open gaps in ESG framework are being addressed by the Sustainability team." }
    ],
    aiSummary: "The key message for the board is that while revenue is slightly behind plan, the core enterprise business remains strong. The primary focus for Q4 must be on mitigating the identified risks in APAC and EMEA to ensure year-end targets are met. Compliance is healthy, but ESG requires immediate attention."
}

export default function BoardroomBriefingsPage() {
    const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Boardroom Briefings</h1>
        <p className="text-muted-foreground">Generate, review, and distribute AI-powered briefing documents for key meetings.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Generate New Briefing</CardTitle>
                        <CardDescription>Select a meeting type and period to generate a new brief.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Select Meeting Type..." /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="qbr">Quarterly Business Review (QBR)</SelectItem>
                                <SelectItem value="board">Board Meeting</SelectItem>
                                <SelectItem value="audit">Audit Committee</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select>
                            <SelectTrigger><SelectValue placeholder="Select Period..." /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="q3_2025">Q3 2025</SelectItem>
                                <SelectItem value="q2_2025">Q2 2025</SelectItem>
                                <SelectItem value="fy_2025">FY 2025</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="w-full"><Bot className="mr-2 h-4 w-4"/>Generate with AI</Button>
                    </CardContent>
                </Card>
            </div>
             <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Briefing History</CardTitle>
                        <CardDescription>Access previously generated and drafted reports.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {reports.map(report => (
                                <li key={report.period} className="flex justify-between items-center p-3 border rounded-lg">
                                    <div className="flex items-center gap-3">
                                        {report.status === 'Sent' ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <CircleDashed className="h-5 w-5 text-yellow-500" />}
                                        <div>
                                            <p className="font-semibold">{report.period}</p>
                                            <p className="text-sm text-muted-foreground">Status: {report.status}</p>
                                        </div>
                                    </div>
                                    <Drawer open={isEditorOpen} onOpenChange={setIsEditorOpen}>
                                        <DrawerTrigger asChild>
                                            <Button variant="outline">View & Edit</Button>
                                        </DrawerTrigger>
                                        <DrawerContent className="h-[90vh]">
                                            <DrawerHeader className="text-left">
                                            <DrawerTitle>Editing: Q3 2025 Board Meeting Brief</DrawerTitle>
                                            <DrawerDescription>Review and edit the AI-generated slides. When ready, approve and export.</DrawerDescription>
                                            </DrawerHeader>
                                            <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-y-auto">
                                                <div className="lg:col-span-2 space-y-4">
                                                    {reportContent.slides.map(slide => (
                                                        <Card key={slide.title}>
                                                            <CardHeader><CardTitle>{slide.title}</CardTitle></CardHeader>
                                                            <CardContent><Textarea defaultValue={slide.content} rows={5}/></CardContent>
                                                        </Card>
                                                    ))}
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
                                                        <Button className="w-full" size="lg" onClick={() => setIsEditorOpen(false)}><Send className="mr-2 h-4 w-4" />Approve & Lock</Button>
                                                        <Button variant="secondary" className="w-full"><Download className="mr-2 h-4 w-4" />Export as PPT</Button>
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
      </div>
    </div>
  );
}
