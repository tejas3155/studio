
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Bot, RefreshCw, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const forecastData = [
  { metric: "MRR", forecast: 250000, actual: 235000, variance: -6.0 },
  { metric: "New Leads", forecast: 500, actual: 550, variance: 10.0 },
  { metric: "Client Churn", forecast: 4.0, actual: 3.5, variance: -12.5 },
  { metric: "Gross Margin", forecast: 70, actual: 72, variance: 2.9 },
];

const varianceChartData = [
  { name: 'Q1', variance: 5 },
  { name: 'Q2', variance: -2 },
  { name: 'Q3', variance: -6 },
  { name: 'Q4 (proj)', variance: -8 },
];

export default function ForecastVariancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Forecast Variance Analysis</h1>
        <p className="text-muted-foreground">Compare actuals vs. forecast, understand deviations, and simulate future scenarios.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Forecast vs. Actuals Table</CardTitle>
                    <CardDescription>Detailed breakdown of forecasted metrics against actual performance for Q3 2025.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Metric</TableHead>
                                <TableHead>Forecast</TableHead>
                                <TableHead>Actual</TableHead>
                                <TableHead>Variance (%)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {forecastData.map((item) => (
                                <TableRow key={item.metric}>
                                    <TableCell className="font-medium">{item.metric}</TableCell>
                                    <TableCell>{item.metric === 'MRR' ? `$${item.forecast.toLocaleString()}` : item.forecast.toLocaleString()}{item.metric.includes('Churn') || item.metric.includes('Margin') ? '%' : ''}</TableCell>
                                    <TableCell>{item.metric === 'MRR' ? `$${item.actual.toLocaleString()}` : item.actual.toLocaleString()}{item.metric.includes('Churn') || item.metric.includes('Margin') ? '%' : ''}</TableCell>
                                    <TableCell className={item.variance > 0 ? 'text-green-500' : 'text-red-500'}>{item.variance.toFixed(1)}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Quarterly Variance Trend</CardTitle>
                <CardDescription>Overall revenue variance trend.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                     <AreaChart data={varianceChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `${value}%`} />
                        <Tooltip />
                        <Area type="monotone" dataKey="variance" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bot className="text-primary"/>AI Root Cause Analysis</CardTitle>
                    <CardDescription>AI-powered explanation for the key variances this quarter.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-semibold">MRR Shortfall (-6%)</p>
                        <p className="text-sm text-muted-foreground">The primary driver was unexpected churn from two mid-market clients (Innovate LLC, DataSolutions) and a 10-day delay in the Project Alpha launch, which deferred $15k in revenue to Q4.</p>
                    </div>
                     <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-semibold">Lead Generation Beat (+10%)</p>
                        <p className="text-sm text-muted-foreground">The "Future of AI" webinar in August was highly successful, generating 150 more MQLs than forecasted, exceeding the target by 30%.</p>
                    </div>
                </CardContent>
           </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><SlidersHorizontal className="text-primary"/>Scenario Simulator</CardTitle>
                    <CardDescription>Model how changes might impact your Q4 forecast.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <Label htmlFor="sales-reps">New Sales Reps</Label>
                            <Input id="sales-reps" type="number" defaultValue="2" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="marketing-spend">Ad Spend Increase</Label>
                            <Input id="marketing-spend" type="number" defaultValue="10000" />
                        </div>
                    </div>
                    <Button className="w-full"><RefreshCw className="mr-2 h-4 w-4"/>Recalculate Forecast</Button>
                    <div className="p-3 bg-secondary rounded-lg text-center">
                        <p className="font-semibold text-primary">Projected Q4 MRR: $285,000</p>
                        <p className="text-sm text-muted-foreground">(An increase of $35,000 from current forecast)</p>
                    </div>
                </CardContent>
           </Card>
       </div>
    </div>
  );
}
