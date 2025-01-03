import React from 'react';
import { Music } from 'lucide-react';

export function AnimatedLogo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 transition-transform group-hover:scale-110 animate-pulse">
        <Music className="w-6 h-6 text-white animate-[spin_3s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite]" />
      </div>
      <div className="relative">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          PartyMix AI
        </span>
        <span className="absolute -bottom-4 left-0 text-xs text-gray-500 dark:text-gray-400">
          Powered by Gemini
        </span>
      </div>
    </div>
  );
}