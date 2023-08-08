import React, { useState } from 'react';
import Card from './components/card';
import { Box, Flex, Input, VStack } from '@chakra-ui/react';
import '../public/pic1.jpg';
import '../public/pic2.jpeg';
import '../public/pic3.png';

interface CardData {
  pic: string;
  name: string;
  title: string;
  linkedinLink: string;
  likes: number;
}

const CardsPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cards, setCards] = useState<CardData[]>([
    {
      pic: 'pic2.jpeg',
      name: 'John',
      title: 'Software Engineer',
      linkedinLink: 'https://www.linkedin.com/in/john/',
      likes: 0,
    },
    {
        pic: 'pic1.jpg',
        name: 'Neha',
        title: 'Doctor',
        linkedinLink: 'https://www.linkedin.com/in/neha/',
        likes: 0,
      },
      {
        pic: 'pic3.png',
        name: 'Akash',
        title: 'Chartered Accountant',
        linkedinLink: 'https://www.linkedin.com/in/akash/',
        likes: 0,
      },
  ]);

  const handleLike = (index: number) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[index].likes += 1;
      return updatedCards;
    });
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  return (
    <VStack spacing={4}>
      <Input
        p={4}
        type="text"
        placeholder="Search Here..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Box display='flex' justifyContent='space-between' w={'50%'} h='auto' m='20px'>
      {filteredCards.map((card, index) => (
        <Card
          key={index}
          pic={card.pic}
          name={card.name}
          title={card.title}
          linkedinLink={card.linkedinLink}
          likes={card.likes}
          handleLike={() => handleLike(index)}
        />
      ))}
      </Box>
    </VStack>
  );
};

export default CardsPage;