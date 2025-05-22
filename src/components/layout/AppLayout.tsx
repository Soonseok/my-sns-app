import { Box, Flex } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"
import type { ReactNode } from "react"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" px={4} py={6}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}