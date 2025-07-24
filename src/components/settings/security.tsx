
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Laptop, Smartphone } from "lucide-react";

export function SecuritySettings() {
    const sessions = [
        { device: "Chrome on macOS", location: "Kolkata, IN", time: "Active now", icon: Laptop },
        { device: "iPhone 15 Pro", location: "Kolkata, IN", time: "2 hours ago", icon: Smartphone },
    ]
    return (
        <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Security & Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Manage your account's security settings and privacy controls.
              </p>
            </div>
            <Separator />
            <Card>
                <CardHeader>
                    <CardTitle>Login Activity</CardTitle>
                    <CardDescription>Recent sessions on your account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {sessions.map(session => (
                            <li key={session.device} className="flex items-center gap-4">
                                <session.icon className="h-8 w-8 text-muted-foreground" />
                                <div className="flex-1">
                                    <p className="font-medium">{session.device}</p>
                                    <p className="text-sm text-muted-foreground">{session.location} - <span className={session.time.includes('Active') ? 'text-green-500' : ''}>{session.time}</span></p>
                                </div>
                                {session.time.includes('Active') ? null : <Button variant="ghost" size="sm">Log out</Button>}
                            </li>
                        ))}
                    </ul>
                    <Button variant="outline" className="mt-4">Log out from all devices</Button>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Data Management</CardTitle>
                    <CardDescription>Manage your personal data.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">Download My Data</p>
                            <p className="text-sm text-muted-foreground">Export a copy of your data from CoperVise.</p>
                        </div>
                        <Button variant="secondary">Request Export</Button>
                    </div>
                     <div className="flex items-center justify-between rounded-lg border border-destructive/50 p-4">
                        <div>
                            <p className="font-medium text-destructive">Delete Account</p>
                            <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data. This action is irreversible.</p>
                        </div>
                        <Button variant="destructive">Delete</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
