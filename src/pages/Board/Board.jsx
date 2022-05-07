import React, { useState, useEffect } from 'react';
import { List } from '../../components';
import { Box, Button, Heading, Input } from '@chakra-ui/react';

import { Navbar } from './../../components';
import { IoMdAdd } from 'react-icons/io';
function Board() {
  const [title, setTitle] = useState('placeholder');
  const [editTitle, setEditTitle] = useState(false);

  useEffect(() => {
    const toggleEdit = () => {
      setEditTitle(false);
    };
    window.addEventListener('click', toggleEdit);
    return () => {
      window.removeEventListener('click', toggleEdit);
    };
  }, []);

  return (
    <Box height="100vh" bg="gray.300" minW="max-content">
      <Navbar />
      <Box padding="15px" d="flex" gap="6" maxH="calc(100vh - 200px)">
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
}
export { Board };
