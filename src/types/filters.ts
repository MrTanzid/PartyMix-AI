export type Category = 'Party' | 'Chill' | 'Dance' | 'Romantic' | 'Workout' | 'Focus' | 'Gaming' | 'Road Trip';

export type Genre = 'Pop' | 'Rock' | 'EDM' | 'Hip-Hop' | 'R&B' | 'Jazz' | 'Classical' | 'Country' | 'Latin' | 'K-pop';

export type Language = 
  | 'English' | 'Spanish' | 'Hindi' | 'French' | 'Korean' 
  | 'Japanese' | 'Portuguese' | 'German' | 'Chinese' | 'Arabic'
  | 'Russian' | 'Italian' | 'Turkish' | 'Dutch' | 'Polish'
  | 'Vietnamese' | 'Thai' | 'Swedish' | 'Greek' | 'Hebrew'
  | 'Bengali' | 'Urdu' | 'Persian' | 'Malay' | 'Indonesian'
  | 'Tamil' | 'Telugu' | 'Marathi' | 'Gujarati' | 'Kannada'
  | 'Romanian' | 'Hungarian' | 'Czech' | 'Bulgarian' | 'Serbian';

export type Country =
  | 'United States' | 'United Kingdom' | 'India' | 'Japan' | 'South Korea'
  | 'Brazil' | 'Spain' | 'France' | 'Germany' | 'Italy'
  | 'Canada' | 'Australia' | 'Mexico' | 'Argentina' | 'China'
  | 'Russia' | 'Turkey' | 'Sweden' | 'Netherlands' | 'Poland'
  | 'Bangladesh' | 'Pakistan' | 'Iran' | 'Malaysia' | 'Indonesia'
  | 'Thailand' | 'Vietnam' | 'Philippines' | 'Egypt' | 'Nigeria';

export type Mood = 'Energetic' | 'Relaxed' | 'Upbeat' | 'Mellow' | 'Happy' | 'Sad' | 'Romantic' | 'Intense';

export type Duration = 'Short' | 'Medium' | 'Long';

export interface FilterOptions {
  category: Category;
  genre: Genre;
  language: Language;
  country: Country;
  mood: Mood;
  duration: Duration;
  explicit: boolean;
}