import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { useAuth } from "../../contexts/auth-context";
import { getBoardsService } from "../../services";

const Home = () => {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    getBoardsService(setBoards);
  }, []);

  return (
    <Box bg="gray.300" h="100vh">
      <Box
        p="4"
        d="flex"
        justifyContent="space-between"
        bg="whiteAlpha.900"
        boxShadow="md"
        alignItems="center"
        h="80px"
      >
        <Heading as="h1" size="lg">
          BoardIt
        </Heading>

        <Button onClick={() => navigate("/board")}>Add new Board</Button>
        {currentUser.id ? (
          <Image
            src={currentUser.userImgUrl}
            borderRadius="full"
            h="10"
            w="10"
            size="md"
          ></Image>
        ) : null}
      </Box>
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

