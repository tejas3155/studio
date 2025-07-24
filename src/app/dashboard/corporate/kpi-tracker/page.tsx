
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bot, PlusCircle, FileUp, Download, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const kpiData = [
  { name: 'Jan', MRR: 1.8, Churn: 4.5, CSAT: 85 },
  { name: 'Feb', MRR: 1.95, Churn: 4.2, CSAT: 88 },
  { name: 'Mar', MRR: 2.1, Churn: 3.9, CSAT: 90 },
  { name: 'Apr', MRR: 2.05, Churn: 4.1, CSAT: 87 },
  { name: 'May', MRR: 2.2, Churn: 3.8, CSAT: 91 },
  { name: 'Jun', MRR: 2.35, Churn: 3.5, CSAT: 92 },
];

const kpiTableData = [
    { id: 1, name: "Corp. MRR", value: "$2.35M", target: "$2.5M", variance: "-6%", owner: "Finance" },
    { id: 2, name: "Corp. Churn Rate", value: "3.5%", target: "<4%", variance: "N/A", owner: "Sales" },
    { id: 3, name: "Avg. CSAT", value: "92%", target: ">90%", variance: "N/A", owner: "Support" },
    { id: 4, name: "Enterprise CAC", value: "$12,000", target: "$11,000", variance: "+9%", owner: "Marketing" },
];

export default function CorporateKpiTrackerPage() {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight font-headline">Corporate KPI Tracker</h1>
                <p className="text-muted-foreground">Visualize and analyze KPIs for the entire organization and by department.</p>
            </div>
            <div className="flex gap-2">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter Department" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Import</Button>
                <Button><PlusCircle className="mr-2 h-4 w-4" /> Add KPI</Button>
            </div>
        </div>
        
        <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="table">Table View</TabsTrigger>
                <TabsTrigger value="targets">Targets vs. Actuals</TabsTrigger>
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader><CardTitle>MRR Growth (in millions)</CardTitle></CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={kpiData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis tickFormatter={(value) => `$${value}M`}/>
                                    <Tooltip />
                                    <Line type="monotone" dataKey="MRR" stroke="hsl(var(--primary))" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Overall Churn Rate (%)</CardTitle></CardHeader>
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
                        <CardHeader><CardTitle>Average CSAT</CardTitle></CardHeader>
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
            <TabsContent value="table" className="mt-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Raw KPI Data</CardTitle>
                        <CardDescription>Detailed table view of all tracked corporate KPIs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>KPI Name</TableHead>
                                    <TableHead>Current Value</TableHead>
                                    <TableHead>Target</TableHead>
                                    <TableHead>Variance</TableHead>
                                    <TableHead>Owner Dept</TableHead>
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
            <TabsContent value="insights" className="mt-4">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Insights & Variance Explanation</CardTitle>
                        <CardDescription>AI-generated explanations and forecasts for your corporate KPIs.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="font-semibold text-primary">MRR Variance (-6%)</p>
                            <p className="text-sm">The primary driver for the MRR shortfall is a 12% drop in performance from the EMEA sales division, compounded by higher-than-expected churn in the SMB segment.</p>
                        </div>
                         <div className="p-4 bg-secondary rounded-lg">
                            <p className="font-semibold text-primary">CAC Increase (+9%)</p>
                            <p className="text-sm">Enterprise CAC is up due to increased ad spend on LinkedIn campaigns in Q2. While lead volume increased, conversion rates remained flat, leading to higher acquisition costs per customer.</p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}
