import { useState } from 'react';
import { FilterOptions, SongRecommendation } from '../types';
import { generateSongRecommendations } from '../services/recommendations';

export function useRecommendations() {
  const [recommendations, setRecommendations] = useState<SongRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRecommendations = async (filters: FilterOptions) => {
    setLoading(true);
    setError(null);
    
    try {
      const songs = await generateSongRecommendations(filters);
      if (songs.length === 0) {
        throw new Error('No songs found matching your criteria. Try adjusting your filters!');
      }
      setRecommendations(songs);
    } catch (error) {
      const message = error instanceof Error 
        ? error.message 
        : 'Oops! Something went wrong. Let\'s try again! 🎵';
      setError(message);
      console.error('Recommendation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    recommendations,
    loading,
    error,
    generateRecommendations
  };
}