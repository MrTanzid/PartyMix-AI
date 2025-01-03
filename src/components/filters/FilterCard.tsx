import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FilterCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export function FilterCard({ 
  icon: Icon, 
  label, 
  value, 
  onChange, 
  options 
}: FilterCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <Icon size={18} className="text-purple-600 dark:text-purple-400" />
        </div>
        <label className="font-medium text-gray-700 dark:text-gray-200">{label}</label>
      </div>
      <select
        className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-purple-500 focus:ring-purple-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}