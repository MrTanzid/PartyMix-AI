import { FilterOptions } from '../types';

export function createPrompt(filters: FilterOptions): string {
  return `Generate a playlist of songs matching these criteria:
${formatFilters(filters)}

Response requirements:
1. Return ONLY a valid JSON array
2. Include exactly 10 songs
3. Use this format for each song:
{
  "title": "Song Title",
  "artist": "Artist Name",
  "genre": "${filters.genre}",
  "duration": "${filters.duration}",
  "mood": "${filters.mood}",
  "explicit": boolean
}`;
}

function formatFilters(filters: FilterOptions): string {
  return Object.entries(filters)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}