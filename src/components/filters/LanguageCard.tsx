import React from 'react';
import { Languages } from 'lucide-react';
import { FilterCard } from './FilterCard';
import { Language } from '../../types/filters';

interface LanguageCardProps {
  value: Language;
  onChange: (value: Language) => void;
}

export function LanguageCard({ value, onChange }: LanguageCardProps) {
  const languages: Language[] = [
    'English', 'Spanish', 'Hindi', 'French', 'Korean',
    'Japanese', 'Portuguese', 'German', 'Chinese', 'Arabic',
    'Russian', 'Italian', 'Turkish', 'Dutch', 'Polish',
    'Vietnamese', 'Thai', 'Swedish', 'Greek', 'Hebrew',
    'Bengali', 'Urdu', 'Persian', 'Malay', 'Indonesian',
    'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Kannada',
    'Romanian', 'Hungarian', 'Czech', 'Bulgarian', 'Serbian'
  ];

  return (
    <FilterCard
      icon={Languages}
      label="Language"
      value={value}
      onChange={onChange}
      options={languages}
    />
  );
}