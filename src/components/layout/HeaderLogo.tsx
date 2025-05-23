import { Center, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useColorModeValue } from "../ui/color-mode"

export const HeaderLogo = () => {
  const logoSrc = useColorModeValue("/images/earth_black.png", "/images/earth_white.png")

  return (
    <Center mt={6} mb={4}>
      <Link to="/">
        <Image
          src={logoSrc}
          height="80px"
          objectFit="contain"
        />
      </Link>
    </Center>
  )
}
