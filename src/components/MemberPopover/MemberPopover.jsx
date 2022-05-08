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
} from '@chakra-ui/react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const MemberPopover = () => {
	return (
		<>
			<Portal>
				<PopoverContent w="max-content">
					<PopoverArrow />
					<PopoverHeader>Members in Current Boards</PopoverHeader>
					<PopoverCloseButton />
					<PopoverBody>
						<Box d="flex" alignItems="center" justifyContent="space-between" mb="3">
							<Box d="flex" alignItems="center">
								<Avatar size="sm" />
								<Text ml="2" w="40" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
									Name of Memberasdasdasdasdsadasdsdasdsdasdasdsad
								</Text>
							</Box>
							{/* Revoke permission */}
							<IconButton
								aria-label="Allow Member" // Cancel Permission
								size="sm"
								colorScheme="red"
								color="white"
								icon={<MdOutlineCancel size="24px" />}
							/>
						</Box>
						<Box d="flex" alignItems="center" justifyContent="space-between" mb="3">
							<Box d="flex" alignItems="center">
								<Avatar size="sm" />
								<Text ml="2" w="40" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
									Name of Memberasdasdasdasdsadasdsdasdsdasdasdsad
								</Text>
							</Box>
							{/* Allow Button */}
							<IconButton
								aria-label="Allow Member" // Cancel Permission
								size="sm"
								colorScheme="whatsapp"
								icon={<AiOutlineCheckCircle size="24px" />}
							/>
							{/* Revoke permission */}
						</Box>
						<Box d="flex" alignItems="center" justifyContent="space-between" mb="3">
							<Box d="flex" alignItems="center">
								<Avatar size="sm" />
								<Text ml="2" w="40" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
									Name of Memberasdasdasdasdsadasdsdasdsdasdasdsad
								</Text>
							</Box>
							{/* Revoke permission */}
							<IconButton
								aria-label="Allow Member" // Cancel Permission
								size="sm"
								colorScheme="red"
								color="white"
								icon={<MdOutlineCancel size="24px" />}
							/>
						</Box>
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</>
	);
};

export { MemberPopover };
