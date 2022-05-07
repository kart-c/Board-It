import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts";
import { addNewBoardService } from "../../services";

const NewBoardModal = ({ isOpen, onClose, boards }) => {
  const [boardTitleInput, setBoardTitleInput] = useState("");
  const { currentUser } = useAuth();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx="10">
          <ModalHeader>Create New Board</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6">
            <FormControl>
              <FormLabel>Board name</FormLabel>
              <Input
                value={boardTitleInput}
                onChange={(e) => setBoardTitleInput(e.target.value)}
                autoFocus
                placeholder="Project Management"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="twitter"
              mr="3"
              onClick={() => {
                addNewBoardService(currentUser, boardTitleInput, boards);
                onClose();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { NewBoardModal };
