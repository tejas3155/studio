'use server';

/**
 * @fileOverview A template generator AI agent.
 *
 * - generateTemplate - A function that handles the template generation process.
 * - GenerateTemplateInput - The input type for the generateTemplate function.
 * - GenerateTemplateOutput - The return type for the generateTemplate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTemplateInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate the template from.'),
});
export type GenerateTemplateInput = z.infer<typeof GenerateTemplateInputSchema>;

const GenerateTemplateOutputSchema = z.object({
  template: z.string().describe('The generated template.'),
});
export type GenerateTemplateOutput = z.infer<typeof GenerateTemplateOutputSchema>;

export async function generateTemplate(input: GenerateTemplateInput): Promise<GenerateTemplateOutput> {
  return generateTemplateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTemplatePrompt',
  input: {schema: GenerateTemplateInputSchema},
  output: {schema: GenerateTemplateOutputSchema},
  prompt: `You are an AI assistant that generates templates based on the user's prompt.\n\nPrompt: {{{prompt}}}`,
});

const generateTemplateFlow = ai.defineFlow(
  {
    name: 'generateTemplateFlow',
    inputSchema: GenerateTemplateInputSchema,
    outputSchema: GenerateTemplateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
