import React from 'react'
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props{
    gameId: number | undefined;
}

const GameScreenShot = ({gameId} : Props) => {
    const {data, error, isLoading } =  useScreenshots(gameId!)
  return (
    <SimpleGrid gap={3} marginTop={5} columns={{base: 1, md:2}}>
        {data?.results.map((file) => <Image key={file.id} src={file.image } />)}
    </SimpleGrid>
  )
}

export default GameScreenShot