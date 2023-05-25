import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import UseGenres from "../hooks/UseGenres";
import usePlatforms from "../hooks/usePlatform";
import { Platform } from "./../hooks/usePlatform";

interface Props {
  GameQuery: GameQuery;
}
const GameHeading = ({ GameQuery }: Props) => {
  const { data: genres } = UseGenres();
  const genre = genres?.results.find((g) => g.id === GameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === GameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
