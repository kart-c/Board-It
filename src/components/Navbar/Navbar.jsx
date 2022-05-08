import { Avatar, Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../contexts/auth-context';

const Navbar = ({ onOpen, board }) => {
	const { currentUser } = useAuth();

	const boardTitle = board?.boardTitle?.slice(0, 1).toUpperCase() + board?.boardTitle?.slice(1);

	return (
		<Box
			position="fixed"
			left="0"
			right="0"
			top="0"
			p="4"
			d="flex"
			justifyContent="space-between"
			bg="white"
			boxShadow="md"
			alignItems="center"
			h="80px"
			zIndex="5"
		>
			<Heading as="h1" size="lg">
				BoardIt
			</Heading>

			{onOpen ? (
				<Button onClick={onOpen} colorScheme="twitter">
					Add new Board
				</Button>
			) : boardTitle ? (
				<Text fontSize="lg" fontWeight="700" letterSpacing="1px">
					{boardTitle}
				</Text>
			) : null}
			<Avatar
				name={currentUser.id ? currentUser.userName : ''}
				src={currentUser.id && currentUser.userImgUrl}
			/>
		</Box>
	);
};

export { Navbar };
