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
  const [editNote, setEditNote] = useState({ note: '' });
  const initialRef = useRef();
  useEffect(() => {
    setEditNote(modalNote);
  }, [modalNote]);
  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {editNote.note === '' ? 'Add New Note' : 'Edit Note'}
        </ModalHeader>
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
            Save
          </Button>
          <Button variant="ghost">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { NoteModal };
