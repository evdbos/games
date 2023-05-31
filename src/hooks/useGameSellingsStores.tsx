import { useQuery } from "@tanstack/react-query";
import GameSellingStore from "../entities/GameSellingStores";
import ApiClient from "../services/api-client";

const useGameSellingsStores = (gameId: number) => {
  const apiClient = new ApiClient<GameSellingStore>(`/games/${gameId}/stores`);

  return useQuery({
    queryKey: ["gameSellingStores"],
    queryFn: apiClient.getAll,
  });
};
export default useGameSellingsStores;
