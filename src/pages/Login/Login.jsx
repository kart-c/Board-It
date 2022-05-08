import React from 'react';
import { Box, Button, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { googleSignInService } from '../../services';
import { useNavigate } from 'react-router-dom';
import landing from '../../assets/landing.png';

const Login = () => {
	const navigate = useNavigate();

	return (
		<>
			<Flex
				bg="gray.300"
				h="100vh"
				alignItems="center"
				px="10"
				flexDir={{
					md: 'row',
					base: 'column',
				}}
				w="100%"
			>
				<Box
					d="flex"
					flexDir="column"
					alignItems="center"
					gap="5"
					flexBasis="50%"
					order={{
						md: '0',
						base: '2',
					}}
					mt={{
						md: '0',
						base: '5',
					}}
				>
					<Heading textAlign="center" fontFamily="Roboto">
						BoardIt
					</Heading>
					<Text w="30ch" textAlign="center">
						A visual tool to manage and track all your tasks and projects
					</Text>
					<Box position="relative">
						<Button
							onClick={() => googleSignInService(navigate)}
							colorScheme="twitter"
							size="lg"
							pl="12"
						>
							Sign in with Google
						</Button>
						<IconButton
							onClick={() => googleSignInService(navigate)}
							position="absolute"
							left="1"
							top="1"
							bg="white"
							aria-label="Google Logo"
							size="md"
							icon={<FcGoogle size="24px" />}
						/>
					</Box>
				</Box>
				<Box flexBasis="50%">
					<Image
						src={landing}
						alt="landing"
						w="100%"
						mt={{
							md: '0',
							base: '8',
						}}
						minW="22rem"
					/>
				</Box>
			</Flex>
		</>
	);
};

export { Login };
