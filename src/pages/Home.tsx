import { useTheme } from "next-themes"
import { Button } from "@chakra-ui/react"

export default function Home() {
  const { setTheme, theme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme ({theme})
    </Button>
  )
}