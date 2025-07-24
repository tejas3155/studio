
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, GitCommit, Users, AlertCircle } from "lucide-react";

const sops = [
  { name: "Client Onboarding", department: "Sales", version: "2.1", status: "Active", owner: "A. Khan", nextReview: "2025-01-15" },
  { name: "Monthly Tax Filings", department: "Finance", version: "1.3", status: "Active", owner: "R. Sharma", nextReview: "2024-11-30" },
  { name: "Incident Response", department: "IT", version: "3.0", status: "Review Overdue", owner: "P. Mehta", nextReview: "2024-07-01" },
  { name: "Employee Offboarding", department: "HR", version: "1.5", status: "Active", owner: "S. Patel", nextReview: "2025-03-20" },
];

export default function SopTrackerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">SOP Tracker</h1>
        <p className="text-muted-foreground">Manage, version, and track all Standard Operating Procedures.</p>
      </div>

      <div className="flex justify-end">
        <Button><PlusCircle className="mr-2 h-4 w-4" /> Create New SOP</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>SOP Library</CardTitle>
                <CardDescription>Central repository for all business processes.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>SOP Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Version</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Next Review</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {sops.map((sop) => (
                        <TableRow key={sop.name}>
                        <TableCell className="font-medium">{sop.name}</TableCell>
                        <TableCell>{sop.department}</TableCell>
                        <TableCell>{sop.version}</TableCell>
                        <TableCell>
                            <Badge variant={sop.status === 'Active' ? 'secondary' : 'destructive'}>{sop.status}</Badge>
                        </TableCell>
                        <TableCell>{sop.owner}</TableCell>
                        <TableCell>{sop.nextReview}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><GitCommit />Version History</CardTitle>
                    <CardDescription>View diffs between SOP versions.</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    <p>Select an SOP to view its version history and changes.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Users />Dependency Map</CardTitle>
                    <CardDescription>Processes using this SOP.</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    <p>Select an SOP to see dependent tasks and workflows.</p>
                </CardContent>
            </Card>
             <Card className="bg-destructive/10 border-destructive">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive"><AlertCircle />AI Reminder</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">The "Incident Response" SOP is overdue for its scheduled review. An alert has been sent to the owner, P. Mehta.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
