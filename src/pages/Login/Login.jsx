import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

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
			</Box>
		</>
	);
};

export { Login };
