import { Avatar, Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../contexts/auth-context';

const Navbar = ({ onOpen }) => {
	const { currentUser } = useAuth();

	return (
		<Box
			position="fixed"
			left="0"
			right="0"
			top="0"
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

			{onOpen ? (
				<Button onClick={onOpen} colorScheme="twitter">
					Add new Board
				</Button>
			) : null}
			<Avatar name={currentUser ? currentUser.displayName : ''} />
		</Box>
	);
};

export { Navbar };
