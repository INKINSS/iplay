import { create } from 'zustand';

interface PlayerState {
  isPlaying: boolean;
  currentMusic: {
    playlist: any;
    song: any;
    songs: any[];
  };
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentMusic: (currentMusic: { playlist: any; song: any; songs: any[] }) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
