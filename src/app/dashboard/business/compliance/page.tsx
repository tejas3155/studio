
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, AlertCircle } from "lucide-react";

const licenses = [
  { name: "GST License", expiryDate: "2025-09-30", status: "Active", owner: "R. Sharma", risk: "Low" },
  { name: "Factory Permit", expiryDate: "2024-12-15", status: "Active", owner: "A. Singh", risk: "Low" },
  { name: "FSSAI License", expiryDate: "2024-10-22", status: "Expires Soon", owner: "P. Mehta", risk: "Medium" },
  { name: "Trade License", expiryDate: "2024-08-31", status: "Expired", owner: "R. Sharma", risk: "High" },
];

const auditLogs = [
    { name: "Q2 Internal Audit", date: "2024-07-15", summary: "Minor discrepancies in inventory reporting.", recommendation: "Implement bi-weekly stock checks." },
    { name: "Q1 Internal Audit", date: "2024-04-18", summary: "All processes compliant.", recommendation: "No major changes needed." },
]

export default function BusinessComplianceDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-headline">Compliance Dashboard</h1>
          <p className="text-muted-foreground">At-a-glance health view of your business compliance.</p>
        </div>
         <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Health Score</CardTitle>
            <CardDescription>Overall compliance score</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="text-5xl font-bold text-green-500">92%</div>
            <Badge variant="outline" className="ml-4 text-green-500 border-green-500">Healthy</Badge>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-yellow-500" />
                Regulatory Alerts
            </CardTitle>
            <CardDescription>Recent regulatory changes affecting your business.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
                <li>SEBI updates guidelines for quarterly reporting, effective Q3 2024.</li>
                <li>New GST filing deadline announced for the upcoming fiscal year.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>License & SOP Tracker</CardTitle>
          <CardDescription>Manage all your business licenses and standard operating procedures.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>AI Risk Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {licenses.map((license) => (
                <TableRow key={license.name}>
                  <TableCell className="font-medium">{license.name}</TableCell>
                  <TableCell>{license.expiryDate}</TableCell>
                  <TableCell>
                    <Badge variant={license.status === 'Active' ? 'secondary' : 'destructive'}>{license.status}</Badge>
                  </TableCell>
                  <TableCell>{license.owner}</TableCell>
                  <TableCell>
                    <Badge variant={license.risk === 'Low' ? 'default' : license.risk === 'Medium' ? 'secondary' : 'destructive'} className={license.risk === 'Low' ? 'bg-green-500' : license.risk === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'}>{license.risk}</Badge>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Audit Log & Reports</CardTitle>
                <CardDescription>Access to recent internal audits and summaries.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                {auditLogs.map(log => (
                    <li key={log.name} className="p-3 border rounded-md">
                        <p className="font-semibold">{log.name} - {log.date}</p>
                        <p className="text-sm text-muted-foreground">Summary: {log.summary}</p>
                        <p className="text-sm text-primary">AI Recommendation: {log.recommendation}</p>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Upcoming Compliance Tasks</CardTitle>
                <CardDescription>Key deadlines for filings, renewals, and audits.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                    <p>Calendar view will be implemented here.</p>
                </div>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
