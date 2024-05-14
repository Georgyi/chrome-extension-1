import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { App } from '../../components/app';
import { useWindowDataInjection } from "../hooks/use-window-data-injection";

export const MainProvider = () => {
  useWindowDataInjection();

  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};
