import React from 'react';
import { Search } from 'lucide-react';
import { Language } from '../types';

interface LanguageSearchProps {
  value: string;
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onSearchChange: (value: string) => void;
}

export function LanguageSearch({ 
  value, 
  selectedLanguage,
  onLanguageChange,
  onSearchChange 
}: LanguageSearchProps) {
  const languages: Language[] = [
    'English', 'Spanish', 'Hindi', 'French', 
    'Korean', 'Japanese', 'Portuguese', 'German'
  ];

  return (
    <div className="relative space-y-2">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Search className="h-5 w-5 text-purple-600" />
        </div>
        <label className="font-medium text-gray-700">Language</label>
      </div>
      
      <select
        className="w-full rounded-lg border-gray-200 bg-gray-50 py-2 text-sm focus:border-purple-500 focus:ring-purple-500 mb-2"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Search songs in ${selectedLanguage}...`}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}