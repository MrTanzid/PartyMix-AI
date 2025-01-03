import React from 'react';
import { AnimatedLogo } from './logo/AnimatedLogo';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <AnimatedLogo />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}