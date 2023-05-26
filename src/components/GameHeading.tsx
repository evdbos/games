import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import UseGenres from "../hooks/UseGenres";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  GameQuery: GameQuery;
}
const GameHeading = ({ GameQuery }: Props) => {
  const genre = useGenre(GameQuery.genreId);
  const platform = usePlatform(GameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
