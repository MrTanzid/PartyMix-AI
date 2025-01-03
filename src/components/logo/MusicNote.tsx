import React from 'react';

export function MusicNote() {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 to-pink-400/50 rounded-full blur-lg animate-pulse delay-75" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute inset-0 w-full h-full text-white transform-gpu animate-[bounce_2s_infinite]"
      >
        <path
          d="M9 18V5l12-2v13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[dash_2s_infinite]"
        />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" className="animate-[spin_4s_linear_infinite]" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" className="animate-[spin_4s_linear_infinite]" />
      </svg>
    </div>
  );
}