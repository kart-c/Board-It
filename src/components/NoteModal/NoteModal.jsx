import React, { useState, useRef } from 'react';
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
} from '@chakra-ui/react';
function NoteModal({ isOpen, onClose, modalNote }) {
  const [editNote, setEditNote] = useState(modalNote);
  const initialRef = useRef();
  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            ref={initialRef}
            rows="10"
            resize="none"
            value={modalNote.note}
            onChange={e =>
              setEditNote(prev => ({ ...prev, note: e.target.value }))
            }
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { NoteModal };
