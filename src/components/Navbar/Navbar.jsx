import React from 'react';
import { Box, Avatar, Button, Input } from '@chakra-ui/react';
function Navbar() {
  return (
    <Box d="flex" justifyContent="space-around" top="0px">
      <Box>
        <Avatar
          size="sm"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
        <Button>Share</Button>
      </Box>

      <Input w="17rem" />
    </Box>
  );
}

export default Navbar;
