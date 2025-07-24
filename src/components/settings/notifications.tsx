
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function NotificationsSettings() {
    return (
        <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Configure how you receive notifications.
              </p>
            </div>
            <Separator />
            <Card>
                <CardHeader>
                    <CardTitle>Email Notifications</CardTitle>
                    <CardDescription>Manage your email notification preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">Daily AI Briefing</p>
                            <p className="text-sm text-muted-foreground">Receive a summary of your day every morning.</p>
                        </div>
                        <Switch defaultChecked/>
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">Overdue Task Alerts</p>
                            <p className="text-sm text-muted-foreground">Get notified when a task passes its due date.</p>
                        </div>
                        <Switch defaultChecked/>
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">Product Updates</p>
                            <p className="text-sm text-muted-foreground">News, updates, and special offers.</p>
                        </div>
                        <Switch/>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Push Notifications</CardTitle>
                    <CardDescription>Manage notifications on your mobile devices.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">Task Assignments</p>
                            <p className="text-sm text-muted-foreground">When someone assigns a new task to you.</p>
                        </div>
                        <Switch defaultChecked/>
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">Meeting Reminders</p>
                            <p className="text-sm text-muted-foreground">15 minutes before a scheduled meeting.</p>
                        </div>
                        <Switch />
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">Critical AI Alerts</p>
                            <p className="text-sm text-muted-foreground">Immediate notification for high-risk issues.</p>
                        </div>
                        <Switch defaultChecked/>
                    </div>
                </CardContent>
            </Card>
             <Button>Update Notifications</Button>
        </div>
    )
}
