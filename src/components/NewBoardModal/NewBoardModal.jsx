import { useRef } from 'react';
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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NewBoardModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const initialRef = useRef();

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx="10">
          <ModalHeader>Create New Board</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6">
            <FormControl>
              <FormLabel>Board name</FormLabel>
              <Input ref={initialRef} placeholder="Project Management" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="twitter"
              mr="3"
              onClick={() => navigate('/board')}
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
