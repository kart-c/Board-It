import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getSingleBoardService } from "../../services";
import {
  Box,
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { List, Navbar, BoardNavbar } from "../../components";
import { IoMdAdd } from "react-icons/io";

const Board = () => {
  const { boardId } = useParams();
  const initialFocusRef = useRef();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [title, setTitle] = useState("");
  const [list, setList] = useState([{ list: "todo" }, { list: "completed" }]);
  const [board, setBoard] = useState({});

  useEffect(() => {
    getSingleBoardService(boardId, setBoard);
  }, []);

  console.log(board, boardId);

  return (
    <Box height="100vh" bg="gray.300" minW="max-content" marginTop="150px">
      <BoardNavbar />
      <Navbar />
      <Box
        width="100vw"
        padding="15px"
        d="flex"
        gap="6"
        maxH="calc(100vh - 200px)"
        overflowX="auto"
      >
        {list.map((item) => {
          return <List />;
        })}

        <Popover
          placement="right"
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          initialFocusRef={initialFocusRef}
        >
          <PopoverTrigger>
            <Button
              minW="min-content"
              colorScheme="twitter"
              textAlign="left"
              leftIcon={
                <Box>
                  <IoMdAdd size="24px" />
                </Box>
              }
            >
              Add a List
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Add Title</PopoverHeader>
            <PopoverBody>
              <Input
                ref={initialFocusRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button
                mt="2"
                colorScheme="twitter"
                onClick={() => {
                  setList((prev) => [...prev, { list: title }]);
                  onClose();
                  setTitle("");
                }}
              >
                Save
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
};
export { Board };
