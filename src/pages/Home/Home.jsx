import React from 'react';
import { Box, Button, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { NewBoardModal } from '../../components/NewBoardModal/NewBoardModal';
import { Navbar } from '../../components';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.300" h="100vh">
      <NewBoardModal isOpen={isOpen} onClose={onClose} />
      <Navbar onOpen={onOpen} />
      <Box
        maxW="1400px"
        mx={{
          md: 'auto',
          base: '12',
        }}
        pt="28"
        d="flex"
        gap="5"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Box
          bg="whiteAlpha.900"
          p="3"
          w="60"
          h="32"
          d="flex"
          flexDir="column"
          boxShadow="lg"
          borderRadius="10px"
        >
          <Heading as="h4" size="md">
            Template title
          </Heading>
          <Box d="flex" alignItems="center" mt="auto">
            <Text fontSize="sm" casing="capitalize" mr="auto">
              name of owner
            </Text>
            <Button w="fit-content">Join</Button>
          </Box>
        </Box>
        <Box
          bg="whiteAlpha.900"
          p="3"
          w="60"
          h="32"
          d="flex"
          flexDir="column"
          boxShadow="lg"
          borderRadius="10px"
        >
          <Heading as="h4" size="md">
            Template title
          </Heading>
          <Box d="flex" alignItems="center" mt="auto">
            <Text fontSize="sm" casing="capitalize" mr="auto">
              name of owner
            </Text>
            <Button w="fit-content">Join</Button>
          </Box>
        </Box>
        <Box
          bg="whiteAlpha.900"
          p="3"
          w="60"
          h="32"
          d="flex"
          flexDir="column"
          boxShadow="lg"
          borderRadius="10px"
        >
          <Heading as="h4" size="md">
            Template title
          </Heading>
          <Box d="flex" alignItems="center" mt="auto">
            <Text fontSize="sm" casing="capitalize" mr="auto">
              name of owner
            </Text>
            <Button w="fit-content">Join</Button>
          </Box>
        </Box>
        <Box
          bg="whiteAlpha.900"
          p="3"
          w="60"
          h="32"
          d="flex"
          flexDir="column"
          boxShadow="lg"
          borderRadius="10px"
        >
          <Heading as="h4" size="md">
            Template title
          </Heading>
          <Box d="flex" alignItems="center" mt="auto">
            <Text fontSize="sm" casing="capitalize" mr="auto">
              name of owner
            </Text>
            <Button w="fit-content">Join</Button>
          </Box>
        </Box>
        <Box
          bg="whiteAlpha.900"
          p="3"
          w="60"
          h="32"
          d="flex"
          flexDir="column"
          boxShadow="lg"
          borderRadius="10px"
        >
          <Heading as="h4" size="md">
            Template title
          </Heading>
          <Box d="flex" alignItems="center" mt="auto">
            <Text fontSize="sm" casing="capitalize" mr="auto">
              name of owner
            </Text>
            <Button w="fit-content">Join</Button>
          </Box>
        </Box>
        <Box
          bg="whiteAlpha.900"
          p="3"
          w="60"
          h="32"
          d="flex"
          flexDir="column"
          boxShadow="lg"
          borderRadius="10px"
        >
          <Heading as="h4" size="md">
            Template title
          </Heading>
          <Box d="flex" alignItems="center" mt="auto">
            <Text fontSize="sm" casing="capitalize" mr="auto">
              name of owner
            </Text>
            <Button w="fit-content">Join</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Home };
