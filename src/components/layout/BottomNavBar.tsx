import { Box, IconButton, HStack, Circle, Center } from "@chakra-ui/react";
import {
  HomeIcon,
  SearchIcon,
  CirclePlus ,
  VideoIcon,
  UserIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomNavBar() {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      borderTop="1px solid"
      borderColor="gray.200"
      zIndex="banner"
      paddingBottom={10}
    >
      <HStack justify="space-around">
        <Link to="/home">
          <IconButton aria-label="Home" variant="ghost" />
          <HomeIcon size={32}/>
        </Link>

        <Link to="/search">
          <IconButton aria-label="Search" variant="ghost" />
          <SearchIcon size={32}/>
        </Link>

        <Link to="/create">
          <IconButton aria-label="Create" variant="ghost" />
          <CirclePlus size={40}/>
        </Link>

        <Link to="/reels">
          <IconButton aria-label="Reels" variant="ghost" />
          <VideoIcon size={32}/>
        </Link>

        <Link to="/profile">
          <IconButton aria-label="Profile" variant="ghost" />
          <UserIcon size={32}/>
        </Link>
      </HStack>
    </Box>
  );
}
