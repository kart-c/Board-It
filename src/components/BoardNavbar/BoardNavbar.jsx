import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
const BoardNavbar = () => {
	return (
		<Box
			d="flex"
			justifyContent="space-between"
			alignItems="center"
			p="4"
			bg="whiteAlpha.900"
			maxW="100vw"
		>
			<Button>Members</Button>

			<Input w="17rem" placeholder="search" />
		</Box>
	);
};

export { BoardNavbar };
