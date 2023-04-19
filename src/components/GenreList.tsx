import React from "react";

import UseGenres, { Genre } from "../hooks/UseGenres";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-urls";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <List>
      {data &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
