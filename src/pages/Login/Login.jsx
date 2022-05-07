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
        <Button
          onClick={() => googleSignInService(navigate)}
          colorScheme="twitter"
          size="lg"
          pl="2"
          leftIcon={
            <IconButton
              bg="white"
              aria-label="Call Segun"
              size="md"
              icon={<FcGoogle size="24px" />}
            />
          }
        >
          Sign in with Google
        </Button>
        <Button onClick={() => signOutService()}>Logout</Button>
      </Box>
    </>
  );
};

export { Login };
