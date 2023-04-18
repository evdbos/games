import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  /**
   *  get the correct color
   * @param score
   */
  function getColor({ score }: Props) {
    if (score > 75) {
      return "green";
    }

    if (score > 60) {
      return "yellow";
    } else {
      return "red";
    }
  }
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      color={getColor({ score })}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
