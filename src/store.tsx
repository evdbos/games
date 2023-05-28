import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  GameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  GameQuery: {},
  setSearchText: (searchText) => set(() => ({ GameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ GameQuery: { ...store.GameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ GameQuery: { ...store.GameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ GameQuery: { ...store.GameQuery, sortOrder } })),
}));

export default useGameQueryStore;
