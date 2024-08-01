import { Badge } from "@chakra-ui/react";
import React from "react";

interface Prop {
  score: number | undefined;
}

const CriticScore = ({ score }: Prop) => {
    let color = score!!  > 75 ? 'green' : score!! > 60 ? 'yellow' : '';
  return (
    <Badge fontSize='14px' colorScheme={color} paddingX='2px' >{score}</Badge>
  )
};

export default CriticScore;
