import {
  Box,
  Grid,
  Image,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from "@chakra-ui/react";
import { addBackgroundImageToBoardService } from "../../services";

const SearchPopover = ({ board, query, result }) => {
  return (
    <PopoverContent overflowY="auto" py="2" w="min-content">
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Showing Results</PopoverHeader>
      <PopoverBody h="500px" d="flex" p="3" m="0">
        {!query ? (
          "Enter a query"
        ) : (
          <Grid templateColumns="repeat(2, 1fr)" gap="5">
            {result.map((item) => {
              return (
                <Box
                  key={item.id}
                  w="150px"
                  onClick={() => {
                    addBackgroundImageToBoardService(board, item.urls.full);
                  }}
                >
                  <Image
                    borderRadius="10px"
                    boxSize="150px"
                    objectFit="cover"
                    src={item.urls.small}
                    alt={item.alt_descrpition}
                  />
                </Box>
              );
            })}
          </Grid>
        )}
      </PopoverBody>
    </PopoverContent>
  );
};

export { SearchPopover };
