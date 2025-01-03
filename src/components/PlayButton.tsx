import React from 'react';
import { Music2, Play } from 'lucide-react';
import { SongRecommendation } from '../types';

interface PlayButtonProps {
  song: SongRecommendation;
  onClick: () => void;
}

export function PlayButton({ song, onClick }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transform-gpu"
    >
      <div className="relative">
        <Music2 
          size={18} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"
        />
        <Play 
          size={18} 
          className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 group-hover:rotate-180 transform-gpu"
        />
      </div>
      <span className="font-medium text-sm whitespace-nowrap overflow-hidden">
        Listen on YouTube
      </span>
      
      {/* Animated background effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
    </button>
  );
}