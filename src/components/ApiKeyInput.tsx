import React, { useState } from 'react';
import { Key } from 'lucide-react';
import { useApiKey } from '../hooks/useApiKey';

export function ApiKeyInput() {
  const { apiKey, setApiKey } = useApiKey();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Key className="text-indigo-600" size={20} />
        <h2 className="text-xl font-semibold">OpenAI API Configuration</h2>
      </div>
      
      <div className="relative">
        <input
          type={isVisible ? 'text' : 'password'}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your OpenAI API key"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      
      <p className="mt-2 text-sm text-gray-500">
        Your API key is stored securely in your browser's local storage.
      </p>
    </div>
  );
}