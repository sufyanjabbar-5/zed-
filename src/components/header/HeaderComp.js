import { Button, HStack, Image, Stack, Text, ListItem, ListIcon, Link } from '@chakra-ui/react'
import React from 'react';
import logo from '../../assets/images/logo.svg';
import bgimg from '../../assets/images/headerbg.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';

const HeaderComp = () => {
  return (
    // <Stack zIndex={'99'} className={'header'} bgColor={'#22262d'}>
    <Stack zIndex={'99'} className={'header'} bgColor={'transparent'}>
      <HStack py={'4'} px={'16'} justifyContent={'space-between'} w={'full'} backgroundImage={bgimg} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
        <Image src={logo} />
        <Stack direction={['column', 'row']} spacing={'5'} color={'#f0f8ff'} fontSize={'12.5px'} fontWeight={'600'} lineHeight={'2.4rem'}>
          <Text>
            RACING
            {/* <ListIcon as={ChevronDownIcon} color='green.500' /> */}
          </Text>
          <Text>
            BREEDING
          </Text>
          <Text>
            MARKETPLACE
          </Text>
          <Text>
            LEARN
            {/* <ListIcon as={ChevronDownIcon} color='green.500' /> */}
          </Text>
        </Stack>
        <HStack>
          <Text color={'#f0f8ff52'} fontSize={'sm'}>Want to play ZED?</Text>
          <Button bgGradient='linear(to-r, #27b18a, #317d6c)' color={'white'} size={'sm'} py={'1'} px={'8'}>Start</Button>
        </HStack>
      </HStack>
    </Stack>
  )
}

export default HeaderComp