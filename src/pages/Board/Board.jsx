import React, { useState, useEffect } from 'react';
import List from '../../components/List/List';
import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Navbar from '../../components/Navbar/Navbar';
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
  console.log(editTitle);
  return (
    <>
      <Navbar />
      <Box padding="15px" d="flex" gap="10px">
        <List />
        <List />
        <List />
        <Button bg="brand.200" d="block" p="5px" textAlign="left">
          <AddIcon w={4} h={3} paddingRight="5px" />
          Add a List
        </Button>
      </Box>
    </>
  );
}

export default Board;
