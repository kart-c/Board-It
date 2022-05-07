import React from 'react';
import { List, Navbar } from '../../components';
import { Box, Button } from '@chakra-ui/react';
import { BoardNavbar } from './../../components';
import { IoMdAdd } from 'react-icons/io';

const Board = () => {
  return (
    <Box height="100vh" bg="gray.300" minW="max-content" marginTop="150px">
      <BoardNavbar />
      <Navbar />
      <Box
        width="100vw"
        padding="15px"
        d="flex"
        gap="6"
        maxH="calc(100vh - 200px)"
        overflowX="auto"
      >
        <List />
        <List />
        <List />
        <Button
          minW="min-content"
          colorScheme="twitter"
          textAlign="left"
          leftIcon={
            <Box>
              <IoMdAdd size="24px" />
            </Box>
          }
        >
          Add a List
        </Button>
      </Box>
    </Box>
  );
};
export { Board };
