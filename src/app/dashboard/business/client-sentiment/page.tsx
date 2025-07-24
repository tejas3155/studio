
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ArrowRight, Upload, MessageCircle } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import * as React from 'react';

const clients = [
  { name: "GlobalEnterprises", sentiment: 0.9, trend: "up", revenue: "25%", risk: "Low" },
  { name: "TechCorp", sentiment: 0.4, trend: "down", revenue: "18%", risk: "High" },
  { name: "Innovate LLC", sentiment: 0.6, trend: "stable", revenue: "15%", risk: "Medium" },
  { name: "DataSolutions", sentiment: 0.8, trend: "up", revenue: "12%", risk: "Low" },
  { name: "HealthPlus", sentiment: 0.7, trend: "stable", revenue: "10%", risk: "Low" },
  { name: "MarketMovers", sentiment: 0.3, trend: "down", revenue: "8%", risk: "Critical" },
];

const communicationLogs = {
    "TechCorp": [
        { type: "Email", from: "Client", summary: "Expressed disappointment with project timeline delays.", sentiment: "Negative", date: "2024-07-28" },
        { type: "Call", from: "Account Manager", summary: "Discussed mitigation plan and offered a 10% discount on next month's invoice.", sentiment: "Neutral", date: "2024-07-29" },
    ],
    "GlobalEnterprises": [
        { type: "Email", from: "Client", summary: "Praised the team for exceptional delivery on the Q2 project.", sentiment: "Positive", date: "2024-07-25" },
    ]
}

export default function ClientSentimentPage() {
  const [selectedClient, setSelectedClient] = React.useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Client Sentiment Analysis</h1>
        <p className="text-muted-foreground">Monitor client health through AI-powered sentiment and churn risk analysis.</p>
      </div>

       <div className="flex justify-end">
            <Button variant="outline"><Upload className="mr-2 h-4 w-4" />Upload Communication Log</Button>
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card key={client.name}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {client.name}
                <Badge variant={client.risk === 'Low' ? 'secondary' : 'destructive'}>{client.risk} Risk</Badge>
              </CardTitle>
              <CardDescription>Revenue Contribution: {client.revenue}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold" style={{color: client.sentiment > 0.7 ? 'hsl(var(--primary))' : client.sentiment > 0.5 ? 'orange' : 'red'}}>
                  {Math.round(client.sentiment * 100)}%
                  <p className="text-xs text-muted-foreground font-normal">Sentiment Score</p>
                </div>
                {client.trend === 'up' && <ArrowUp className="h-8 w-8 text-green-500" />}
                {client.trend === 'down' && <ArrowDown className="h-8 w-8 text-red-500" />}
                {client.trend === 'stable' && <ArrowRight className="h-8 w-8 text-yellow-500" />}
              </div>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="secondary" className="w-full mt-4" onClick={() => setSelectedClient(client.name)}>
                           <MessageCircle className="mr-2 h-4 w-4"/> View Communication History
                        </Button>
                    </DrawerTrigger>
                     <DrawerContent>
                        <div className="mx-auto w-full max-w-2xl">
                        <DrawerHeader>
                          <DrawerTitle>Communication Log: {selectedClient}</DrawerTitle>
                          <DrawerDescription>AI-analyzed history of recent interactions.</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <ul className="space-y-4 max-h-[60vh] overflow-y-auto">
                            {(communicationLogs[selectedClient as keyof typeof communicationLogs] || []).map((log, index) => (
                                <li key={index} className="p-4 border rounded-lg">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold">{log.type} from {log.from} - <span className="text-muted-foreground text-sm">{log.date}</span></p>
                                            <p className="text-sm mt-1">{log.summary}</p>
                                        </div>
                                        <Badge variant={log.sentiment === 'Positive' ? 'default' : 'destructive'}>{log.sentiment}</Badge>
                                    </div>
                                </li>
                            ))}
                          </ul>
                        </div>
                        </div>
                      </DrawerContent>
                </Drawer>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
