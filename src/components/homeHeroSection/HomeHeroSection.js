import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HeaderComp from '../header/HeaderComp'

const HomeHeroSection = () => {

    return (
        <Stack className='hero-wrapper'>
            <HeaderComp />
            <Stack alignItems={'center'} h={'full'}>
                <VStack maxW={'650px'} color={'white'} textAlign={'center'} m={'auto'}>
                    <Heading as='h1' size='2xl' fontWeight={'extrabold'}>OWN. RACE. EARN.</Heading>
                    <Text fontWeight={'bold'}>The future of digital racehorse ownership is here. Race your way to the top and build your legacy today.</Text>
                    <Button bgGradient='linear(to-r, #27b18a, #317d6c)' color={'white'} size={'lg'} py={'1'} px={'12'}>Start</Button>
                </VStack>
            </Stack>
        </Stack>
    )
}

export default HomeHeroSection