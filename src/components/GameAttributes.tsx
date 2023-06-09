import React from "react";
import Game from "./../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import GameSellingStores from "./GameSellingStores";
import GameAchievement from "./GameAchievement";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItem term="platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Selling points">
        <GameSellingStores gameId={game.id} />
      </DefinitionItem>
      <DefinitionItem term="Game achievements">
        <GameAchievement gameId={game.id} />
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
