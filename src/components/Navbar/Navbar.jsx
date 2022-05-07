import React from 'react';
import { Box, Avatar, Button, Input } from '@chakra-ui/react';
function Navbar() {
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      bg="whiteAlpha.900"
      maxW="100vw"
      // flexDir={{
      //   md: 'row',
      //   base: 'column',
      // }}
    >
      <Button
      // order={{
      //   md: 0,
      //   base: 1,
      // }}
      >
        Members
      </Button>

      <Input w="17rem" placeholder="search" />
    </Box>
  );
}

export { Navbar };
