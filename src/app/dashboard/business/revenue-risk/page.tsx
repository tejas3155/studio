
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Bot, TrendingUp } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart } from "recharts"

const chartData = [
  { month: "January", projected: 4000, actual: 2400 },
  { month: "February", projected: 3000, actual: 1398 },
  { month: "March", projected: 2000, actual: 9800 },
  { month: "April", projected: 2780, actual: 3908 },
  { month: "May", projected: 1890, actual: 4800 },
  { month: "June", projected: 2390, actual: 3800 },
]

const chartConfig = {
  projected: {
    label: "Projected",
    color: "hsl(var(--chart-1))",
  },
  actual: {
    label: "Actual",
    color: "hsl(var(--chart-2))",
  },
}

const invoices = [
  { client: "TechCorp", amount: 15000, daysOverdue: 32, owner: "A. Khan" },
  { client: "Innovate LLC", amount: 7500, daysOverdue: 15, owner: "S. Patel" },
  { client: "DataSolutions", amount: 22000, daysOverdue: 45, owner: "A. Khan" },
  { client: "HealthPlus", amount: 5000, daysOverdue: 5, owner: "P. Mehta" },
]

const clientRisk = [
    { client: "TechCorp", risk: "High", reason: "Consistent late payments" },
    { client: "Innovate LLC", risk: "Medium", reason: "Upcoming contract renewal" },
    { client: "DataSolutions", risk: "Low", reason: "Long-term contract" },
]

export default function RevenueRiskPage() {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight font-headline">Revenue Risk Radar</h1>
            <p className="text-muted-foreground">Detect risks in cash flow, client payments, and overdue invoices.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
                 <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Current vs. projected revenue for the first half of the year.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px] w-full">
                        <LineChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                             <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                tickFormatter={(value) => `$${value / 1000}k`}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Line dataKey="projected" type="monotone" stroke="var(--color-projected)" strokeWidth={2} dot={false} />
                            <Line dataKey="actual" type="monotone" stroke="var(--color-actual)" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Top Revenue Clients</CardTitle>
                    <CardDescription>Monitoring top clients with AI churn prediction.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">GlobalEnterprises</p>
                                <p className="text-sm text-muted-foreground">Churn Risk: Low</p>
                            </div>
                            <TrendingUp className="h-5 w-5 text-green-500" />
                        </li>
                        <li className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">TechCorp</p>
                                <p className="text-sm text-muted-foreground">Churn Risk: High</p>
                            </div>
                            <ArrowDown className="h-5 w-5 text-red-500" />
                        </li>
                         <li className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Innovate LLC</p>
                                <p className="text-sm text-muted-foreground">Churn Risk: Medium</p>
                            </div>
                            <ArrowUp className="h-5 w-5 text-yellow-500" />
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Overdue Invoices</CardTitle>
                        <CardDescription>All invoices that are past their due date.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Days Overdue</TableHead>
                                    <TableHead>Owner</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.client}>
                                        <TableCell className="font-medium">{invoice.client}</TableCell>
                                        <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                                        <TableCell className="text-red-500 font-bold">{invoice.daysOverdue}</TableCell>
                                        <TableCell>{invoice.owner}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Bot />AI Recommendations</CardTitle>
                         <CardDescription>AI-driven actions to mitigate revenue risk.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       <div className="bg-primary/10 p-3 rounded-lg">
                         <p className="font-semibold">Follow up with DataSolutions</p>
                         <p className="text-sm">$22,000 overdue for 45 days. High risk to quarterly target.</p>
                       </div>
                        <div className="bg-secondary p-3 rounded-lg">
                         <p className="font-semibold">Renegotiate with TechCorp</p>
                         <p className="text-sm">Payment terms are consistently missed. Suggest moving to pre-payment.</p>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </div>

    </div>
  )
}
