import React, { useCallback, useState } from 'react';
import Card from '@/src/components/card/card';
import { Box, Flex, Input, VStack } from '@chakra-ui/react';
import '../../public/pic1.jpg';
import '../../public/pic2.jpeg';
import '../../public/pic3.png';

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

  const handleLikeButtonClick = (index: number) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[index].likes += 1;
      return updatedCards;
    });
  };

  const filteredCards = useCallback(
    () =>
      cards.filter((card) =>
        card.name.toLowerCase().startsWith(searchValue.toLowerCase())
      ),
    [cards, searchValue]
  );

  return (
    <VStack spacing={4} mt={'40px'}>
      <Input
        p={4}
        type="text"
        placeholder="Search Here..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        border={'5px solid darkgrey'}
        borderRadius= {'6px'}
        bgColor= {'cornsilk'}
        _placeholder={{ color: 'black'}}
        _focus={{ color: 'black'}}
        fontSize={'20px'}
      />
      <Box display='flex' justifyContent='space-between' w={'50%'} h='auto' m='20px'>
      {filteredCards().map((card, index) => (
        <Card
          key={index}
          pic={card.pic}
          name={card.name}
          title={card.title}
          linkedinLink={card.linkedinLink}
          likes={card.likes}
          handleLike={() => handleLikeButtonClick(index)}
        />
      ))}
      </Box>
    </VStack>
  );
};

export default CardsPage;