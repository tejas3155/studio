
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle, AlertTriangle } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const contracts = [
  { name: "MSA with TechCorp", party: "Client", expiry: "2025-12-31", breaches: 0, risk: "Low", status: "Active" },
  { name: "Project Agreement - Alpha", party: "Client", expiry: "2024-10-31", breaches: 2, risk: "High", status: "At Risk" },
  { name: "XYZ Logistics - Service Contract", party: "Vendor", expiry: "2025-06-30", breaches: 0, risk: "Low", status: "Active" },
  { name: "Office Lease Agreement", party: "Vendor", expiry: "2024-09-30", breaches: 0, risk: "Medium", status: "Renew Soon" },
];

const contractSummaries = {
    "Project Agreement - Alpha": {
        keyDates: "Renewal decision by 2024-09-30. Project completion by 2024-10-15.",
        penalties: "10% penalty on total contract value for missed completion deadline. 2 SLA breaches recorded for timeline deviation.",
        risks: "High risk of non-renewal due to performance issues. Auto-renewal clause is NOT present.",
    }
}

export default function ContractHealthPage() {
    const [selectedContract, setSelectedContract] = React.useState<string | null>(null);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Contract Health Monitor</h1>
        <p className="text-muted-foreground">Track expiry dates, SLA breaches, and AI-identified risks in your contracts.</p>
      </div>

       <div className="flex justify-end">
        <Button><PlusCircle className="mr-2 h-4 w-4" /> Upload Contract</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contract Overview</CardTitle>
          <CardDescription>All active client and vendor contracts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract / Party</TableHead>
                <TableHead>Expires On</TableHead>
                <TableHead>SLA Breaches</TableHead>
                <TableHead>AI Risk</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.name}>
                  <TableCell>
                      <p className="font-medium">{contract.name}</p>
                      <p className="text-sm text-muted-foreground">{contract.party}</p>
                  </TableCell>
                  <TableCell>{contract.expiry}</TableCell>
                  <TableCell className="text-center">{contract.breaches > 0 ? <span className="text-red-500 font-bold">{contract.breaches}</span> : '0'}</TableCell>
                  <TableCell>
                    <Badge variant={contract.risk === 'Low' ? 'secondary' : 'destructive'}>{contract.risk}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={contract.status === 'Active' ? 'default' : 'outline'} className={contract.status === 'At Risk' ? 'bg-red-500 text-white' : contract.status === 'Renew Soon' ? 'bg-yellow-500' : ''}>
                        {contract.status === 'At Risk' && <AlertTriangle className="mr-1 h-3 w-3" />}
                        {contract.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                     <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedContract(contract.name)}>View Summary</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                        <div className="mx-auto w-full max-w-2xl">
                        <DrawerHeader>
                          <DrawerTitle>AI Summary: {selectedContract}</DrawerTitle>
                          <DrawerDescription>Key clauses, dates, and risks identified by AI.</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-8 space-y-4">
                            {selectedContract && contractSummaries[selectedContract as keyof typeof contractSummaries] ? (
                                <>
                                 <Card>
                                    <CardHeader><CardTitle>Key Dates</CardTitle></CardHeader>
                                    <CardContent><p>{contractSummaries[selectedContract as keyof typeof contractSummaries].keyDates}</p></CardContent>
                                 </Card>
                                  <Card>
                                    <CardHeader><CardTitle>Penalties & Breaches</CardTitle></CardHeader>
                                    <CardContent><p>{contractSummaries[selectedContract as keyof typeof contractSummaries].penalties}</p></CardContent>
                                 </Card>
                                  <Card className="border-destructive bg-destructive/10">
                                    <CardHeader><CardTitle className="text-destructive">Identified Risks</CardTitle></CardHeader>
                                    <CardContent><p>{contractSummaries[selectedContract as keyof typeof contractSummaries].risks}</p></CardContent>
                                 </Card>
                                </>
                            ) : (
                                <p className="text-center text-muted-foreground">No AI summary available for this contract.</p>
                            )}
                        </div>
                        </div>
                      </DrawerContent>
                     </Drawer>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
        <Card>
            <CardHeader>
                <CardTitle>Renewal Timeline</CardTitle>
                <CardDescription>Upcoming contract renewal and expiry dates.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                    <FileText className="mx-auto h-12 w-12" />
                    <p className="mt-4">Gantt chart or timeline view of contract renewals will be shown here.</p>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
