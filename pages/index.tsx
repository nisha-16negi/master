import React from 'react';
import { Box, Flex, Button, Text, Image } from '@chakra-ui/react';
import router from 'next/router';

const IndexPage: React.FC = () => {

  const createHandle = () => {
		return router.push('/cards');
	};

  return (
    <Flex p={6} textAlign='center' display='grid' backgroundColor='black'>
       <Box m={'40px 40px 15px 40px'} fontSize='26px' color='darkmagenta'>
      <h1>Welcome to My Card App</h1>
      </Box>
      <Box>
     <Image src='/frontimg.jpeg' w={'40em'} h={'20em'} borderRadius={'20px'}></Image>
     </Box>
     <Box mt={'15px'}>
      <Button
              fontSize={20}
							onClick={createHandle}
              variant={'link'}
              bgColor='teal'
              border= '6px solid powderblue'
              p={7}
              borderRadius= {20}
						>
							Click Here to see all post
			</Button>
      </Box>
    </Flex>
  );
};

export default IndexPage;