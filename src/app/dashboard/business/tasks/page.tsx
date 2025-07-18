
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, FileText, Bot, Upload } from "lucide-react";

// Mock data for demonstration
const upcomingMeetings = [
    { id: 1, title: 'Q4 Strategy Review', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, title: 'Client Sync: TechCorp', time: '2:00 PM', status: 'Pending' },
];

const completedMeetings = [
    { id: 3, title: 'Project Alpha Debrief', date: '2023-10-25' },
];

const tasks = [
    { id: 1, title: 'Prepare presentation for Q4 review', priority: 'High', status: 'In Progress' },
    { id: 2, title: 'Follow up with TechCorp on contract', priority: 'High', status: 'Todo' },
    { id: 3, title: 'Draft monthly report', priority: 'Medium', status: 'Todo' },
];

const prepPoints = [
    'Review Q3 performance metrics.',
    'Finalize 2024 budget allocation.',
    'Discuss competitive landscape changes.',
];

export default function TaskManagerPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight font-headline">Task & Meeting Manager</h1>
                    <p className="text-muted-foreground">Organize your work, manage meetings, and track events.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New
                </Button>
            </div>

            <Tabs defaultValue="tasks" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                    <TabsTrigger value="meetings">Meetings</TabsTrigger>
                    <TabsTrigger value="events">Events & Travel</TabsTrigger>
                </TabsList>
                <TabsContent value="tasks">
                    <Card>
                        <CardHeader>
                            <CardTitle>Task List</CardTitle>
                            <CardDescription>All your active and pending tasks.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {tasks.map(task => (
                                    <li key={task.id} className="flex items-center justify-between p-2 rounded-md border">
                                        <span>{task.title}</span>
                                        <span className={`text-sm font-semibold ${task.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}`}>{task.priority}</span>
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
                                <CardDescription>Manage upcoming and completed meetings.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold mb-2">Upcoming Meetings</h4>
                                <ul className="space-y-2 mb-4">
                                    {upcomingMeetings.map(meeting => (
                                        <li key={meeting.id} className="flex justify-between items-center p-2 border rounded-md">
                                            <span>{meeting.title} - {meeting.time}</span>
                                            <span className="text-sm text-muted-foreground">{meeting.status}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h4 className="font-semibold mb-2">Completed Meetings</h4>
                                <ul className="space-y-2">
                                    {completedMeetings.map(meeting => (
                                        <li key={meeting.id} className="flex justify-between items-center p-2 border rounded-md">
                                            <span>{meeting.title}</span>
                                            <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-2" /> Upload Minutes</Button>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-secondary">
                             <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Bot className="mr-2 h-5 w-5 text-primary" />
                                    AI-Generated Prep
                                </CardTitle>
                                <CardDescription>Talking points for your next important meeting.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 list-disc list-inside">
                                    {prepPoints.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                                 <Button variant="ghost" className="mt-4 w-full">
                                    <PlusCircle className="mr-2 h-4 w-4" /> Add Custom Point
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                 <TabsContent value="events">
                    <Card>
                        <CardHeader>
                            <CardTitle>Events & Travel</CardTitle>
                            <CardDescription>Plan and track company events and business travel.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-12 text-muted-foreground">
                                <FileText className="mx-auto h-12 w-12" />
                                <h3 className="mt-4 text-lg font-semibold">Itinerary Planner Coming Soon</h3>
                                <p>Plan travel, manage event logistics, and track expenses here.</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
