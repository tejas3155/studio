
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Mic, Sparkles } from "lucide-react";

const quickChips = [
    "Show all contracts expiring in Q4.",
    "Which department is most over-budget?",
    "Summarize the ESG compliance gaps.",
    "List all high-risk vendors.",
];

export default function CorporateAskAiPage() {
  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Ask CoperVise (Corporate)</h1>
        <p className="text-muted-foreground">Your conversational AI assistant for querying all corporate data.</p>
      </div>

      <div className="flex-grow flex flex-col mt-6">
        <Card className="flex-grow flex flex-col">
            <CardContent className="flex-grow p-6 space-y-4 flex flex-col justify-end">
                 <div className="p-4 rounded-lg bg-primary/10 max-w-lg self-start">
                    <p className="font-bold text-primary">CoperVise</p>
                    <p>Hello! How can I assist with your corporate data today? You can ask me about compliance, contracts, department performance, and more.</p>
                </div>
                 <div className="p-4 rounded-lg bg-secondary max-w-lg self-end text-right">
                    <p className="font-bold">You</p>
                    <p>Show me all contracts expiring next quarter with a penalty clause greater than $50k.</p>
                </div>
                 <div className="p-4 rounded-lg bg-primary/10 max-w-lg self-start">
                    <p className="font-bold text-primary">CoperVise</p>
                    <p>I found two contracts matching your criteria:</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li><strong>Project Agreement - Alpha:</strong> Expires 2024-10-31. Penalty for missed completion is 10% of contract value ($100k).</li>
                        <li><strong>HQ Lease Agreement:</strong> Expires 2024-09-30. Early termination penalty is $75,000.</li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-2"><Sparkles className="mr-2 h-4 w-4"/>Create Boardroom Briefing Slide</Button>
                </div>
            </CardContent>
            <div className="p-4 border-t">
                 <div className="flex gap-2 mb-2 flex-wrap">
                    {quickChips.map(chip => (
                        <Button key={chip} variant="outline" size="sm" className="text-xs">{chip}</Button>
                    ))}
                </div>
                <div className="relative">
                    <Input placeholder="Ask anything across departments..." className="pr-28" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                        <Button variant="ghost" size="icon"><Paperclip className="h-5 w-5"/></Button>
                        <Button variant="ghost" size="icon"><Mic className="h-5 w-5"/></Button>
                        <Button size="sm"><Send className="h-4 w-4 mr-2"/>Send</Button>
                    </div>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
}
