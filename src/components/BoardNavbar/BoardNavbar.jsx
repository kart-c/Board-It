import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Popover, PopoverTrigger } from '@chakra-ui/react';
import { MemberPopover } from '../MemberPopover/MemberPopover';

const BoardNavbar = () => {
	const [direction, setDirection] = useState('right');

	useEffect(() => {
		const currentSize = (e) =>
			e.target.innerWidth <= 450 ? setDirection('bottom') : setDirection('right');
		window.addEventListener('resize', currentSize);
		return () => window.removeEventListener('resize', currentSize);
	}, []);
	return (
		<Box
			d="flex"
			justifyContent="space-between"
			alignItems="center"
			py="4"
			px="6"
			bg="gray.300"
			maxW="100vw"
			position="fixed"
			top="80px"
			right="0"
			left="0"
			zIndex="5"
		>
			<Popover placement={direction} lazyBehavior={true} isLazy={true} arrowSize="12">
				<PopoverTrigger>
					<Button>Members</Button>
				</PopoverTrigger>
				<MemberPopover />
			</Popover>

			<Input w="17rem" placeholder="search" bg="whiteAlpha.900" />
		</Box>
	);
};

export { BoardNavbar };
