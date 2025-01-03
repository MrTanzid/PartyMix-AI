import { SongRecommendation, FilterOptions } from '../types';

const mockSongs: SongRecommendation[] = [
  {
    title: "Don't Stop Believin'",
    artist: 'Journey',
    genre: 'Rock',
    duration: 'Medium',
    mood: 'Energetic',
    explicit: false,
  },
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    genre: 'Pop',
    duration: 'Medium',
    mood: 'Upbeat',
    explicit: false,
  },
  {
    title: 'Levels',
    artist: 'Avicii',
    genre: 'EDM',
    duration: 'Long',
    mood: 'Energetic',
    explicit: false,
  },
  {
    title: 'WAP',
    artist: 'Cardi B ft. Megan Thee Stallion',
    genre: 'Hip-Hop',
    duration: 'Medium',
    mood: 'Energetic',
    explicit: true,
  },
  {
    title: 'Despacito',
    artist: 'Luis Fonsi & Daddy Yankee ft. Justin Bieber',
    genre: 'Pop',
    duration: 'Medium',
    mood: 'Upbeat',
    explicit: false,
  },
];

export function getRecommendations(filters: FilterOptions): SongRecommendation[] {
  // Simulate AI filtering based on user preferences
  return mockSongs.filter(song => {
    if (!filters.explicit && song.explicit) return false;
    if (filters.genre !== song.genre) return false;
    if (filters.mood !== song.mood) return false;
    if (filters.duration !== song.duration) return false;
    return true;
  });
}