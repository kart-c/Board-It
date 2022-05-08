import React from 'react';
import { Box, Button, Heading, IconButton } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { googleSignInService, signOutService } from '../../services';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box
				bg="gray.300"
				h="100vh"
				d="flex"
				justifyContent="center"
				alignItems="center"
				flexDir="column"
			>
				<Heading textAlign="center" mb="32">
					BoardIT
				</Heading>
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
				<Button onClick={() => signOutService()}>Logout</Button>
			</Box>
		</>
	);
};

export { Login };
