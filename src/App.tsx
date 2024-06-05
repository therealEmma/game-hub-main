import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery{
  genre: Genre | null;
  platform: Platform;
  sortOrder:string;
}

function App() {
 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px , 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({...gameQuery,  genre})}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder})}/>
        </HStack>
        <GameGrid
          gameQuery={gameQuery} 
        />
      </GridItem>
    </Grid>
  );
}

export default App;