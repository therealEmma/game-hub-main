import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import Game from "../entities/Game";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenShot from "../components/GameScreenShot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} margin={5}>
        <GridItem>
          <Heading>{game?.name}</Heading>
          <ExpandableText>{game?.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailers gameId={game?.id} />
          <GameScreenShot gameId={game?.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
