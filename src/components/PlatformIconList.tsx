import {FaWindows, FaLinux, FaPlaystation, FaXbox, FaApple, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconTree, IconType } from 'react-icons/lib';


interface Props{
    platforms: Platform[];
}

const PlatformIconList = ({platforms} : Props) => {

    const iconMap: { [key: string] : IconType } = {
         pc: FaWindows,
         playstation: FaPlaystation,
         xbox: FaXbox,
         nintendo: SiNintendo,
         apple: FaApple,
         android: FaAndroid,
         linux: FaLinux,
         ios: MdPhoneIphone,
         web: BsGlobe
    }
  return (
    <>
    <HStack marginY='5px'>
        {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' /> )}
    </HStack>
    </>
  )
}

export default PlatformIconList