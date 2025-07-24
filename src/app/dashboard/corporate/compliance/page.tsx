
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, AlertCircle, FileCheck2, Search, ChevronsRight } from "lucide-react";

const licenses = [
  { name: "ISO 27001", expiryDate: "2026-01-31", status: "Active", owner: "Security Dept", risk: "Low" },
  { name: "SOC 2 Type 2", expiryDate: "2025-06-30", status: "Active", owner: "Security Dept", risk: "Low" },
  { name: "GDPR Compliance", expiryDate: "N/A", status: "Active", owner: "Legal Dept", risk: "Medium" },
  { name: "SEBI Quarterly Filing", expiryDate: "2024-10-31", status: "Due Soon", owner: "Finance Dept", risk: "High" },
];

const frameworks = [
    { name: "SEBI", status: "95% Complete", gaps: 1 },
    { name: "ISO 27001", status: "100% Complete", gaps: 0 },
    { name: "ESG Reporting", status: "75% Complete", gaps: 4 },
];

export default function CorporateComplianceDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-headline">Compliance Dashboard</h1>
          <p className="text-muted-foreground">Cross-department compliance posture for SEBI, ISO, ESG, and more.</p>
        </div>
         <div className="flex gap-2">
            <Button variant="outline"><FileCheck2 className="mr-2 h-4 w-4" />Request Evidence</Button>
            <Button><PlusCircle className="mr-2 h-4 w-4" />Add License</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Health Score</CardTitle>
            <CardDescription>AI-calculated score based on compliance gaps and overdue tasks.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="text-6xl font-bold text-green-500">92%</div>
            <Badge variant="secondary" className="ml-4 text-green-500 border-green-500">Healthy</Badge>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-yellow-500" />
                AI Alerts & Recommendations
            </CardTitle>
            <CardDescription>Priority escalations and penalty exposure risks.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
                <li><span className="font-bold text-destructive">Penalty Risk:</span> SEBI quarterly filing is due in 15 days. Potential penalty exposure: ₹5,00,000.</li>
                <li><span className="font-bold text-primary">Recommendation:</span> The 'ESG Data Collection' SOP is incomplete. Assign to the Sustainability team to close the 4 open gaps.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
            <CardTitle>Licenses & Certifications</CardTitle>
            <CardDescription>Manage all corporate licenses and certifications.</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Expiry</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Owner</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {licenses.map((license) => (
                    <TableRow key={license.name}>
                    <TableCell className="font-medium">{license.name}</TableCell>
                    <TableCell>{license.expiryDate}</TableCell>
                    <TableCell>
                        <Badge variant={license.status === 'Active' ? 'secondary' : 'default'} className={license.status === 'Due Soon' ? 'bg-yellow-500' : ''}>{license.status}</Badge>
                    </TableCell>
                    <TableCell>{license.owner}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
            <CardTitle>Compliance Frameworks</CardTitle>
            <CardDescription>Track completeness and gaps for each framework.</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
            {frameworks.map(framework => (
                 <div key={framework.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                        <p className="font-semibold">{framework.name}</p>
                        <p className="text-sm text-muted-foreground">{framework.status}</p>
                    </div>
                    <div className="text-right">
                        <p className={`font-bold ${framework.gaps > 0 ? 'text-destructive' : 'text-green-500'}`}>{framework.gaps} Gaps</p>
                        <Button variant="link" size="sm" className="h-auto p-0">View Details <ChevronsRight className="ml-1 h-4 w-4" /></Button>
                    </div>
                 </div>
            ))}
            </div>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
