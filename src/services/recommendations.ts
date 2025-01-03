import { FilterOptions, SongRecommendation } from '../types';
import { fetchFromGemini } from './api/gemini';
import { createPrompt } from '../utils/prompt';
import { parseSongRecommendations } from '../utils/parser';

export async function generateSongRecommendations(filters: FilterOptions): Promise<SongRecommendation[]> {
  try {
    const prompt = createPrompt(filters);
    const response = await fetchFromGemini(prompt);
    
    if (!response) {
      throw new Error('No response received from AI service');
    }

    const recommendations = await parseSongRecommendations(response);
    
    if (!recommendations || recommendations.length === 0) {
      throw new Error('No valid recommendations found. Please try again.');
    }

    // Ensure we return between 10-20 recommendations
    return recommendations.slice(0, Math.min(20, Math.max(10, recommendations.length)));
  } catch (error) {
    console.error('Recommendation error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to generate recommendations');
  }
}