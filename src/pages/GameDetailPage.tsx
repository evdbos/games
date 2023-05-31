import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Grid, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
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
      </SimpleGrid>
      <GameTrailer gameId={game.id}></GameTrailer>
    </>
  );
};

export default GameDetailPage;
