
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, PlusCircle, Book, Download, GitBranch } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const playbooks = [
    { title: "Client Onboarding Playbook", status: "Active", version: "1.2" },
    { title: "Quarterly Tax Filing", status: "Draft", version: "0.1" },
    { title: "Incident Response Playbook", status: "Active", version: "2.0" },
]

const playbookContent = {
    title: "Client Onboarding Playbook",
    sections: [
        { title: "Step 1: Kick-off Call", body: "Schedule a kick-off call within 48 hours of contract signing. Use the 'Client Kick-off' meeting template. Invite key stakeholders from both sides." },
        { title: "Step 2: Project Setup", body: "Create a new project in the system. Assign the Account Manager and Project Lead. Refer to SOP-101 for project naming conventions." },
        { title: "Step 3: First Deliverable", body: "Ensure the first deliverable is sent to the client within 5 business days. Track progress in the 'Client Projects' dashboard." },
    ],
    sources: ["SOP-101: Project Management", "Task Template: New Client", "Client Kick-off Meeting Notes (Sample)"]
}

export default function PlaybookBuilderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">AI Playbook Builder</h1>
        <p className="text-muted-foreground">Auto-build company processes from your existing SOPs, tasks, and reports.</p>
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
                            <SelectItem value="onboarding">Client Onboarding</SelectItem>
                            <SelectItem value="hiring">New Employee Hiring</SelectItem>
                            <SelectItem value="finance">Quarterly Financial Reporting</SelectItem>
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
                            <Button variant="outline"><Download className="mr-2 h-4 w-4"/>Export</Button>
                            <Button>Save & Activate</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {playbookContent.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                            <Textarea defaultValue={section.body} rows={4} />
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
