import { FilterOptions, SongRecommendation } from '../types';
import { GEMINI_API_KEY, GEMINI_API_URL } from '../config/gemini';
import { parseSongRecommendations } from '../utils/parser';

export async function generateSongRecommendations(filters: FilterOptions): Promise<SongRecommendation[]> {
  try {
    const prompt = createPrompt(filters);
    const response = await fetchFromGemini(prompt);
    const recommendations = parseSongRecommendations(response);
    // Ensure we get between 10-20 recommendations
    return recommendations.slice(0, Math.min(20, Math.max(10, recommendations.length)));
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to generate recommendations');
  }
}

function createPrompt(filters: FilterOptions): string {
  return `Act as a music expert DJ. Generate between 10-20 song recommendations based on:
    Category: ${filters.category}
    Genre: ${filters.genre}
    Language: ${filters.language}
    Mood: ${filters.mood}
    Duration: ${filters.duration}
    Allow Explicit: ${filters.explicit}
    
    Respond ONLY with a JSON array of songs in this exact format:
    [{"title": "Song Name", "artist": "Artist Name", "genre": "Genre", "duration": "Duration", "mood": "Mood", "explicit": boolean}]`;
}