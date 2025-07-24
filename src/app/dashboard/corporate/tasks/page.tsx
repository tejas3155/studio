
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, FileText, Bot, Upload, Calendar, Badge, AlertTriangle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as UICalendar } from "@/components/ui/calendar";

const tasks = [
    { id: 1, title: 'Submit SEBI Q3 filing documentation', priority: 'High', status: 'In Progress', owner: 'Legal Dept', framework: 'SEBI' },
    { id: 2, title: 'Review vendor contract for Acme Inc.', priority: 'Medium', status: 'Todo', owner: 'Legal Dept', framework: 'Vendor Mgt' },
    { id: 3, title: 'Draft MoM for Q3 Board Meeting', priority: 'Medium', status: 'Todo', owner: 'Exec Office', framework: 'Reporting' },
    { id: 4, title: 'Complete ESG data collection for annual report', priority: 'High', status: 'Overdue', owner: 'Sustainability', framework: 'ESG' },
];

const meetings = [
    { id: 1, title: 'Q3 Board Meeting', time: '10:00 AM', status: 'Completed', owner: 'Exec Office' },
    { id: 2, title: 'ISO 27001 Audit Kick-off', time: '2:00 PM', status: 'Confirmed', owner: 'Security Dept' },
];

export default function CorporateTasksPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight font-headline">Cross-Department Task & Meeting Manager</h1>
                    <p className="text-muted-foreground">Unified view of tasks, meetings, and deadlines with AI-powered assistance.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New
                </Button>
            </div>

            <Tabs defaultValue="tasks" className="w-full">
                <div className="flex justify-between items-center mb-4">
                    <TabsList className="grid grid-cols-3">
                        <TabsTrigger value="tasks">Tasks</TabsTrigger>
                        <TabsTrigger value="meetings">Meetings & MoM</TabsTrigger>
                        <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                    </TabsList>
                    <div className="flex gap-2">
                         <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter Department" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="legal">Legal</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="security">Security</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter Framework" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sebi">SEBI</SelectItem>
                                <SelectItem value="iso">ISO</SelectItem>
                                <SelectItem value="esg">ESG</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <TabsContent value="tasks">
                    <Card>
                        <CardHeader>
                            <CardTitle>Cross-Department Task List</CardTitle>
                            <CardDescription>All active, pending, and overdue tasks across the organization.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {tasks.map(task => (
                                    <li key={task.id} className="flex items-center justify-between p-3 rounded-md border">
                                        <div>
                                            <p className="font-semibold">{task.title}</p>
                                            <p className="text-sm text-muted-foreground">Owner: {task.owner} | Framework: {task.framework}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant={task.status === 'Overdue' ? 'destructive' : 'secondary'}>{task.status}</Badge>
                                            <Badge variant={task.priority === 'High' ? 'destructive' : 'default'} className={task.priority === 'Medium' ? 'bg-yellow-500' : ''}>{task.priority}</Badge>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="meetings">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Meeting Management</CardTitle>
                                <CardDescription>Manage meetings and automate minute-to-task conversion.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 mb-4">
                                    {meetings.map(meeting => (
                                        <li key={meeting.id} className="flex justify-between items-center p-2 border rounded-md">
                                            <span>{meeting.title} ({meeting.owner})</span>
                                            {meeting.status === 'Completed' ? 
                                                <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-2" /> Upload MoM</Button> 
                                                : <Badge variant="default">{meeting.status}</Badge>}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-secondary">
                             <CardHeader>
                                <CardTitle className="flex items-center"><Bot className="mr-2 h-5 w-5 text-primary" />AI MoM Assistant</CardTitle>
                                <CardDescription>Upload Minutes of Meeting and AI will extract key decisions and action items.</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                                <p className="mt-2 text-sm">Extracted from Q3 Board Meeting MoM:</p>
                                <ul className="text-sm text-left list-disc list-inside mt-2">
                                    <li>Action Item: Legal to review Acme Inc. contract by Aug 15.</li>
                                    <li>Decision: Approved Q4 marketing budget of $500k.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                 <TabsContent value="calendar">
                    <Card>
                        <CardContent className="p-0">
                           <UICalendar mode="range" className="w-full" />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
