import React from 'react';
import { Box, Button, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { useAuth } from '../../contexts/auth-context';
import { NewBoardModal } from '../../components/NewBoardModal/NewBoardModal';

const Home = () => {
	const { currentUser } = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const user = currentUser && currentUser.displayName.indexOf(' ');
	const creds = `${currentUser && currentUser.displayName.slice(0, 1)}${
		currentUser && currentUser.displayName.slice(user + 1, user + 2)
	}`;

	return (
		<Box bg="gray.300" h="100vh">
			<NewBoardModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
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
					{currentUser && creds}
				</Button>
			</Box>
			<Box
				maxW="1400px"
				mx={{
					md: 'auto',
					base: '12',
				}}
				my="8"
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
