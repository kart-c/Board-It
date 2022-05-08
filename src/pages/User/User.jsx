import React from 'react';
import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Navbar } from '../../components';
import { useAuth, useBoards } from '../../contexts';
import { useNavigate } from 'react-router-dom';

const User = () => {
	const { currentUser } = useAuth();
	const { boards } = useBoards();
	const navigate = useNavigate();

	const userBoards = boards.filter((board) => board?.adminId === currentUser?.id);

	console.log(userBoards);

	return (
		<div>
			<Navbar />
			<Box minH="calc(100vh - 80px)" bg="gray.300" mt="80px" px="8">
				<Flex
					alignItems="center"
					mx="auto"
					w="max-content"
					p="5"
					pt="10"
					flexDir={{
						sm: 'row',
						base: 'column',
					}}
				>
					<Heading
						as="h2"
						size="md"
						order={{
							sm: '0',
							base: '2',
						}}
					>
						{currentUser?.userName}
					</Heading>
					<Avatar
						mb={{ sm: '0', base: '8' }}
						size="lg"
						src={currentUser?.userImgUrl}
						name={currentUser?.userName}
						ml={{ sm: '8', base: '0' }}
						borderRadius="full"
					/>
				</Flex>
				<Text fontSize="32px">My Boards</Text>
				<Flex flexDir={{ sm: 'row', base: 'column' }} gap="4" mt="4">
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
							>
								<Heading as="h4" size="md">
									{board.boardTitle}
								</Heading>
								<Box d="flex" alignItems="center" mt="auto">
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
