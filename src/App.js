import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import HomeHeroSection from './components/homeHeroSection/HomeHeroSection';
import theme from './styles/theme/Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomeHeroSection />
    </ChakraProvider>
  );
}

export default App;
