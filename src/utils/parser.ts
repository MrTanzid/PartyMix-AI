import { SongRecommendation } from '../types';

export async function parseSongRecommendations(responseText: string): Promise<SongRecommendation[]> {
  try {
    // Try to find and parse JSON content
    const jsonContent = extractJsonContent(responseText);
    if (!jsonContent) {
      throw new Error('No valid JSON found in response');
    }

    const recommendations = validateRecommendations(jsonContent);
    return recommendations;
  } catch (error) {
    console.error('Failed to parse response:', error);
    throw new Error('Failed to process recommendations. Please try again.');
  }
}

function extractJsonContent(text: string): any {
  try {
    // First try parsing the entire response as JSON
    return JSON.parse(text);
  } catch {
    // If that fails, try to extract JSON array using regex
    const jsonMatch = text.match(/\[\s*{[\s\S]*}\s*\]/);
    if (!jsonMatch) {
      return null;
    }
    return JSON.parse(jsonMatch[0]);
  }
}

function validateRecommendations(data: any): SongRecommendation[] {
  if (!Array.isArray(data)) {
    throw new Error('Response is not a valid array');
  }

  return data
    .map(validateSongRecommendation)
    .filter((song): song is SongRecommendation => song !== null);
}

function validateSongRecommendation(song: any): SongRecommendation | null {
  try {
    if (!song || typeof song !== 'object') return null;
    if (!song.title || !song.artist) return null;

    return {
      title: String(song.title).trim(),
      artist: String(song.artist).trim(),
      genre: String(song.genre || '').trim() || 'Unknown',
      duration: String(song.duration || '').trim() || 'Medium',
      mood: String(song.mood || '').trim() || 'Unknown',
      explicit: Boolean(song.explicit),
    };
  } catch {
    return null;
  }
}