
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function IntegrationsSettings() {
    return (
        <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Integrations & API</h3>
              <p className="text-sm text-muted-foreground">
                Connect CoperVise to your other tools and manage API access.
              </p>
            </div>
            <Separator />
            <Card>
                <CardHeader>
                    <CardTitle>App Integrations</CardTitle>
                    <CardDescription>Connect to popular services to streamline your workflow.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-muted rounded-md flex items-center justify-center">
                                G
                            </div>
                            <div>
                                <p className="font-medium">Google Calendar</p>
                                <p className="text-sm text-muted-foreground">Sync your meetings and events.</p>
                            </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                             <div className="h-10 w-10 bg-muted rounded-md flex items-center justify-center">
                                S
                            </div>
                            <div>
                                <p className="font-medium">Slack</p>
                                <p className="text-sm text-muted-foreground">Receive notifications and create tasks from Slack.</p>
                            </div>
                        </div>
                        <Button variant="destructive">Disconnect</Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>API Access</CardTitle>
                    <CardDescription>Manage API keys for custom integrations.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="api-key">Your API Key</Label>
                        <div className="flex gap-2">
                            <Input id="api-key" defaultValue="**********" readOnly />
                            <Button variant="secondary">Copy</Button>
                            <Button variant="outline">Regenerate</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
