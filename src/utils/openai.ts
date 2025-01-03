import { SongRecommendation } from '../types';

export function parseSongRecommendations(response: any): SongRecommendation[] {
  try {
    const content = response.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('Invalid API response: missing content');
    }

    let recommendations: any[];
    try {
      recommendations = JSON.parse(content);
    } catch (e) {
      throw new Error('Invalid JSON in API response');
    }

    if (!Array.isArray(recommendations)) {
      throw new Error('API response is not an array');
    }

    return recommendations.map((song, index) => {
      try {
        return validateSongRecommendation(song);
      } catch (e) {
        console.error(`Invalid song at index ${index}:`, e);
        return null;
      }
    }).filter((song): song is SongRecommendation => song !== null);
  } catch (error) {
    console.error('Failed to parse OpenAI response:', error);
    throw error;
  }
}

function validateSongRecommendation(song: any): SongRecommendation {
  if (!song || typeof song !== 'object') {
    throw new Error('Invalid song object');
  }

  if (!song.title || typeof song.title !== 'string') {
    throw new Error('Invalid or missing title');
  }

  if (!song.artist || typeof song.artist !== 'string') {
    throw new Error('Invalid or missing artist');
  }

  return {
    title: String(song.title),
    artist: String(song.artist),
    genre: String(song.genre || ''),
    duration: String(song.duration || ''),
    mood: String(song.mood || ''),
    explicit: Boolean(song.explicit),
  };
}