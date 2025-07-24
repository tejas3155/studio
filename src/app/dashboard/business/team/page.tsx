
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus, FileClock } from "lucide-react";
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
  { name: "Anjali Mehta", email: "anjali@copervise.com", role: "Executive", department: "Compliance, Finance", status: "Active" },
  { name: "Rohan Sharma", email: "rohan@copervise.com", role: "Coordinator", department: "Finance", status: "Active" },
  { name: "Priya Patel", email: "priya@copervise.com", role: "Coordinator", department: "Sales, IT", status: "Active" },
  { name: "Amit Singh", email: "amit@copervise.com", role: "Coordinator", department: "HR", status: "Invited" },
];

const auditLog = [
    { date: "2024-07-28", user: "Anjali Mehta", action: "Promoted Rohan Sharma to 'Coordinator' role." },
    { date: "2024-07-27", user: "System", action: "Invited amit@copervise.com to the organization." },
]

export default function TeamManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Team Management</h1>
        <p className="text-muted-foreground">Manage members, roles, permissions, and departments.</p>
      </div>
        <Tabs defaultValue="members">
            <div className="flex justify-between items-center">
                <TabsList>
                    <TabsTrigger value="members">Members</TabsTrigger>
                    <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
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
                            Enter the email address and assign a role and department. They will receive an email to join the organization.
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
                                        <TableCell>{member.department}</TableCell>
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
            <TabsContent value="roles" className="mt-4">
                 <Card>
                    <CardHeader>
                        <CardTitle>Roles & Permissions</CardTitle>
                        <CardDescription>Define what each role can see and do within CoperVise.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center py-12 text-muted-foreground">
                        <p>Permissions management interface will be implemented here.</p>
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
