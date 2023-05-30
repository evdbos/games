import React, { useState } from "react";
import { Text, Button } from "@chakra-ui/react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(1, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        colorScheme="yellow"
        fontWeight={"bold"}
        size={"xs"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "show less" : "Read more "}
      </Button>
    </Text>
  );
};

export default ExpandableText;
