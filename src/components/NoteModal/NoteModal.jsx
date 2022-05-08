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
  moveCardBetweenListsService,
} from "../../services";

function NoteModal({ board, listId, isOpen, onClose, modalNote, editCardId }) {
  const [editNote, setEditNote] = useState({ note: "" });
  const initialRef = useRef();
  const { currentUser } = useAuth();
  const [moveDropdownValue, setMoveDropdownValue] = useState("Move");

  const addCardToList = () => {
    addCardToListService(board, listId, editNote.note, currentUser);
    onClose();
  };

  const updateCard = () => {
    updateCardService(board, listId, editCardId, editNote.note, currentUser);
    if (listId !== moveDropdownValue && moveDropdownValue !== "Move") {
      moveCardBetweenListsService(board, listId, moveDropdownValue, editCardId);
      setMoveDropdownValue("Move");
    }
    onClose();
  };

  const deleteCard = () => {
    deleteCardService(board, listId, editCardId);
    onClose();
  };

  useEffect(() => {
    setEditNote(modalNote);
  }, [modalNote]);

  const modalCloseHandler = () => {
    setMoveDropdownValue("Move");
    onClose();
  };

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {modalNote.note === "" ? "Add New Note" : "Edit Note"}
        </ModalHeader>
        <ModalCloseButton onClick={modalCloseHandler} />
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
              <Select
                value={moveDropdownValue}
                onChange={(e) => setMoveDropdownValue(e.target.value)}
              >
                <option value="Move">Move To</option>
                {board.lists.map((list) => (
                  <option value={list.listId} key={list.listId}>
                    {list.listTitle}
                  </option>
                ))}
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
