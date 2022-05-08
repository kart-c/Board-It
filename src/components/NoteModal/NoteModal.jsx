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
import { useAuth } from "../../contexts";
import {
  addCardToListService,
  updateCardService,
  deleteCardService,
} from "../../services";

function NoteModal({ board, listId, isOpen, onClose, modalNote, editCardId }) {
  const [editNote, setEditNote] = useState({ note: "" });
  const initialRef = useRef();
  const { currentUser } = useAuth();

  const addCardToList = () => {
    addCardToListService(board, listId, editNote.note, currentUser);
    onClose();
  };

  const updateCard = () => {
    updateCardService(board, listId, editCardId, editNote.note, currentUser);
    onClose();
  };

  const deleteCard = () => {
    deleteCardService(board, listId, editCardId);
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
          {modalNote.note === "" ? "Add New Note" : "Edit Note"}
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
          {modalNote.note !== "" ? (
            <Box w="32">
              <Select placeholder="Select option">
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
              </Select>
            </Box>
          ) : null}

          <Button
            colorScheme="twitter"
            mx={3}
            onClick={modalNote.note === "" ? addCardToList : updateCard}
          >
            Save
          </Button>

          {modalNote.note !== "" ? (
            <Button colorScheme="red" onClick={deleteCard}>
              Delete
            </Button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { NoteModal };
