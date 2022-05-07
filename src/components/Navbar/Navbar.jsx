import React from 'react';
import { Box, Avatar, Button, Input } from '@chakra-ui/react';
function Navbar() {
  return (
    <Box d="flex" justifyContent="space-between" top="0px">
      <Avatar
        size="sm"
        name="Kola Tioluwani"
        src="https://bit.ly/tioluwani-kolawole"
      />
      <Button>Share</Button>
      <Input />
    </Box>
  );
}

export default Navbar;
