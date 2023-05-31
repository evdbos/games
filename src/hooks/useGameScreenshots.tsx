import GameScreenShot from "../entities/GameScreenShot";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGameScreenShots = (gameId: number) => {
  const apiClient = new ApiClient<GameScreenShot>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ["gameScreenShots"],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenShots;
