import React from 'react';

export function LogoText() {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
        PartyMix AI
      </h1>
      <span className="text-xs text-gray-500 dark:text-gray-400 animate-fade-in">
        Powered by Gemini
      </span>
    </div>
  );
}