import React from 'react';
import { Music, Clock, Tag, Volume2, Heart } from 'lucide-react';
import { SongRecommendation } from '../types';
import { PlayButton } from './PlayButton';

interface RecommendationListProps {
  recommendations: SongRecommendation[];
  loading?: boolean;
}

export function RecommendationList({ recommendations, loading }: RecommendationListProps) {
  const openYouTube = (song: SongRecommendation) => {
    const searchQuery = encodeURIComponent(`${song.title} ${song.artist}`);
    window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400">Getting your perfect playlist ready...</p>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Music className="text-purple-500 h-8 w-8" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
          Customize your preferences and let AI create your perfect playlist!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recommendations.map((song, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 backdrop-blur-none"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{song.title}</h3>
              <p className="text-purple-600 dark:text-purple-400">{song.artist}</p>
            </div>
            <div className="flex gap-2">
              {song.explicit && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                  Explicit
                </span>
              )}
              <PlayButton song={song} onClick={() => openYouTube(song)} />
              <button className="p-2 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full transition-colors">
                <Heart size={20} className="text-gray-400 hover:text-pink-500 transition-colors" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <Tag size={16} />
              <span>{song.genre}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{song.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Volume2 size={16} />
              <span>{song.mood}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}