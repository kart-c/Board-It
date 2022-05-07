import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
function List() {
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
    <Box bg="brand.200" minW="17rem">
      {editTitle ? (
        <Input
          resize="none"
          height={'25px'}
          w="min-content"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      ) : (
        <Heading
          padding="10px"
          onClick={e => {
            e.stopPropagation();
            setEditTitle(true);
          }}
          as="h5"
          size="sm"
        >
          {title}
        </Heading>
      )}
      {/* {notes.map(note=>)} */}
      <Button bg="brand.200" d="block" p="5px" w="100%" textAlign="left">
        <AddIcon w={4} h={3} paddingRight="5px" />
        Add a note
      </Button>
    </Box>
  );
}

export default List;
