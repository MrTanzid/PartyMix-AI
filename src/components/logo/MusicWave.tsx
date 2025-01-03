import React from 'react';

export function MusicWave() {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      {/* Audio wave bars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full transform-gpu"
          style={{
            height: '60%',
            left: `${i * 25}%`,
            animation: `musicWave ${0.8 + i * 0.2}s ease-in-out infinite alternate`
          }}
        />
      ))}
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl rounded-full animate-pulse" />
    </div>
  );
}