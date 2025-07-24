
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, Send, File, Shield, Bot } from "lucide-react";
import { Progress } from '@/components/ui/progress';

const policies = [
  { name: "Work From Home Policy", version: "1.4", status: "Active", lastUpdated: "2024-05-20", ack: 98, owner: "HR" },
  { name: "Data Protection Policy", version: "2.0", status: "Active", lastUpdated: "2024-03-15", ack: 100, owner: "Legal" },
  { name: "Code of Conduct", version: "1.8", status: "Active", lastUpdated: "2024-01-10", ack: 100, owner: "HR" },
  { name: "Travel & Expense Policy", version: "2.1", status: "Draft", lastUpdated: "2024-07-28", ack: 0, owner: "Finance" },
  { name: "Information Security Policy", version: "3.0", status: "Needs Acknowledgement", lastUpdated: "2024-07-25", ack: 15, owner: "IT Security" },
];

export default function CorporatePolicyHubPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Corporate Policy Hub</h1>
        <p className="text-muted-foreground">Central repository for org policies with acknowledgement tracking and versioning.</p>
      </div>

       <div className="flex justify-end gap-2">
        <Button variant="outline"><Send className="mr-2 h-4 w-4"/> Request Acknowledgement</Button>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Policy</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Policy Library</CardTitle>
                    <CardDescription>All organizational policies, their status, and acknowledgement rates.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Policy Name</TableHead>
                                <TableHead>Version</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Owner Dept</TableHead>
                                <TableHead>Acknowledgement</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {policies.map((policy) => (
                            <TableRow key={policy.name}>
                                <TableCell className="font-medium">{policy.name}</TableCell>
                                <TableCell>{policy.version}</TableCell>
                                <TableCell>
                                    <Badge variant={policy.status.toLowerCase() === 'active' ? 'secondary' : 'default'}>{policy.status}</Badge>
                                </TableCell>
                                <TableCell>{policy.owner}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Progress value={policy.ack} className="w-24" />
                                        <span>{policy.ack}%</span>
                                    </div>
                                </TableCell>
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
                    <CardTitle className="flex items-center gap-2"><File />Policy Viewer</CardTitle>
                    <CardDescription>Select a policy to view its contents.</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground pt-12">
                    <Shield className="h-16 w-16 mx-auto" />
                    <p className="mt-4">The content of the selected policy will be displayed here.</p>
                </CardContent>
            </Card>
             <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bot/>AI Change Summarizer</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">When the "Travel & Expense Policy" (v2.1) is published, AI will summarize the key changes from v2.0 for the acknowledgement request email.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
