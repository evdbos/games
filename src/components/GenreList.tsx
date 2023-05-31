
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-urls";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = UseGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data &&
          data.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  objectFit={"cover"}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  textAlign={"left"}
                  whiteSpace={"normal"}
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => setSelectedGenreId(genre.id)}
                  variant={"link"}
                  fontSize={"lg"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
