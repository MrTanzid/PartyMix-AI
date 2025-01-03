import React from 'react';
import { Music } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
        <Music className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        PartyMix AI
      </span>
    </div>
  );
}