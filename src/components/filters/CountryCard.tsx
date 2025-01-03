import React from 'react';
import { Globe2 } from 'lucide-react';
import { FilterCard } from './FilterCard';
import { Country } from '../../types/filters';

interface CountryCardProps {
  value: Country;
  onChange: (value: Country) => void;
}

export function CountryCard({ value, onChange }: CountryCardProps) {
  const countries: Country[] = [
    'United States', 'United Kingdom', 'India', 'Japan', 'South Korea',
    'Brazil', 'Spain', 'France', 'Germany', 'Italy',
    'Canada', 'Australia', 'Mexico', 'Argentina', 'China',
    'Russia', 'Turkey', 'Sweden', 'Netherlands', 'Poland',
    'Bangladesh', 'Pakistan', 'Iran', 'Malaysia', 'Indonesia',
    'Thailand', 'Vietnam', 'Philippines', 'Egypt', 'Nigeria'
  ];

  return (
    <FilterCard
      icon={Globe2}
      label="Country"
      value={value}
      onChange={onChange}
      options={countries}
    />
  );
}