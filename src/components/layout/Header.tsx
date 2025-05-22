import { Flex, Text, Spacer, Box } from "@chakra-ui/react"
import LogoutButton from "../auth/LogoutButton"

export default function Header() {
  return (
    <Flex
      as="header"
      px={4}
      py={3}
      bg="gray.100"
      borderBottom="1px solid"
      borderColor="gray.200"
      align="center"
    >
      <Text fontWeight="bold" fontSize="xl">
        SNS 연습앱
      </Text>
      <Spacer />
      <Box>
        <LogoutButton />
      </Box>
    </Flex>
  )
}
