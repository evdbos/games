import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { GameTrailer } from "../entities/GameTrailer";

const useGameTrailer = (gameId: number) => {
  const apiClient = new ApiClient<GameTrailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailer;
