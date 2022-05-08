import React from "react";
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
} from "@chakra-ui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const MemberPopover = ({ board }) => {
  return (
    <>
      <Portal>
        <PopoverContent w="max-content">
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
                    {/* Revoke permission */}
                    <IconButton
                      aria-label="Allow Member" // Cancel Permission
                      size="sm"
                      colorScheme="red"
                      color="white"
                      icon={<MdOutlineCancel size="24px" />}
                    />
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
                  {/* Revoke permission */}
                  <IconButton
                    aria-label="Allow Member" // Cancel Permission
                    size="sm"
                    colorScheme="whatsapp"
                    color="white"
                    icon={<AiOutlineCheckCircle size="24px" />}
                  />
                </Box>
              ))}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </>
  );
};

export { MemberPopover };
