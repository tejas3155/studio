
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, FileText, PlusCircle } from "lucide-react";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, ResponsiveContainer } from "recharts"


const vendors = [
  { name: "Acme Logistics", compliance: 82, performance: 96, risk: "Medium", esg: 64, disputes: 3 },
  { name: "Alpha Supplies", compliance: 95, performance: 88, risk: "Low", esg: 88, disputes: 0 },
  { name: "Quantum IT", compliance: 75, performance: 99, risk: "High", esg: 71, disputes: 1 },
  { name: "InfraConstruct", compliance: 91, performance: 92, risk: "Low", esg: 95, disputes: 0 },
];

const chartData = vendors.map(v => ({ cost: 100 - v.compliance, performance: v.performance, name: v.name, risk: v.risk === 'High' ? 100 : v.risk === 'Medium' ? 60 : 30 }));

const chartConfig = {
  performance: { label: "Performance" },
  cost: { label: "Compliance Risk" },
}


export default function CorporateVendorRiskPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight font-headline">Vendor Risk Matrix</h1>
                <p className="text-muted-foreground">Evaluate vendors on performance, compliance, ESG, and cost-effectiveness.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Vendor Scoreboard</CardTitle>
                        <CardDescription>Key risk and performance indicators for all strategic vendors.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Vendor</TableHead>
                                    <TableHead>Performance</TableHead>
                                    <TableHead>ESG Score</TableHead>
                                    <TableHead>Risk Level</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {vendors.map((vendor) => (
                                    <TableRow key={vendor.name}>
                                        <TableCell className="font-medium">{vendor.name}</TableCell>
                                        <TableCell>{vendor.performance}%</TableCell>
                                        <TableCell>{vendor.esg}%</TableCell>
                                        <TableCell><Badge variant={vendor.risk === 'Low' ? 'secondary' : 'destructive'}>{vendor.risk}</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Risk Matrix: Performance vs. Compliance</CardTitle>
                        <CardDescription>Vendors in the top-left are ideal (high performance, low risk).</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <CartesianGrid />
                                <XAxis dataKey="performance" type="number" name="Performance Score" unit="%" domain={[70, 100]} />
                                <YAxis dataKey="cost" type="number" name="Compliance Risk" unit="%" domain={[0, 30]}/>
                                <ZAxis dataKey="name" type="category" name="Vendor" />
                                <ChartTooltip cursor={{ strokeDasharray: '3 3' }} content={<ChartTooltipContent />} />
                                <Scatter name="Vendors" data={chartData} fill="hsl(var(--primary))" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Vendor Comparison</CardTitle>
                        <CardDescription>AI-generated pros and cons for vendor selection.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-center gap-2">
                           <Button variant="outline">Acme Logistics</Button>
                           <Button variant="outline">InfraConstruct</Button>
                           <Button>Compare</Button>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                           <p className="font-semibold text-primary">Recommendation: InfraConstruct</p>
                           <p className="text-sm mt-1">While both have similar performance, InfraConstruct has a stronger ESG and compliance score (91% vs 82%) and a decreasing cost trend. This makes them the lower-risk partner for long-term engagements.</p>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Contracts & Documents</CardTitle>
                        <CardDescription>Access and manage vendor contracts and related documents.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                           <li className="flex justify-between items-center p-3 border rounded-lg">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-primary"/>
                                    <div>
                                        <p className="font-semibold">Acme Logistics - MSA 2024</p>
                                        <p className="text-sm text-muted-foreground">Expires: 2025-12-31</p>
                                    </div>
                                </div>
                                <Button variant="outline">View Summary</Button>
                           </li>
                        </ul>
                         <Button variant="ghost" className="mt-4 w-full">
                            <PlusCircle className="mr-2 h-4 w-4" /> Add New Contract
                        </Button>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
