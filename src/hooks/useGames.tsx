import useData from "./UseData";
import { Genre } from "./UseGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>("/games", [selectedGenre?.id, selectedPlatform?.id], {
    params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
  });

export default useGames;
