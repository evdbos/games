import React from "react";

import UseGenres, { Genre } from "../hooks/UseGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = UseGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
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
              <Button
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
