import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import Game from "../entities/Game";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  return (
    <>
      <Box margin={5}>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
        <GameTrailers gameId={game?.id} />
      </Box>
    </>
  );
};

export default GameDetailPage;
