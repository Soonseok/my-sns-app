import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minH="100vh">
      <Heading>Page Not Found</Heading>
      <Text>It seems that you're lost</Text>
      <Link to="/">
        <Button colorScheme="red" variant={"ghost"}>
          Go Home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}