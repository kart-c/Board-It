import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

const Navbar = ({ onOpen, currentUser, creds }) => {
	return (
		<Box
			p="4"
			d="flex"
			justifyContent="space-between"
			bg="whiteAlpha.900"
			boxShadow="md"
			alignItems="center"
			h="80px"
		>
			<Heading as="h1" size="lg">
				BoardIt
			</Heading>

			<Button onClick={onOpen} colorScheme="twitter">
				Add new Board
			</Button>
			<Button borderRadius="full" h="12" w="12" size="md">
				{currentUser ? creds : ''}
			</Button>
		</Box>
	);
};

export { Navbar };
