import { Box, Button, Grid, GridItem, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { useBoards } from '../../contexts';
import { Navbar, NewBoardModal } from '../../components';

const Home = () => {
	const { boards } = useBoards();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg="gray.300" minH="100vh">
			<Navbar onOpen={onOpen} />
			<NewBoardModal isOpen={isOpen} onClose={onClose} />
			<Grid
				pb="12"
				pt="28"
				gap="5"
				mx={{
					'2xl': 'auto',
					base: '12',
				}}
				templateColumns={{
					lg: 'repeat(4, 1fr)',
					md: 'repeat(3, 1fr)',
					sm: 'repeat(2, 1fr)',
					base: 'repeat(1, 1fr)',
				}}
				maxW="1360px"
			>
				{boards.length > 0
					? boards.map((board) => (
							<GridItem
								key={board.id}
								bg="whiteAlpha.900"
								p="3"
								h="32"
								d="flex"
								flexDir="column"
								boxShadow="lg"
								borderRadius="10px"
							>
								<Heading as="h4" size="md">
									{board.boardTitle}
								</Heading>
								<Box d="flex" alignItems="center" mt="auto">
									<Text fontSize="sm" casing="capitalize" mr="auto">
										{board.adminName}
									</Text>
									<Button w="fit-content">Join</Button>
								</Box>
							</GridItem>
					  ))
					: null}
			</Grid>
		</Box>
	);
};
export { Home };
