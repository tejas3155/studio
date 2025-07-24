
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Bot, TrendingUp, AlertTriangle } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, Area, AreaChart } from "recharts"
import { Skeleton } from '@/components/ui/skeleton';

const chartData = [
  { month: "January", projected: 400000, actual: 240000 },
  { month: "February", projected: 300000, actual: 139800 },
  { month: "March", projected: 200000, actual: 980000 },
  { month: "April", projected: 278000, actual: 390800 },
  { month: "May", projected: 189000, actual: 480000 },
  { month: "June", projected: 239000, actual: 380000 },
]

const chartConfig = {
  projected: { label: "Projected", color: "hsl(var(--chart-1))" },
  actual: { label: "Actual", color: "hsl(var(--chart-2))" },
}

const invoices = [
  { client: "TechCorp (Enterprise)", amount: 150000, daysOverdue: 32, owner: "Finance Dept", region: "EMEA" },
  { client: "Innovate LLC (SMB)", amount: 7500, daysOverdue: 15, owner: "Sales Dept", region: "NA" },
  { client: "DataSolutions (Enterprise)", amount: 220000, daysOverdue: 45, owner: "Finance Dept", region: "APAC" },
  { client: "HealthPlus (SMB)", amount: 5000, daysOverdue: 5, owner: "Sales Dept", region: "NA" },
]

export default function CorporateRevenueRiskPage() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight font-headline">Corporate Revenue Risk</h1>
            <p className="text-muted-foreground">Surface cross-department revenue leakage, at-risk units, and AI-projected shortfalls.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
                 <CardHeader>
                    <CardTitle>Revenue Overview (Cross-Department)</CardTitle>
                    <CardDescription>Projected vs. actual revenue for H1 2025. AI forecasts a 5% shortfall for H2.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px] w-full">
                        <AreaChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                             <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                            <Area dataKey="actual" type="natural" fill="var(--color-actual)" fillOpacity={0.4} stroke="var(--color-actual)" stackId="a" />
                             <Area dataKey="projected" type="natural" fill="var(--color-projected)" fillOpacity={0.4} stroke="var(--color-projected)" stackId="b" />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-destructive"/>High-Risk Business Units</CardTitle>
                    <CardDescription>AI-identified divisions with high churn or shortfall risk.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                            <div>
                                <p className="font-semibold text-destructive">EMEA Enterprise Sales</p>
                                <p className="text-sm text-muted-foreground">Reason: Key client churn risk</p>
                            </div>
                            <ArrowDown className="h-5 w-5 text-red-500" />
                        </li>
                        <li className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">APAC Services</p>
                                <p className="text-sm text-muted-foreground">Reason: Project delays</p>
                            </div>
                            <ArrowDown className="h-5 w-5 text-yellow-500" />
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Overdue Invoices by Department</CardTitle>
                        <CardDescription>All invoices past their due date across the organization.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Client / Region</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Days Overdue</TableHead>
                                    <TableHead>Owner Dept</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isClient ? invoices.map((invoice) => (
                                    <TableRow key={invoice.client}>
                                        <TableCell>
                                            <p className="font-medium">{invoice.client}</p>
                                            <p className="text-xs text-muted-foreground">{invoice.region}</p>
                                        </TableCell>
                                        <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                                        <TableCell className="text-red-500 font-bold">{invoice.daysOverdue}</TableCell>
                                        <TableCell>{invoice.owner}</TableCell>
                                    </TableRow>
                                )) : (
                                <>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.client}>
                                        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-20" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-10" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-20" /></TableCell>
                                    </TableRow>
                                ))}
                                </>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Bot />AI Recommendations</CardTitle>
                         <CardDescription>AI-driven actions to mitigate corporate revenue risk.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       <div className="bg-primary/10 p-3 rounded-lg">
                         <p className="font-semibold">Collector Nudge AI</p>
                         <p className="text-sm">Initiate collection process for DataSolutions ($220k, 45 days overdue). Draft follow-up email?</p>
                       </div>
                        <div className="bg-secondary p-3 rounded-lg">
                         <p className="font-semibold">Daily Digest Summary</p>
                         <p className="text-sm">Today's key risks: 1) TechCorp contract renewal, 2) EMEA revenue shortfall. Send detailed brief to CRO?</p>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}
