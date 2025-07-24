
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export function WorkspaceSettings() {
    return (
        <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Workspace</h3>
              <p className="text-sm text-muted-foreground">
                Configure your organization's settings, branding, and compliance frameworks.
              </p>
            </div>
            <Separator />
             <Card>
                <CardHeader>
                    <CardTitle>Organization Details</CardTitle>
                    <CardDescription>Update your workspace name and logo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="org-name">Organization Name</Label>
                        <Input id="org-name" defaultValue="CoperVise Inc."/>
                    </div>
                     <div className="space-y-2">
                        <Label>Organization Logo</Label>
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                                <span className="text-sm text-muted-foreground">Logo</span>
                            </div>
                            <Button variant="outline">Upload</Button>
                        </div>
                    </div>
                    <Button>Update Organization</Button>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Compliance Frameworks</CardTitle>
                    <CardDescription>Select the frameworks that apply to your organization.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="iso" />
                            <label htmlFor="iso" className="text-sm font-medium">ISO</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="sebi" defaultChecked />
                             <label htmlFor="sebi" className="text-sm font-medium">SEBI</label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <Checkbox id="naac" />
                             <label htmlFor="naac" className="text-sm font-medium">NAAC</label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <Checkbox id="nba" />
                             <label htmlFor="nba" className="text-sm font-medium">NBA</label>
                        </div>
                    </div>
                     <Button>Save Frameworks</Button>
                </CardContent>
            </Card>
        </div>
    )
}
