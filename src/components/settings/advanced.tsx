
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Bot, Plus, Trash2 } from "lucide-react";
import { Input } from "../ui/input";

export function AdvancedSettings() {
    return (
        <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Advanced</h3>
              <p className="text-sm text-muted-foreground">
                Manage AI personalization and automation rules.
              </p>
            </div>
            <Separator />
            <Card>
                <CardHeader>
                    <CardTitle>AI Personalization</CardTitle>
                    <CardDescription>Enable or disable specific AI modules to tailor your experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">AI Daily Briefing</p>
                        </div>
                        <Switch defaultChecked/>
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">AI Revenue Risk Forecasting</p>
                        </div>
                        <Switch defaultChecked/>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <p className="font-medium">AI Contract Summarization</p>
                        </div>
                        <Switch />
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Automation Rules</CardTitle>
                    <CardDescription>Create custom "if this, then that" rules for your workspace.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-end gap-2 p-4 border rounded-lg">
                        <div className="grid gap-1.5 flex-1">
                             <label className="text-sm">IF invoice overdue is greater than</label>
                             <div className="flex items-center gap-2">
                                <Input type="number" defaultValue="10" className="w-24" />
                                <span>days, THEN create task and escalate.</span>
                             </div>
                        </div>
                        <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive"/></Button>
                    </div>
                    <Button variant="outline" className="w-full"><Plus className="mr-2 h-4 w-4"/>Add Rule</Button>
                </CardContent>
            </Card>
        </div>
    )
}
