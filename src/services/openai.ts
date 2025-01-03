import { FilterOptions, SongRecommendation } from '../types';
import { OPENAI_API_KEY } from '../config/openai';

const API_URL = 'https://api.openai.com/v1/chat/completions';

export async function generateSongRecommendations(filters: FilterOptions): Promise<SongRecommendation[]> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  try {
    const prompt = createPrompt(filters);
    const response = await fetchFromOpenAI(prompt);
    return parseSongRecommendations(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('OpenAI API Error:', errorMessage);
    throw new Error('Failed to generate song recommendations: ' + errorMessage);
  }
}

function createPrompt(filters: FilterOptions): string {
  return `Generate 5 song recommendations based on these preferences:
    Category: ${filters.category}
    Genre: ${filters.genre}
    Language: ${filters.language}
    Mood: ${filters.mood}
    Duration: ${filters.duration}
    Allow Explicit: ${filters.explicit}
    
    Return ONLY a valid JSON array of songs with these properties:
    title (string), artist (string), genre (string), duration (string), mood (string), explicit (boolean)
    
    Example format:
    [
      {
        "title": "Song Name",
        "artist": "Artist Name",
        "genre": "Pop",
        "duration": "Medium",
        "mood": "Energetic",
        "explicit": false
      }
    ]`;
}

async function fetchFromOpenAI(prompt: string) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a music recommendation AI. Always respond with valid JSON arrays containing song objects.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.error?.message || 
      `API request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}