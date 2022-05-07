import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { googleSignInService, signOutService } from "../../services"

const Login = () => {
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
				<Button
				onClick={() => googleSignInService()}
					colorScheme="twitter"
					size="lg"
					leftIcon={
						<Box bg="white">
							<FcGoogle size="24px" />
						</Box>
					}
				>
					Sign in with Google
				</Button>
				<Button onClick={() => signOutService()} > Test Sign out </Button>
			</Box>
		</>
	);
};

export { Login };
