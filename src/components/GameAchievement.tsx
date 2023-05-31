import React from "react";
import useGameAchievements from "../hooks/useGameAchievements";
import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameAchievement = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameAchievements(gameId);

  console.log(data?.results);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((achievement) => (
        <>
          <Box>
            <Text key={achievement.id}> {achievement.name}</Text>
          </Box>
          <Box>
            <Image key={achievement.id} src={achievement.image} width={10} />
          </Box>
        </>
      ))}
    </SimpleGrid>
  );
};

export default GameAchievement;
