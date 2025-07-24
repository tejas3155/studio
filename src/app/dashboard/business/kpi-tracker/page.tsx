
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bot, PlusCircle, FileUp, Download } from "lucide-react";

const kpiData = [
  { name: 'Jan', MRR: 180000, Churn: 4.5, CSAT: 85 },
  { name: 'Feb', MRR: 195000, Churn: 4.2, CSAT: 88 },
  { name: 'Mar', MRR: 210000, Churn: 3.9, CSAT: 90 },
  { name: 'Apr', MRR: 205000, Churn: 4.1, CSAT: 87 },
  { name: 'May', MRR: 220000, Churn: 3.8, CSAT: 91 },
  { name: 'Jun', MRR: 235000, Churn: 3.5, CSAT: 92 },
];

const kpiTableData = [
    { id: 1, name: "MRR", value: "$235,000", target: "$250,000", variance: "-6%", owner: "R. Singh" },
    { id: 2, name: "Churn Rate", value: "3.5%", target: "<4%", variance: "N/A", owner: "A. Patel" },
    { id: 3, name: "CSAT", value: "92%", target: ">90%", variance: "N/A", owner: "S. Khan" },
    { id: 4, name: "CAC", value: "$1,200", target: "$1,100", variance: "+9%", owner: "P. Mehta" },
];

export default function KpiTrackerPage() {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight font-headline">KPI Tracker</h1>
                <p className="text-muted-foreground">Visualize and analyze key performance indicators for your business.</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Import CSV</Button>
                <Button><PlusCircle className="mr-2 h-4 w-4" /> Add KPI</Button>
                <Button variant="secondary"><Bot className="mr-2 h-4 w-4" /> Explain with AI</Button>
            </div>
        </div>
        
        <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="table">Table View</TabsTrigger>
                <TabsTrigger value="targets">Targets vs. Actuals</TabsTrigger>
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>MRR Growth</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={kpiData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis tickFormatter={(value) => `$${value/1000}k`}/>
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="MRR" stroke="hsl(var(--primary))" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Churn Rate (%)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={kpiData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="Churn" fill="hsl(var(--primary))" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer Satisfaction (CSAT)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={kpiData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="CSAT" stroke="hsl(var(--primary))" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent value="table">
                <Card>
                    <CardHeader>
                        <CardTitle>Raw KPI Data</CardTitle>
                        <CardDescription>Detailed table view of all tracked KPIs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>KPI Name</TableHead>
                                    <TableHead>Current Value</TableHead>
                                    <TableHead>Target</TableHead>
                                    <TableHead>Variance</TableHead>
                                    <TableHead>Owner</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {kpiTableData.map((kpi) => (
                                    <TableRow key={kpi.id}>
                                        <TableCell className="font-medium">{kpi.name}</TableCell>
                                        <TableCell>{kpi.value}</TableCell>
                                        <TableCell>{kpi.target}</TableCell>
                                        <TableCell className={kpi.variance.startsWith('-') ? 'text-green-500' : 'text-red-500'}>{kpi.variance}</TableCell>
                                        <TableCell>{kpi.owner}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="targets">
                 <Card>
                    <CardHeader>
                        <CardTitle>Targets vs. Actuals</CardTitle>
                        <CardDescription>Comparison of performance against set targets.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="text-center py-12 text-muted-foreground">
                            <p>Visualizations for Targets vs. Actuals will be implemented here.</p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="insights">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Insights</CardTitle>
                        <CardDescription>AI-generated explanations and forecasts for your KPIs.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="font-semibold text-primary">MRR Dip in April</p>
                            <p className="text-sm">The slight dip in April's MRR is correlated with a 3% increase in churn within the SMB segment. This was likely caused by a competitor's new pricing launch.</p>
                        </div>
                         <div className="p-4 bg-secondary rounded-lg">
                            <p className="font-semibold text-primary">CSAT Improvement</p>
                            <p className="text-sm">The consistent rise in CSAT since March aligns with the rollout of the new support ticketing system, indicating a positive impact on customer experience.</p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}
