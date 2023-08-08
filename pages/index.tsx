import React from 'react';
import Link from 'next/link';
import { Box, HStack } from '@chakra-ui/react';
import CardsPage from './cards';

const IndexPage: React.FC = () => {
  return (
    <HStack p={6} textAlign='center' display='list-item' backgroundColor='black'>
     <Box m={10}>
      <h1>Welcome to My Card App</h1>
      </Box>
      <Box>
      <CardsPage />
      </Box>
    </HStack>
  );
};

export default IndexPage;