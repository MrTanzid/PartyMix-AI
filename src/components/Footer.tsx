import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PartyMix AI. Created with ❤️ by MrTanzid
          </p>
          <a
            href="https://github.com/MrTanzid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">Follow on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}