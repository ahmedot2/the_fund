'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting a concise summary of a given text section.
 *
 * - suggestSectionSummary - A function that takes a section of text and returns a suggested summary.
 * - SuggestSectionSummaryInput - The input type for the suggestSectionSummary function.
 * - SuggestSectionSummaryOutput - The return type for the suggestSectionSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSectionSummaryInputSchema = z.object({
  sectionText: z
    .string()
    .describe('The text content of the section to be summarized.'),
});
export type SuggestSectionSummaryInput = z.infer<typeof SuggestSectionSummaryInputSchema>;

const SuggestSectionSummaryOutputSchema = z.object({
  suggestedSummary: z
    .string()
    .describe('A concise, AI-generated summary of the input section.'),
});
export type SuggestSectionSummaryOutput = z.infer<typeof SuggestSectionSummaryOutputSchema>;

export async function suggestSectionSummary(input: SuggestSectionSummaryInput): Promise<SuggestSectionSummaryOutput> {
  return suggestSectionSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSectionSummaryPrompt',
  input: {schema: SuggestSectionSummaryInputSchema},
  output: {schema: SuggestSectionSummaryOutputSchema},
  prompt: `You are an expert summarizer, skilled at condensing text into its most essential points.

  Please provide a concise summary of the following section:

  {{sectionText}}

  Ensure the summary captures the core message and key information in a clear and impactful way.`,
});

const suggestSectionSummaryFlow = ai.defineFlow(
  {
    name: 'suggestSectionSummaryFlow',
    inputSchema: SuggestSectionSummaryInputSchema,
    outputSchema: SuggestSectionSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
