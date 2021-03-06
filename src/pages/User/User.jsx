import React from 'react';
import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Navbar } from '../../components';
import { useAuth, useBoards } from '../../contexts';
import { useNavigate } from 'react-router-dom';
import { signOutService } from '../../services';

const User = () => {
	const { currentUser } = useAuth();
	const { boards } = useBoards();
	const navigate = useNavigate();

	const userBoards = boards.filter((board) => board?.adminId === currentUser?.id);

	const signoutHandler = () => {
		signOutService();
		navigate('/');
	};

	return (
		<div>
			<Navbar />
			<Box minH="calc(100vh - 80px)" bg="gray.300" mt="80px" px="8">
				<Flex alignItems="center" mx="auto" w="max-content" p="5" pt="10" flexDir="column">
					<Avatar
						size="lg"
						src={currentUser?.userImgUrl}
						name={currentUser?.userName}
						mb="6"
						borderRadius="full"
					/>
					<Heading as="h2" size="md">
						{currentUser?.userName}
					</Heading>
					<Button colorScheme="red" mt="5" onClick={signoutHandler}>
						Logout
					</Button>
				</Flex>
				<Text fontSize="32px">My Boards</Text>
				<Flex flexDir={{ sm: 'row', base: 'column' }} gap="6" mt="4">
					{userBoards?.length > 0 ? (
						userBoards.map((board) => (
							<Box
								key={board.id}
								bg="whiteAlpha.900"
								p="3"
								h="32"
								d="flex"
								flexDir="column"
								boxShadow="lg"
								borderRadius="10px"
								w="60"
							>
								<Heading as="h4" size="md">
									{board.boardTitle}
								</Heading>
								<Box d="flex" alignItems="center" mt="auto" justifyContent="space-between">
									<Text fontSize="sm" casing="capitalize" mr="6">
										{board.adminName}
									</Text>
									<Button w="fit-content" onClick={() => navigate(`/board/${board.id}`)}>
										Go To
									</Button>
								</Box>
							</Box>
						))
					) : (
						<Text fontSize="32px" mt="16">
							You have no boards to show
						</Text>
					)}
				</Flex>
			</Box>
		</div>
	);
};

export { User };
