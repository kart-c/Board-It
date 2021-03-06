import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
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
import { DragDropContext } from "react-beautiful-dnd";
import {
  addNewListService,
  addUserAsVisitorService,
  getSingleDocService,
  updateBoardListsService,
} from "../../services";
import { List, Navbar, BoardNavbar } from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useAuth } from "../../contexts";

const Board = () => {
  const { boardId } = useParams();
  const { currentUser } = useAuth();
  const initialFocusRef = useRef();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [listInputTitle, setListInputTitle] = useState("");
  const [board, setBoard] = useState(null);

  const [query, setQuery] = useState("");

  useEffect(() => {
    getSingleDocService(boardId, setBoard);
  }, []);

  useEffect(() => {
    if (
      board &&
      currentUser?.id !== board?.adminId &&
      !board.editors.some((item) => item.editorId === currentUser.id)
    ) {
      addUserAsVisitorService(board, currentUser);
    }
  }, [board?.id]);

  const isEditor = board
    ? board.editors.some((item) => item.editorId === currentUser.id)
    : false;

  const onDragEnd = (result) => {
    if (isEditor) {
      const { destination, source } = result;
      if (!destination) return;
      if (source.droppableId !== destination.droppableId) {
        const sourceList = board.lists.filter(
          (list) => list.listTitle === source.droppableId
        )[0];

        const destinationList = board.lists.filter(
          (list) => list.listTitle === destination.droppableId
        )[0];

        const temp = sourceList.cards[source.index];
        sourceList.cards.splice(source.index, 1);
        destinationList.cards.splice(destination.index, 0, temp);
        setBoard((prev) => {
          return {
            ...prev,
            lists: prev.lists
              .filter(
                (list) =>
                  list.listTitle !== source.droppableId &&
                  list.listTitle !== destination.droppableId
              )
              .concat([destinationList, sourceList]),
          };
        });
      }
      if (source.droppableId === destination.droppableId) {
        const sourceList = board.lists.filter(
          (list) => list.listTitle === source.droppableId
        )[0];
        const temp = sourceList.cards[source.index];
        sourceList.cards.splice(source.index, 1);
        sourceList.cards.splice(destination.index, 0, temp);
      }

      updateBoardListsService(board);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        height="calc(100vh - 152px)"
        bg="gray.300"
        backgroundImage={board && board.backgroundImg}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        minW="max-content"
        mt="152px"
      >
        <Navbar board={board} />
        <BoardNavbar board={board} setQuery={setQuery} query={query} />
        <Box
          width="100vw"
          padding="15px"
          d="flex"
          gap="6"
          h="90%"
          overflowX="auto"
          overflowY="hidden"
        >
          {board?.lists?.length > 0
            ? board.lists.map((item) => (
                <List
                  isEditor={isEditor}
                  key={item.listId}
                  list={item}
                  board={board}
                />
              ))
            : null}
          <Popover
            placement="right"
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            initialFocusRef={initialFocusRef}
          >
            {isEditor && (
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
            )}
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Add Title</PopoverHeader>
              <PopoverBody>
                <Input
                  ref={initialFocusRef}
                  value={listInputTitle}
                  onChange={(e) => setListInputTitle(e.target.value)}
                />
                <Button
                  mt="2"
                  colorScheme="twitter"
                  onClick={() => {
                    addNewListService(board, listInputTitle);
                    onClose();
                    setListInputTitle("");
                  }}
                >
                  Save
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
    </DragDropContext>
  );
};
export { Board };
