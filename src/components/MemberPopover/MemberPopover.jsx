import React from 'react';
import {
	Avatar,
	Box,
	IconButton,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	Portal,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import { MdOutlineEditOff, MdOutlineEdit } from 'react-icons/md';
import { useAuth } from '../../contexts';
import { addUserToEditorsService, removeUserFromEditorsService } from '../../services';

const MemberPopover = ({ board }) => {
	const { currentUser } = useAuth();

	const isAdmin = board ? board.adminId === currentUser.id : false;

	return (
		<>
			<Portal>
				<PopoverContent w="64" >
					<PopoverArrow />
					<PopoverHeader>Members in Current Boards</PopoverHeader>
					<PopoverCloseButton />
					<PopoverBody>
						{board && board.visitors.length > 0
							? board.visitors.map((visitor) => (
									<Box
										key={visitor.visitorId}
										d="flex"
										alignItems="center"
										justifyContent="space-between"
										mb="3"
									>
										<Box d="flex" alignItems="center">
											<Avatar size="sm" src={visitor.visitorImg} />
											<Text
												ml="2"
												w="40"
												overflow="hidden"
												textOverflow="ellipsis"
												whiteSpace="nowrap"
											>
												{visitor.visitorName}
											</Text>
										</Box>
										{isAdmin && (
											<Tooltip label="Allow Permission">
												<IconButton
													aria-label="Allow Permission"
													size="sm"
													colorScheme="red"
													color="white"
													icon={<MdOutlineEditOff size="24px" />}
													onClick={() => addUserToEditorsService(visitor, board)}
												/>
											</Tooltip>
										)}
									</Box>
							  ))
							: null}
						{board &&
							board.editors.map((editor) => (
								<Box
									key={editor.editorId}
									d="flex"
									alignItems="center"
									justifyContent="space-between"
									mb="3"
								>
									<Box d="flex" alignItems="center">
										<Avatar size="sm" src={editor.editorImg} />
										<Text
											ml="2"
											w="40"
											overflow="hidden"
											textOverflow="ellipsis"
											whiteSpace="nowrap"
										>
											{editor.editorName}
										</Text>
									</Box>
									{isAdmin && currentUser.id !== editor.editorId && (
										<Tooltip label="Revoke Permission">
											<IconButton
												aria-label="Revoke Permission"
												size="sm"
												colorScheme="whatsapp"
												color="white"
												icon={<MdOutlineEdit size="24px" />}
												onClick={() => removeUserFromEditorsService(editor, board)}
											/>
										</Tooltip>
									)}
								</Box>
							))}
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</>
	);
};

export { MemberPopover };
