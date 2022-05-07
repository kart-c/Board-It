import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Select,
  Box,
} from "@chakra-ui/react";
import { addCardToListService, updateCardService } from "../../services";

function NoteModal({ board, listId, isOpen, onClose, modalNote, editCardId }) {
  const [editNote, setEditNote] = useState({ note: "" });
  const initialRef = useRef();

  const addCardToList = () => {
    addCardToListService(board, listId, editNote.note);
    onClose();
  };

  const updateCard = () => {
    updateCardService(board, listId, editCardId, editNote.note);
    onClose();
  };

  useEffect(() => {
    setEditNote(modalNote);
  }, [modalNote]);

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {editNote.note === "" ? "Add New Note" : "Edit Note"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            ref={initialRef}
            rows="10"
            resize="none"
            value={editNote.note}
            onChange={(e) =>
              setEditNote((prev) => ({ ...prev, note: e.target.value }))
            }
          />
        </ModalBody>

        <ModalFooter>
          <Box w="32">
            <Select placeholder="Select option">
              <option value="placeholder">placeholder</option>
              <option value="placeholder">placeholder</option>
              <option value="placeholder">placeholder</option>
            </Select>
          </Box>

          <Button
            colorScheme="twitter"
            mx={3}
            onClick={modalNote.note === "" ? addCardToList : updateCard}
          >
            Save
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { NoteModal };
