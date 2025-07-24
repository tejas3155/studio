
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle } from "lucide-react";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis } from "recharts"


const vendors = [
  { name: "XYZ Logistics", compliance: 82, onTimeDelivery: 96, risk: "Medium", costTrend: "Increasing" },
  { name: "Alpha Supplies", compliance: 95, onTimeDelivery: 88, risk: "Low", costTrend: "Stable" },
  { name: "Quantum IT", compliance: 75, onTimeDelivery: 99, risk: "High", costTrend: "Stable" },
  { name: "InfraConstruct", compliance: 91, onTimeDelivery: 92, risk: "Low", costTrend: "Decreasing" },
];

const chartData = [
    { cost: 100, performance: 96, name: "XYZ Logistics" },
    { cost: 80, performance: 88, name: "Alpha Supplies" },
    { cost: 120, performance: 99, name: "Quantum IT" },
    { cost: 90, performance: 92, name: "InfraConstruct" },
]

const chartConfig = {
  performance: {
    label: "Performance",
  },
  cost: {
    label: "Cost",
  },
}


export default function VendorRiskMatrixPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight font-headline">Vendor Risk Matrix</h1>
                <p className="text-muted-foreground">Evaluate vendors on performance, compliance, cost, and risk.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Vendor Scoreboard</CardTitle>
                        <CardDescription>Key performance and risk indicators for all active vendors.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Vendor</TableHead>
                                    <TableHead>Compliance</TableHead>
                                    <TableHead>On-Time Delivery</TableHead>
                                    <TableHead>Risk</TableHead>
                                    <TableHead>Cost Trend</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {vendors.map((vendor) => (
                                    <TableRow key={vendor.name}>
                                        <TableCell className="font-medium">{vendor.name}</TableCell>
                                        <TableCell>{vendor.compliance}%</TableCell>
                                        <TableCell>{vendor.onTimeDelivery}%</TableCell>
                                        <TableCell><Badge variant={vendor.risk === 'Low' ? 'secondary' : 'destructive'}>{vendor.risk}</Badge></TableCell>
                                        <TableCell>{vendor.costTrend}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Risk Matrix Visualization</CardTitle>
                        <CardDescription>Cost vs. Performance analysis of vendors.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px] w-full">
                            <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="cost" type="number" name="Cost" unit="$" tickLine={false} axisLine={false} tickMargin={10} />
                                <YAxis dataKey="performance" type="number" name="Performance" unit="%" tickLine={false} axisLine={false} tickMargin={10} />
                                <ZAxis dataKey="name" type="category" name="Vendor" />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                                <Scatter data={chartData} fill="hsl(var(--primary))" />
                            </ScatterChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
            
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
                                    <p className="font-semibold">XYZ Logistics - MSA 2024</p>
                                    <p className="text-sm text-muted-foreground">Expires: 2025-12-31</p>
                                </div>
                            </div>
                            <Button variant="outline">View Summary</Button>
                       </li>
                        <li className="flex justify-between items-center p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-primary"/>
                                <div>
                                    <p className="font-semibold">Quantum IT - Project Agreement</p>
                                    <p className="text-sm text-muted-foreground">Expires: 2024-11-01</p>
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
    );
}
