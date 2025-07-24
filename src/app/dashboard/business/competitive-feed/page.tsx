
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rss, PlusCircle, FileText, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";

const feedItems = [
  { competitor: "RivalAI", type: "Feature Launch", summary: "Launched a new 'Predictive Analytics' module for their enterprise tier.", impact: "Medium", source: "Product Hunt" },
  { competitor: "DataCorp", type: "Pricing Change", summary: "Increased pricing by 15% for their SMB plan, removing the free tier.", impact: "High", source: "Company Blog" },
  { competitor: "Insightify", type: "Funding", summary: "Raised a $50M Series B round led by Venture Partners.", impact: "High", source: "TechCrunch" },
  { competitor: "Analytica Inc.", type: "PR", summary: "Published a case study with a major Fortune 500 client, highlighting a 200% ROI.", impact: "Medium", source: "Press Release" },
];

export default function CompetitiveFeedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Competitive Intelligence Feed</h1>
        <p className="text-muted-foreground">Track competitor moves, pricing changes, and feature launches with AI summaries.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Source</CardTitle>
          <CardDescription>Add a competitor's blog, news RSS feed, or upload a document to track.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex gap-2">
                <Input placeholder="Enter URL or RSS feed..." className="max-w-lg" />
                <Button><Rss className="mr-2 h-4 w-4"/>Add Source</Button>
                <Button variant="secondary"><FileText className="mr-2 h-4 w-4"/>Generate Teardown</Button>
            </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {feedItems.map((item, index) => (
            <Card key={index}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>{item.competitor}: {item.type}</CardTitle>
                            <CardDescription>Source: {item.source}</CardDescription>
                        </div>
                        <Badge variant={item.impact === 'High' ? 'destructive' : 'secondary'}>Impact: {item.impact}</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="flex items-start gap-2"><Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1"/><span>{item.summary}</span></p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
