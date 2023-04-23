import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  GameQuery: GameQuery;
}
const GameHeading = ({ GameQuery }: Props) => {
  const heading = `${GameQuery.platform?.name || ""} ${
    GameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
