import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Input, Textarea, Text } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
function List() {
  const [title, setTitle] = useState('placeholder');
  const [editTitle, setEditTitle] = useState(false);
  const notes = [
    {
      note: 'dsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdas',
    },
    {
      note: 'dsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdas',
    },
    {
      note: 'dsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasdddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdasddsassaddasdsdasdadsdadadasdasdadsadasdadasdaddsasdasdas',
    },
    {
      note: 'dsaxsd',
    },
    {
      note: 'sadds',
    },
  ];
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
    <Box
      maxH="calc(100vh - 150px)"
      overflowY="auto"
      borderRadius="10px"
      backgroundColor="whiteAlpha.800"
      minW="72"
      maxW="72"
      p="3"
      px="2"
      py="3"
    >
      <Input
        padding="5px"
        fontWeight="bold"
        resize="none"
        height={'25px'}
        value={title}
        mb="2"
        onChange={e => setTitle(e.target.value)}
        isReadOnly={editTitle}
        _hover={{
          borderColor: 'none',
        }}
        border="none"
        outline="none"
        backgroundColor="whiteAlpha.100"
      />

      {notes.map(note => (
        <Box mb="3" d="flex" alignItems="center">
          <Text
            overflowY="auto"
            w="80%"
            maxH="72"
            wordBreak="break-all"
            h="max-content"
          >
            {note.note}
          </Text>
          <Button>
            <FiEdit />
          </Button>
        </Box>
      ))}
      <Button d="block" textAlign="left" bg="orange.100" mt="5" px="4">
        Add a note
      </Button>
    </Box>
  );
}
export { List };