import { useState, useRef } from 'react';
import { Box, Button, IconButton, Input, Text, useDisclosure } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { editListTitleService } from '../../services';
import { NoteModal } from '../NoteModal/NoteModal';

function List({ board, list, isEditor = false }) {
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
				readOnly={!isEditor}
				mb="3"
				ref={listInputTitleRef}
				onChange={(e) => setTitle(e.target.value)}
				onKeyPress={editListTitle}
				_hover={{
					borderColor: 'none',
				}}
				_focus={{
					outline: isEditor ? '2px solid #1DA1F2' : 'none',
				}}
				border="none"
				backgroundColor="whiteAlpha.100"
				cursor={isEditor ? 'text' : 'normal'}
				w="100%"
				textOverflow="ellipsis"
				overflow="hidden"
			/>

			{list?.cards?.length > 0
				? list.cards.map((card) => (
						<Box bg="gray.200" mb="3" p="2" key={card.cardId}>
							<Box d="flex" alignItems="center" gap="2">
								<Text overflowY="auto" w="80%" maxH="72" wordBreak="break-all" h="max-content">
									{card.cardContent}
								</Text>
								{isEditor ? (
									<IconButton
										icon={<FiEdit />}
										onClick={() => {
											setModalNote(card);
											setEditCardId(card.cardId);
											onOpen();
										}}
									/>
								) : null}
							</Box>
							<Box
								borderTop="1px solid var(--chakra-colors-gray-400)"
								w="100%"
								pt="1"
								mt="3"
								fontSize="12"
								d="flex"
								justifyContent="space-between"
							>
								<Text>Last Edited: Kartik</Text>
								<Text>{new Date('03/13/2011').toDateString()}</Text>
							</Box>
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
			{isEditor ? (
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
			) : null}
		</Box>
	);
}
export { List };
