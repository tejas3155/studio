
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Bot } from "lucide-react";

const heatmapData = [
  { department: "Finance", overdueTasks: 2, complianceGaps: 1, budgetOverrun: "-2%", risk: "Low" },
  { department: "Legal", overdueTasks: 5, complianceGaps: 3, budgetOverrun: "5%", risk: "Medium" },
  { department: "Security", overdueTasks: 1, complianceGaps: 0, budgetOverrun: "1%", risk: "Low" },
  { department: "Sustainability", overdueTasks: 8, complianceGaps: 4, budgetOverrun: "0%", risk: "High" },
  { department: "Sales", overdueTasks: 12, complianceGaps: 0, budgetOverrun: "8%", risk: "High" },
];

const getCellClass = (value: number, higherIsWorse = true) => {
    if (higherIsWorse) {
        if (value > 10) return 'bg-red-500/50';
        if (value > 4) return 'bg-yellow-500/50';
    } else {
        if (value < -5) return 'bg-red-500/50';
    }
    return 'bg-green-500/30';
};

const getRiskClass = (risk: string) => {
    if (risk === 'High') return 'bg-destructive text-destructive-foreground';
    if (risk === 'Medium') return 'bg-yellow-500 text-black';
    return 'bg-green-500 text-white';
};

export default function DepartmentHeatmapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Department Heatmaps</h1>
        <p className="text-muted-foreground">Visualize workload, overdue tasks, compliance gaps, and risk by department.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Cross-Department Performance Heatmap</CardTitle>
              <CardDescription>At-a-glance view of key metrics across all departments.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-center">Overdue Tasks</TableHead>
                    <TableHead className="text-center">Compliance Gaps</TableHead>
                    <TableHead className="text-center">Budget Overrun</TableHead>
                    <TableHead className="text-center">AI Risk Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {heatmapData.map((row) => (
                    <TableRow key={row.department}>
                      <TableCell className="font-medium">{row.department}</TableCell>
                      <TableCell className={`text-center font-bold ${getCellClass(row.overdueTasks)}`}>{row.overdueTasks}</TableCell>
                      <TableCell className={`text-center font-bold ${getCellClass(row.complianceGaps)}`}>{row.complianceGaps}</TableCell>
                      <TableCell className={`text-center font-bold ${getCellClass(parseInt(row.budgetOverrun), true)}`}>{row.budgetOverrun}</TableCell>
                      <TableCell className="text-center">
                        <Badge className={`${getRiskClass(row.risk)}`}>{row.risk}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bot />AI Workload Balancer</CardTitle>
            <CardDescription>AI-powered recommendations to mitigate team overload and risk.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
                <p className="font-semibold text-destructive flex items-center gap-2"><AlertCircle/>Sales Department Overloaded</p>
                <p className="text-sm mt-1">The Sales team has 12 overdue tasks and is over budget. This poses a risk to Q3 targets.</p>
                <p className="text-sm mt-2 text-primary">Recommendation: Re-assign 3 non-critical tasks to the Marketing department to balance workload.</p>
            </div>
             <div className="p-4 bg-yellow-500/10 border border-yellow-500 rounded-lg">
                <p className="font-semibold text-yellow-600 flex items-center gap-2"><AlertCircle/>Sustainability Team at Risk</p>
                <p className="text-sm mt-1">The Sustainability team has a high number of compliance gaps (4) and overdue tasks (8), indicating a potential bottleneck for ESG reporting.</p>
                 <p className="text-sm mt-2 text-primary">Recommendation: Allocate an additional resource from the Legal team to support ESG data validation.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
