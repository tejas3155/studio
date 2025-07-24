
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus, FileClock, KeyRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const members = [
  { name: "Anjali Mehta", email: "anjali@copervise.com", role: "Executive", departments: ["Finance", "Legal"], status: "Active" },
  { name: "Rohan Sharma", email: "rohan@copervise.com", role: "Coordinator", departments: ["Finance"], status: "Active" },
  { name: "Priya Patel", email: "priya@copervise.com", role: "Coordinator", departments: ["Sales", "IT"], status: "Active" },
  { name: "Amit Singh", email: "amit@copervise.com", role: "Coordinator", departments: ["HR"], status: "Invited" },
];

const auditLog = [
    { date: "2024-07-28", user: "Anjali Mehta", action: "Promoted Rohan Sharma to 'Coordinator' role in Finance." },
    { date: "2024-07-27", user: "System (SCIM)", action: "Synced 5 new users from Okta." },
    { date: "2024-07-26", user: "Priya Patel", action: "Invited new_user@copervise.com to the 'Sales' department." },
]

export default function CorporateTeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Corporate Team Management</h1>
        <p className="text-muted-foreground">Manage members, roles, permissions, and departments across the enterprise.</p>
      </div>
        <Tabs defaultValue="members">
            <div className="flex justify-between items-center">
                <TabsList>
                    <TabsTrigger value="members">Members</TabsTrigger>
                    <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
                    <TabsTrigger value="sso">SCIM/SSO</TabsTrigger>
                    <TabsTrigger value="audit">Audit Log</TabsTrigger>
                </TabsList>
                 <Dialog>
                    <DialogTrigger asChild>
                         <Button><UserPlus className="mr-2 h-4 w-4"/>Invite Member</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Invite New Member</DialogTitle>
                        <DialogDescription>
                            Enter the email address and assign a role and department.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <Input id="email" type="email" placeholder="name@company.com" className="col-span-3" />
                            </div>
                             <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="role" className="text-right">Role</Label>
                                <Select>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="executive">Executive</SelectItem>
                                        <SelectItem value="coordinator">Coordinator</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                             <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="department" className="text-right">Department</Label>
                                <Select>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select a department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="finance">Finance</SelectItem>
                                        <SelectItem value="legal">Legal</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                        <Button type="submit">Send Invitation</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <TabsContent value="members" className="mt-4">
                 <Card>
                    <CardHeader>
                        <CardTitle>Team Members</CardTitle>
                        <CardDescription>List of all active and invited members in your organization.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Department(s)</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {members.map((member) => (
                                    <TableRow key={member.email}>
                                        <TableCell>
                                            <p className="font-medium">{member.name}</p>
                                            <p className="text-xs text-muted-foreground">{member.email}</p>
                                        </TableCell>
                                        <TableCell>{member.role}</TableCell>
                                        <TableCell>{member.departments.join(', ')}</TableCell>
                                        <TableCell>
                                            <Badge variant={member.status === 'Active' ? 'secondary' : 'outline'}>{member.status}</Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                 </Card>
            </TabsContent>
            <TabsContent value="sso" className="mt-4">
                 <Card>
                    <CardHeader>
                        <CardTitle>SCIM/SSO Configuration</CardTitle>
                        <CardDescription>Manage single sign-on and automated user provisioning.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 border rounded-lg flex items-center justify-between">
                            <div>
                                <p className="font-medium">Okta Integration</p>
                                <p className="text-sm text-muted-foreground">User provisioning is active.</p>
                            </div>
                            <Button variant="destructive">Disconnect</Button>
                        </div>
                         <div className="p-4 border rounded-lg flex items-center justify-between">
                            <div>
                                <p className="font-medium">Microsoft Entra ID</p>
                                <p className="text-sm text-muted-foreground">Not connected.</p>
                            </div>
                            <Button variant="outline">Connect</Button>
                        </div>
                    </CardContent>
                 </Card>
            </TabsContent>
             <TabsContent value="audit" className="mt-4">
                 <Card>
                    <CardHeader>
                        <CardTitle>Audit Log</CardTitle>
                        <CardDescription>Track important changes to team members and permissions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {auditLog.map(log => (
                                <li key={log.date + log.action} className="flex items-center gap-4">
                                    <FileClock className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm">{log.action}</p>
                                        <p className="text-xs text-muted-foreground">{log.date} by {log.user}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                 </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}
