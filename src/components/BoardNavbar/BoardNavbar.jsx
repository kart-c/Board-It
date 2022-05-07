import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
const BoardNavbar = () => {
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      bg="gray.300"
      maxW="100vw"
      position="fixed"
      top="80px"
      right="0"
      left="0"
      zIndex="5"
    >
      <Button>Members</Button>

      <Input w="17rem" placeholder="search" bg="whiteAlpha.900" />
    </Box>
  );
};

export { BoardNavbar };
