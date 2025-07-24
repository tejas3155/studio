
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, RefreshCw, SlidersHorizontal, ArrowDown, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";


export default function ScenarioPlannerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Scenario Planner</h1>
        <p className="text-muted-foreground">Run "What-if" analysis on key business drivers to forecast impact.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><SlidersHorizontal />Scenario Inputs</CardTitle>
                <CardDescription>Adjust the sliders and inputs to model a potential scenario.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-2">
                <div className="space-y-2">
                    <Label htmlFor="marketing-spend">Marketing Spend Change</Label>
                    <div className="flex items-center gap-4">
                        <Slider id="marketing-spend" defaultValue={[-20]} max={50} min={-50} step={5} />
                        <span className="font-bold w-16 text-right">-20%</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="sales-hires">New Sales Headcount</Label>
                     <div className="flex items-center gap-4">
                        <Slider id="sales-hires" defaultValue={[5]} max={20} step={1} />
                        <span className="font-bold w-16 text-right">5 hires</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="churn-risk">Anticipated Churn Increase</Label>
                     <div className="flex items-center gap-4">
                        <Slider id="churn-risk" defaultValue={[2]} max={10} step={0.5} />
                        <span className="font-bold w-16 text-right">+2%</span>
                    </div>
                </div>
                 <Button className="w-full"><RefreshCw className="mr-2 h-4 w-4"/>Recalculate Forecast</Button>
            </CardContent>
        </Card>
        <Card className="bg-secondary">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bot />AI-Forecasted Impact</CardTitle>
                <CardDescription>AI's prediction based on your scenario inputs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Scenario Name: "Aggressive Growth Q4"</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">This scenario models a 20% reduction in marketing spend, offset by 5 new sales hires, while anticipating a 2% increase in customer churn.</p>
                    </CardContent>
                </Card>
                 <div className="grid grid-cols-2 gap-4">
                    <Card className="text-center">
                        <CardHeader><CardDescription>Revenue Impact</CardDescription></CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-green-500 flex items-center justify-center gap-1"><ArrowUp/>+8%</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center">
                        <CardHeader><CardDescription>Burn Rate Impact</CardDescription></CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-red-500 flex items-center justify-center gap-1"><ArrowUp/>+12%</p>
                        </CardContent>
                    </Card>
                 </div>
                 <div className="p-3 bg-background rounded-lg">
                    <p className="font-semibold text-primary">AI Narrative</p>
                    <p className="text-sm">The model predicts an 8% revenue uplift, primarily from the increased sales capacity. However, the new salaries combined with reduced marketing efficiency will increase burn rate by 12%. This is a high-risk, high-reward scenario.</p>
                 </div>
                 <div className="flex gap-2">
                    <Button className="w-full">Save Scenario</Button>
                    <Button variant="outline" className="w-full">Compare</Button>
                 </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
