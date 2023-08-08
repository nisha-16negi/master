import React from 'react';
import { Box, Image, Text, Link as ChakraLink, Button, Flex } from '@chakra-ui/react';

interface CardProps {
  pic: string;
  name: string;
  title: string;
  linkedinLink: string;
  likes: number;
  handleLike: () => void;
}

const Card: React.FC<CardProps> = ({ pic, name, title, linkedinLink, likes, handleLike }) => {
  return (
    <Box borderWidth="1px" borderRadius='5px' overflow="hidden" p={4} m={4} border={'2px solid white'}>
      <Image src={pic} alt="Profile Pic" borderRadius='5px' boxSize="150px" m="auto" />
      <Text mt={5} mb={6} fontWeight="bold" fontSize="xl" textAlign="center">
        {name}
      </Text>
      <Text textAlign="start">{title}</Text>
      <Box textAlign="start">
      <ChakraLink href={linkedinLink} isExternal>
        LinkedIn Profile
      </ChakraLink>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mt={6}>
        <Button colorScheme="teal" onClick={handleLike}>
          Like
        </Button>
        <Text ml={2}>{likes} Likes</Text>
      </Flex>
    </Box>
  );
};

export default Card;
