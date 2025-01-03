import { useState, useEffect } from 'react';

const API_KEY_STORAGE_KEY = 'openai-api-key';

export function useApiKey() {
  const [apiKey, setApiKeyState] = useState<string>('');

  useEffect(() => {
    const storedKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (storedKey) {
      setApiKeyState(storedKey);
    }
  }, []);

  const setApiKey = (key: string) => {
    setApiKeyState(key);
    localStorage.setItem(API_KEY_STORAGE_KEY, key);
  };

  return { apiKey, setApiKey };
}