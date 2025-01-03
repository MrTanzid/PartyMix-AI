export const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export const getOpenAIHeaders = (apiKey: string) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
});