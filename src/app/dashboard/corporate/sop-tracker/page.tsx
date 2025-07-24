
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, GitCommit, Users, AlertCircle, GitPullRequest, Link as LinkIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const sops = [
  { name: "Quarterly Financial Reporting", department: "Finance", version: "3.0", status: "Active", owner: "R. Sharma", approval: "Approved" },
  { name: "Incident Response Plan", department: "IT Security", version: "4.1", status: "Active", owner: "P. Mehta", approval: "Approved" },
  { name: "Vendor Onboarding", department: "Procurement", version: "2.5", status: "Pending Approval", owner: "A. Singh", approval: "Pending" },
  { name: "ESG Data Collection", department: "Sustainability", version: "1.2", status: "Review Overdue", owner: "S. Khan", approval: "Approved" },
];

export default function CorporateSopTrackerPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-headline">SOP Tracker (Corporate)</h1>
          <p className="text-muted-foreground">Manage, version, and track all Standard Operating Procedures with approval chains.</p>
        </div>
         <div className="flex gap-2">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter Department" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="it">IT Security</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                </SelectContent>
            </Select>
            <Button><PlusCircle className="mr-2 h-4 w-4" /> Create New SOP</Button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>SOP Library</CardTitle>
                <CardDescription>Central repository for all business processes, with approval workflows.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>SOP Name / Dept</TableHead>
                        <TableHead>Version</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Approval</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {sops.map((sop) => (
                        <TableRow key={sop.name}>
                        <TableCell>
                            <p className="font-medium">{sop.name}</p>
                            <p className="text-sm text-muted-foreground">{sop.department}</p>
                        </TableCell>
                        <TableCell>{sop.version}</TableCell>
                        <TableCell>
                            <Badge variant={sop.status === 'Active' ? 'secondary' : 'destructive'}>{sop.status}</Badge>
                        </TableCell>
                        <TableCell>
                            <Badge variant={sop.approval === 'Approved' ? 'default' : 'outline'}>{sop.approval}</Badge>
                        </TableCell>
                         <TableCell>
                            <Dialog>
                                <DialogTrigger asChild><Button variant="ghost" size="sm">View</Button></DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>{sop.name} - v{sop.version}</DialogTitle>
                                        <DialogDescription>Owner: {sop.owner} | Department: {sop.department}</DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader><CardTitle className="text-base flex items-center gap-2"><GitCommit/>Diff Viewer</CardTitle></CardHeader>
                                            <CardContent><p className="text-sm text-muted-foreground">Version {sop.version} updated the 'Data Sources' section to include automated feeds from the new ERP.</p></CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader><CardTitle className="text-base flex items-center gap-2"><GitPullRequest/>Approval Workflow</CardTitle></CardHeader>
                                            <CardContent><p className="text-sm">Legal Dept (Approved) → Finance Head (Approved)</p></CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader><CardTitle className="text-base flex items-center gap-2"><LinkIcon/>Dependency Map</CardTitle></CardHeader>
                                            <CardContent><p className="text-sm text-muted-foreground">This SOP is linked to: Regulatory Filing "SEBI Q3" and Task "Generate Monthly Report".</p></CardContent>
                                        </Card>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
             <Card className="bg-destructive/10 border-destructive">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive"><AlertCircle />AI Reminder</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">The "ESG Data Collection" SOP is overdue for its scheduled review. An alert has been sent to the owner, S. Khan.</p>
                </CardContent>
            </Card>
             <Card className="bg-yellow-500/10 border-yellow-500">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-600"><AlertCircle />Pending Approval</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">The "Vendor Onboarding" SOP is waiting for approval from the Legal department head.</p>
                     <Button variant="secondary" size="sm" className="mt-2">Nudge Approver</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
