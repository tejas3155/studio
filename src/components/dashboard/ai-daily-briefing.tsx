
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AiDailyBriefing() {
  const briefingPoints = [
    "Priority: Review Q4 budget proposal - Due EOD.",
    "Meeting: Client sync with TechCorp at 2:00 PM.",
    "Alert: High sentiment risk detected for Project Alpha.",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="mr-2 h-5 w-5 text-primary" />
          AI Daily Briefing
        </CardTitle>
        <CardDescription>Your top priorities for today, summarized by AI.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc list-inside text-sm">
          {briefingPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <Button variant="outline" className="mt-4 w-full">
          <PlayCircle className="mr-2 h-4 w-4" />
          Listen to Briefing
        </Button>
      </CardContent>
    </Card>
  );
}
