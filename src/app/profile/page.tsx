
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Calendar, FileText, Mail, Phone, User, Edit } from "lucide-react";
import { CalendarWithTasks } from "@/components/dashboard/calendar-with-tasks";

const user = {
    name: "Tejas",
    role: "Executive",
    department: "Business Sector",
    email: "tejas@copervise.com",
    phone: "+91-99999-99999",
    avatarUrl: "/avatars/tejas.png",
    recentActivity: [
        {type: "task", title: "Client ABC Follow-up", date:"2025-07-23"},
        {type: "meeting", title:"Revenue Review", date:"2025-07-22"}
    ],
    aiSummary: "Your top priority is the TechCorp contract renewal. Key decision needed by EOD Friday. The sales pipeline is trending down 5% this week, driven by a slowdown in the EMEA region."
}

export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-6 space-y-0">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                             <div>
                                <h1 className="text-3xl font-bold tracking-tight font-headline">{user.name}</h1>
                                <p className="text-muted-foreground">{user.role} - {user.department}</p>
                            </div>
                            <Button variant="outline"><Edit className="mr-2 h-4 w-4"/>Edit Profile</Button>
                        </div>
                        <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2"><Mail className="h-4 w-4"/>{user.email}</span>
                            <span className="flex items-center gap-2"><Phone className="h-4 w-4"/>{user.phone}</span>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="tasks">My Tasks & Meetings</TabsTrigger>
                    <TabsTrigger value="documents">My Documents</TabsTrigger>
                    <TabsTrigger value="insights">AI Insights for Me</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {user.recentActivity.map(activity => (
                                        <li key={activity.title} className="flex items-center gap-3">
                                            {activity.type === 'task' ? <User className="h-5 w-5 text-primary" /> : <Calendar className="h-5 w-5 text-primary"/>}
                                            <div>
                                                <p>{activity.title}</p>
                                                <p className="text-sm text-muted-foreground">{activity.date}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                         <Card className="bg-primary/10 border-primary">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Bot />Today's AI Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">{user.aiSummary}</p>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="tasks">
                   <CalendarWithTasks />
                </TabsContent>
                 <TabsContent value="documents">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Documents</CardTitle>
                            <CardDescription>Personal vault and recently accessed files.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center py-12 text-muted-foreground">
                            <FileText className="h-12 w-12 mx-auto" />
                            <p className="mt-4">Document list will be shown here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="insights">
                    <Card>
                        <CardHeader>
                            <CardTitle>AI Insights for Me</CardTitle>
                            <CardDescription>Personalized performance analytics and briefings.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center py-12 text-muted-foreground">
                            <Bot className="h-12 w-12 mx-auto" />
                            <p className="mt-4">AI-generated insights will appear here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="preferences">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Preferences</CardTitle>
                            <CardDescription>Manage your profile and notification settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center py-12 text-muted-foreground">
                           <p>Preference toggles and settings will be here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
