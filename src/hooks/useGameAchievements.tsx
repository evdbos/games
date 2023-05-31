import { useQuery } from "@tanstack/react-query";
import GameAchievement from "../entities/GameAchievement";
import ApiClient from "../services/api-client";

const useGameAchievements = (gameId: number) => {
  const apiClient = new ApiClient<GameAchievement>(
    `/games/${gameId}/achievements`
  );

  return useQuery({
    queryKey: ["GameAchievement"],
    queryFn: apiClient.getAll,
  });
};
export default useGameAchievements;
