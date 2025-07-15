'use server';

/**
 * @fileOverview A meeting notes summarization AI agent.
 *
 * - summarizeMeetingNotes - A function that handles the meeting notes summarization process.
 * - SummarizeMeetingNotesInput - The input type for the summarizeMeetingNotes function.
 * - SummarizeMeetingNotesOutput - The return type for the summarizeMeetingNotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMeetingNotesInputSchema = z.object({
  notes: z.string().describe('The meeting notes to summarize.'),
});
export type SummarizeMeetingNotesInput = z.infer<typeof SummarizeMeetingNotesInputSchema>;

const SummarizeMeetingNotesOutputSchema = z.object({
  summary: z.string().describe('The summary of the meeting notes.'),
  keyDecisions: z.string().describe('The key decisions made during the meeting.'),
  actionItems: z.string().describe('The action items from the meeting.'),
});
export type SummarizeMeetingNotesOutput = z.infer<typeof SummarizeMeetingNotesOutputSchema>;

export async function summarizeMeetingNotes(input: SummarizeMeetingNotesInput): Promise<SummarizeMeetingNotesOutput> {
  return summarizeMeetingNotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeMeetingNotesPrompt',
  input: {schema: SummarizeMeetingNotesInputSchema},
  output: {schema: SummarizeMeetingNotesOutputSchema},
  prompt: `You are an AI assistant helping to summarize meeting notes.

  Summarize the following meeting notes, extract the key decisions, and identify the action items.

  Meeting Notes:
  {{notes}}

  Summary:
  {{summary}}

  Key Decisions:
  {{keyDecisions}}

  Action Items:
  {{actionItems}}`,
});

const summarizeMeetingNotesFlow = ai.defineFlow(
  {
    name: 'summarizeMeetingNotesFlow',
    inputSchema: SummarizeMeetingNotesInputSchema,
    outputSchema: SummarizeMeetingNotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
