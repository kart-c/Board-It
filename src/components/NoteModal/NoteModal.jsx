import React, { useState, useRef, useEffect } from 'react';
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
  console.log(modalNote);
  const [editNote, setEditNote] = useState({ note: '' });
  console.log(editNote);
  const initialRef = useRef();
  useEffect(() => {
    console.log('in effect');
    setEditNote(modalNote);
  }, [modalNote]);
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
            value={editNote.note}
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
