import React, { useState } from 'react';
import { Header } from './components/Header';
import { FilterSection } from './components/FilterSection';
import { RecommendationList } from './components/RecommendationList';
import { Footer } from './components/Footer';
import { FilterOptions } from './types/filters';
import { useRecommendations } from './hooks/useRecommendations';

export default function App() {
  const {
    recommendations,
    loading,
    error,
    generateRecommendations
  } = useRecommendations();

  const [filters, setFilters] = useState<FilterOptions>({
    category: 'Party',
    genre: 'Pop',
    language: 'English',
    country: 'United States',
    mood: 'Energetic',
    duration: 'Medium',
    explicit: false,
  });

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleGetRecommendations = () => {
    generateRecommendations(filters);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
          <FilterSection 
            filters={filters} 
            onFilterChange={handleFilterChange}
          />
          
          <button
            onClick={handleGetRecommendations}
            disabled={loading}
            className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                <span>Creating Your Mix...</span>
              </>
            ) : (
              'Get Your Perfect Mix 🎵'
            )}
          </button>
          
          {error && (
            <p className="mt-4 text-red-500 text-center animate-bounce">{error}</p>
          )}
        </div>

        <RecommendationList recommendations={recommendations} loading={loading} />
      </main>

      <Footer />
    </div>
  );
}