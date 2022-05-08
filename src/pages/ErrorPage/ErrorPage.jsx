import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <Flex bg="gray.300" justifyContent="center" alignItems="center" height="100vh" pb="50px">
    
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding="5"
        borderRadius="10px"
        gap="16px"
      >
        <Text fontSize="64px" fontWeight="700">
          404
        </Text>
        <Heading as="h1">Page not found.</Heading>

        <Text width="45ch" textAlign="center" >
          The link you clicked may be broken or the page may have been removed
          or renamed.
        </Text>

        <Link to="/home">
          <Button colorScheme="twitter" >Go To Homepage</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
