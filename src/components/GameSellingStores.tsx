import React from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useGameSellingsStores from "../hooks/useGameSellingsStores";

interface Props {
  gameId: number;
}
const GameSellingStores = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameSellingsStores(gameId);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((sellingPoint) => (
        <Link
          key={sellingPoint.id}
          about={sellingPoint.url}
          to={sellingPoint.url}
        >
          {sellingPoint.url.substring(
            sellingPoint.url.indexOf("HTTP://") + 8,
            sellingPoint.url.indexOf(".com")
          )}{" "}
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default GameSellingStores;
