import { Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Center mt={6} mb={4}>
      <Link to="/">
        <Image
          src="https://le-sserafim.com/res/logo_light.svg"
          height="80px"
          objectFit="contain"
        />
      </Link>
    </Center>
  )
}