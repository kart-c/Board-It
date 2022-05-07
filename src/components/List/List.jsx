import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { NoteModal } from '../NoteModal/NoteModal';
function List() {
  const [title, setTitle] = useState('placeholder');
  const [editTitle, setEditTitle] = useState(false);
  const [modalNote, setModalNote] = useState({ note: '' });
  const notes = [
    {
      note: 'dsassaddasdsdasdadsdadad',
    },
    {
      note: 'dsassaddasdsdasdadsdadadasdasdads',
    },
    {
      note: 'dsassaddasdsdasdadsdadadasdasdads',
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxH="calc(100vh - 150px)"
      overflowY="auto"
      borderRadius="10px"
      backgroundColor="whiteAlpha.800"
      minW="72"
      maxW="72"
      px="4"
      py="3"
    >
      <Input
        py="5"
        px="1"
        fontSize="xl"
        fontWeight="bold"
        resize="none"
        height={'25px'}
        value={title}
        mb="3"
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
        <Box mb="3" d="flex" alignItems="center" bg="gray.200" p="2" gap="2">
          <Text
            overflowY="auto"
            w="80%"
            maxH="72"
            wordBreak="break-all"
            h="max-content"
          >
            {note.note}
          </Text>
          <IconButton
            icon={<FiEdit />}
            onClick={() => {
              setModalNote(note);
              onOpen();
            }}
          />
        </Box>
      ))}
      <NoteModal isOpen={isOpen} onClose={onClose} modalNote={modalNote} />
      <Button
        d="block"
        textAlign="left"
        bg="orange.100"
        mt="5"
        px="4"
        onClick={() => {
          onOpen();
          setModalNote({ note: '' });
        }}
      >
        Add a note
      </Button>
    </Box>
  );
}
export { List };
