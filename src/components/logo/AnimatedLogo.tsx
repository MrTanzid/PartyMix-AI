import React from 'react';
import { MusicWave } from './MusicWave';
import { LogoText } from './LogoText';

export function AnimatedLogo() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="transform-gpu group-hover:scale-110 transition-transform duration-300">
        <MusicWave />
      </div>
      <LogoText />
    </div>
  );
}