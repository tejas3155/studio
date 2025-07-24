
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, PlusCircle, Book, Download, GitBranch, Workflow } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const playbooks = [
    { title: "SEBI Audit Response Playbook", status: "Active", version: "1.2" },
    { title: "New Vendor Onboarding", status: "Draft", version: "0.1" },
    { title: "Crisis Communication Playbook", status: "Active", version: "2.0" },
]

const playbookContent = {
    title: "SEBI Audit Response Playbook",
    sections: [
        { title: "Step 1: Acknowledge Receipt", body: "Upon receiving a SEBI inquiry, the Legal department must log the request in the 'Regulatory Tracker' within 24 hours. Use task template 'SEBI-Inquiry-Ack'." },
        { title: "Step 2: Assemble Response Team", body: "The assigned Legal Coordinator will create a cross-departmental team including members from Finance, IT Security, and the relevant business unit. Refer to 'SOP-Legal-001' for team composition." },
        { title: "Step 3: Evidence Gathering", body: "Each department head is responsible for providing the requested evidence within 3 business days. All evidence must be uploaded to the shared folder." },
        { title: "Step 4: Draft Response", body: "The Legal department drafts the official response, which must be approved by the Head of Legal and the CEO before submission." },
    ],
    sources: ["SOP-Legal-001: Regulatory Inquiries", "Task Template: SEBI-Inquiry-Ack", "Policy: Data Sharing with Regulators"]
}

export default function CorporatePlaybookBuilderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Corporate AI Playbook Builder</h1>
        <p className="text-muted-foreground">Auto-build corporate processes from your SOPs, policies, tasks, and reports.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Playbook</CardTitle>
                    <CardDescription>Select a topic and let AI draft a process for you.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a topic to build..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="audit">SEBI Audit Response</SelectItem>
                            <SelectItem value="vendor">Vendor Onboarding</SelectItem>
                            <SelectItem value="crisis">Crisis Communication</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="w-full"><Bot className="mr-2 h-4 w-4" />Generate with AI</Button>
                </CardContent>
            </Card>
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Existing Playbooks</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {playbooks.map(p => (
                            <li key={p.title} className="flex justify-between items-center p-2 border rounded-md">
                                <span>{p.title}</span>
                                <Badge variant={p.status === 'Active' ? 'secondary' : 'default'}>{p.status}</Badge>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="flex items-center gap-2"><Book />{playbookContent.title}</CardTitle>
                            <CardDescription>Generated from {playbookContent.sources.length} sources.</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline"><Workflow className="mr-2 h-4 w-4"/>Visualize</Button>
                            <Button>Save & Activate</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {playbookContent.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                            <Textarea defaultValue={section.body} rows={3} />
                        </div>
                    ))}

                    <Card className="bg-secondary">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2"><GitBranch />Source Documents</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {playbookContent.sources.map(s => <li key={s}>{s}</li>)}
                           </ul>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
