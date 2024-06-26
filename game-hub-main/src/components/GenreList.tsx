import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";


interface Props{
    onSelectedGenre: (genre: Genre) => void 
    selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectedGenre} : Props) => {
  const { data, isLoading, error } = useGenres();

  if(isLoading) return <Spinner />

  if(error) return null;

  return (
    <List paddingRight={"5rem"}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px'  borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} variant="link" fontSize={'large'}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
