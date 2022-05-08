import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { MemberPopover } from "../MemberPopover/MemberPopover";
import { SearchPopover } from "../SearchPopover/SearchPopover";

const BoardNavbar = ({ board, query, setQuery }) => {
  const [direction, setDirection] = useState("right");
  const [result, setResult] = useState([]);
  const getImages = async () => {
    const images = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${"2rANIb_zZdg47kmvAIdqlwY3B1dWaNcx_EcyAQDHGsU"}`
    );
    const response = await images.json();
    setResult(response.results);
  };
  useEffect(() => {
    const currentSize = (e) =>
      e.target.innerWidth <= 450
        ? setDirection("bottom")
        : setDirection("right");
    window.addEventListener("resize", currentSize);
    return () => window.removeEventListener("resize", currentSize);
  }, []);
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      py="4"
      px="6"
      bg="transparent"
      maxW="100vw"
      position="fixed"
      top="80px"
      right="0"
      left="0"
      zIndex="5"
    >
      <Popover
        placement={direction}
        lazyBehavior={true}
        isLazy={true}
        arrowSize="12"
      >
        <PopoverTrigger>
          <Button>Members</Button>
        </PopoverTrigger>
        <MemberPopover board={board} />
      </Popover>
      <Box position="relative">
        <Input
          w="17rem"
          placeholder="search"
          bg="whiteAlpha.900"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Popover>
          <PopoverTrigger>
            <IconButton
              zIndex="1"
              bg="gray.200"
              right="0"
              position="absolute"
              aria-label="search"
              icon={<AiOutlineSearch />}
              onClick={() => getImages()}
            />
          </PopoverTrigger>
          <SearchPopover board={board} query={query} result={result} />
        </Popover>
      </Box>
    </Box>
  );
};

export { BoardNavbar };
