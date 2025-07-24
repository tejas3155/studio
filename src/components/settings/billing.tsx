
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

export function BillingSettings() {
    const invoices = [
        { id: "INV-2024-007", date: "July 1, 2024", amount: "$99.00", status: "Paid" },
        { id: "INV-2024-006", date: "June 1, 2024", amount: "$99.00", status: "Paid" },
        { id: "INV-2024-005", date: "May 1, 2024", amount: "$99.00", status: "Paid" },
    ];
    return (
        <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Billing & Subscription</h3>
              <p className="text-sm text-muted-foreground">
                Manage your subscription, payment methods, and view invoices.
              </p>
            </div>
            <Separator />
            <Card>
                <CardHeader>
                    <CardTitle>Current Plan</CardTitle>
                    <CardDescription>You are currently on the Business plan.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold">$99<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                        <p className="text-muted-foreground">Your next billing date is August 1, 2024.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button>Upgrade Plan</Button>
                        <Button variant="ghost">Cancel Subscription</Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>The primary payment method for your subscription.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-16 bg-muted rounded-md flex items-center justify-center text-sm">VISA</div>
                        <div>
                            <p className="font-medium">Visa ending in 1234</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2028</p>
                        </div>
                    </div>
                    <Button variant="outline">Update</Button>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Invoice History</CardTitle>
                    <CardDescription>View and download your past invoices.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map(invoice => (
                                <TableRow key={invoice.id}>
                                    <TableCell>{invoice.id}</TableCell>
                                    <TableCell>{invoice.date}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                    <TableCell>{invoice.status}</TableCell>
                                    <TableCell><Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/>Download</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
