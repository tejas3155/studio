
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Mic, Sparkles } from "lucide-react";

const quickChips = [
    "Summarize July revenue risk",
    "Show overdue SOPs",
    "Which contracts expire in the next 90 days?",
    "What were the key decisions in the last board meeting?",
];

export default function AskAiPage() {
  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Ask CoperVise</h1>
        <p className="text-muted-foreground">Your conversational AI assistant for querying all organizational data.</p>
      </div>

      <div className="flex-grow flex flex-col mt-6">
        <Card className="flex-grow flex flex-col">
            <CardContent className="flex-grow p-6 space-y-4 flex flex-col justify-end">
                {/* Chat messages would be rendered here */}
                 <div className="p-4 rounded-lg bg-primary/10 max-w-lg self-start">
                    <p className="font-bold text-primary">CoperVise</p>
                    <p>Hello! How can I help you today? You can ask me about KPIs, contracts, meeting notes, and more.</p>
                </div>
                 <div className="p-4 rounded-lg bg-secondary max-w-lg self-end text-right">
                    <p className="font-bold">You</p>
                    <p>What is the current churn risk for TechCorp?</p>
                </div>
                 <div className="p-4 rounded-lg bg-primary/10 max-w-lg self-start">
                    <p className="font-bold text-primary">CoperVise</p>
                    <p>The churn risk for TechCorp is currently marked as **High**. This is based on recent negative sentiment detected in email communications regarding project delays and two overdue invoices totaling $22,500.</p>
                    <Button variant="outline" size="sm" className="mt-2"><Sparkles className="mr-2 h-4 w-4"/>Create follow-up task</Button>
                </div>
            </CardContent>
            <div className="p-4 border-t">
                 <div className="flex gap-2 mb-2 flex-wrap">
                    {quickChips.map(chip => (
                        <Button key={chip} variant="outline" size="sm" className="text-xs">{chip}</Button>
                    ))}
                </div>
                <div className="relative">
                    <Input placeholder="Ask anything..." className="pr-28" />
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
