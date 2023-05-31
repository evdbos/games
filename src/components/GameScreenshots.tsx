import React from "react";
import useGameScreenShots from "../hooks/useGameScreenshots";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenShots(gameId);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
