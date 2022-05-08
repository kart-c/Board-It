import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
	Box,
	Button,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	useDisclosure,
} from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';
import { useBoards } from '../../contexts';
import { addNewListService } from '../../services';
import { List, Navbar, BoardNavbar } from '../../components';

const Board = () => {
	const { boardId } = useParams();
	const { boards } = useBoards();
	const initialFocusRef = useRef();
	const { onOpen, onClose, isOpen } = useDisclosure();
	const [listInputTitle, setListInputTitle] = useState('');
	const [board, setBoard] = useState({});

	useEffect(() => {
		const singleBoard = boards.find((board) => board.id === boardId);
		setBoard(singleBoard);
	}, [boards]);

	return (
		<Box height="calc(100vh - 150px)" bg="gray.300" minW="max-content" marginTop="150px">
			<Navbar board={board} />
			<BoardNavbar />
			<Box
				width="100vw"
				padding="15px"
				d="flex"
				gap="6"
				maxH="calc(100vh - 200px)"
				overflowX="auto"
			>
				{board?.lists?.length > 0
					? board.lists.map((item) => <List key={item.listId} list={item} board={board} />)
					: null}

				<Popover
					placement="right"
					isOpen={isOpen}
					onOpen={onOpen}
					onClose={onClose}
					initialFocusRef={initialFocusRef}
				>
					<PopoverTrigger>
						<Button
							minW="min-content"
							colorScheme="twitter"
							textAlign="left"
							leftIcon={
								<Box>
									<IoMdAdd size="24px" />
								</Box>
							}
						>
							Add a List
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverArrow />
						<PopoverCloseButton />
						<PopoverHeader>Add Title</PopoverHeader>
						<PopoverBody>
							<Input
								ref={initialFocusRef}
								value={listInputTitle}
								onChange={(e) => setListInputTitle(e.target.value)}
							/>
							<Button
								mt="2"
								colorScheme="twitter"
								onClick={() => {
									addNewListService(board, listInputTitle);
									onClose();
									setListInputTitle('');
								}}
							>
								Save
							</Button>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</Box>
		</Box>
	);
};
export { Board };
