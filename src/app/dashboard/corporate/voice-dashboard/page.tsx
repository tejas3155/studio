
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Bot, Play, Square, CheckCircle, AlertTriangle } from "lucide-react";
import * as React from 'react';

const voiceNotes = [
    { id: 1, transcript: "Create a task for the Legal department to review the new SEBI circular on BRSR by Friday.", status: "Processed", action: "Task Created" },
    { id: 2, transcript: "Set up a meeting with the audit committee for next Tuesday at 3pm titled 'Q3 Risk Review'.", status: "Processed", action: "Meeting Scheduled" },
    { id: 3, transcript: "What is the current penalty risk for the overdue ESG report?", status: "Processed", action: "Query Answered" },
    { id: 4, transcript: "This is a test note for the... uh... the system. Please disregard.", status: "Failed", action: "No Action Taken" },
];

export default function CorporateVoiceDashboardPage() {
    const [isRecording, setIsRecording] = React.useState(false);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">Corporate Voice Dashboard</h1>
        <p className="text-muted-foreground">Use your voice to create tasks, schedule meetings, and query corporate data.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Voice Command</CardTitle>
                <CardDescription>Record a voice note and let the Corporate AI Assistant take action.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center space-y-4 pt-10 pb-10">
                <Button 
                    size="icon" 
                    className={`h-24 w-24 rounded-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-primary'}`}
                    onClick={() => setIsRecording(!isRecording)}
                >
                    {isRecording ? <Square className="h-10 w-10"/> : <Mic className="h-10 w-10" />}
                </Button>
                <p className="text-muted-foreground">{isRecording ? "Recording... Click to stop." : "Click to start recording."}</p>
                 <div className="pt-4">
                     <p className="text-sm font-semibold">Example commands:</p>
                     <ul className="text-xs text-muted-foreground list-disc list-inside text-left">
                        <li>"Create a high-priority task for the finance team to close the Q3 books."</li>
                        <li>"What is the current compliance status of the ISO 27001 framework?"</li>
                        <li>"Generate a boardroom briefing slide on the top 3 revenue risks for this quarter."</li>
                     </ul>
                 </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Recent Voice Notes</CardTitle>
                <CardDescription>History of your recorded commands and the actions taken.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {voiceNotes.map(note => (
                        <li key={note.id} className="p-3 border rounded-lg">
                            <p className="italic text-muted-foreground">"{note.transcript}"</p>
                            <div className="flex items-center justify-between mt-2">
                                <Button variant="outline" size="sm"><Play className="h-4 w-4 mr-2"/>Play</Button>
                                <div className="flex items-center gap-2 text-sm">
                                    {note.status === 'Processed' ? <CheckCircle className="h-4 w-4 text-green-500" /> : <AlertTriangle className="h-4 w-4 text-red-500" />}
                                    <span className="font-semibold">{note.action}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
