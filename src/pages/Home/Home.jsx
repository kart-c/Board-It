import { Box, Button, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { useBoards } from "../../contexts";
import { Navbar, NewBoardModal } from "../../components";

const Home = () => {
  const { boards } = useBoards();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.300" h="100vh">
      <Navbar onOpen={onOpen} />
      <NewBoardModal isOpen={isOpen} onClose={onClose} />
      <Box
        maxW="1400px"
        mx={{
          md: "auto",
          base: "12",
        }}
        my="8"
        d="flex"
        gap="5"
        flexWrap="wrap"
        justifyContent="center"
        pt="28"
      >
        {boards.length > 0
          ? boards.map((board) => (
              <Box
                key={board.id}
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
                  {board.boardTitle}
                </Heading>
                <Box d="flex" alignItems="center" mt="auto">
                  <Text fontSize="sm" casing="capitalize" mr="auto">
                    {board.adminName}
                  </Text>
                  <Button w="fit-content">Join</Button>
                </Box>
              </Box>
            ))
          : null}
      </Box>
    </Box>
  );
};
export { Home };
