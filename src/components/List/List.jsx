import { useState, useRef } from 'react';
import { Box, Button, IconButton, Input, Text, useDisclosure } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { editListTitleService } from '../../services';
import { NoteModal } from '../NoteModal/NoteModal';

function List({ board, list }) {
	const listInputTitleRef = useRef();
	const [title, setTitle] = useState(list.listTitle);
	const [modalNote, setModalNote] = useState({ note: '' });
	const [editCardId, setEditCardId] = useState(null);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const editListTitle = (e) => {
		if (e.key === 'Enter') {
			editListTitleService(board, list.listId, title);
			listInputTitleRef.current.blur();
		}
	};

	return (
		<Box
			height="max-content"
			maxH="calc(100vh - 150px)"
			overflowY="auto"
			borderRadius="10px"
			backgroundColor="whiteAlpha.800"
			minW="72"
			maxW="72"
			px="4"
			py="3"
		>
			<Input
				py="5"
				px="1"
				fontSize="xl"
				fontWeight="bold"
				resize="none"
				height={'25px'}
				value={title}
				mb="3"
				ref={listInputTitleRef}
				onChange={(e) => setTitle(e.target.value)}
				onKeyPress={editListTitle}
				_hover={{
					borderColor: 'none',
				}}
				_focus={{
					outline: '2px solid #1DA1F2',
				}}
				border="none"
				backgroundColor="whiteAlpha.100"
			/>

			{list?.cards?.length > 0
				? list.cards.map((card) => (
						<Box key={card.cardId} mb="3" d="flex" alignItems="center" bg="gray.200" p="2" gap="2">
							<Text overflowY="auto" w="80%" maxH="72" wordBreak="break-all" h="max-content">
								{card.cardContent}
							</Text>
							<IconButton
								icon={<FiEdit />}
								onClick={() => {
									setModalNote(card);
									setEditCardId(card.cardId);
									onOpen();
								}}
							/>
						</Box>
				  ))
				: null}
			<NoteModal
				isOpen={isOpen}
				onClose={onClose}
				modalNote={modalNote}
				board={board}
				listId={list.listId}
				editCardId={editCardId}
			/>
			<Button
				d="block"
				textAlign="left"
				bg="orange.100"
				mt="5"
				px="4"
				onClick={() => {
					onOpen();
					setModalNote({ note: '' });
				}}
			>
				Add a note
			</Button>
		</Box>
	);
}
export { List };
