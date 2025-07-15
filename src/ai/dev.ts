import { config } from 'dotenv';
config();

import '@/ai/flows/generate-template.ts';
import '@/ai/flows/suggest-tasks.ts';
import '@/ai/flows/summarize-meeting-notes.ts';