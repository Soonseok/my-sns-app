import { Button } from "@chakra-ui/react"
import { Toaster, toaster } from "../ui/toaster"
import { useNavigate } from "react-router-dom"

export default function LogoutButton() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("currentUser")

    toaster.create({
      title: "로그아웃 완료",
      description: "로그인 화면으로 이동합니다.",
      type: "info",
      duration: 3000,
    })

    navigate("/")
  }

  return (
    <Button
      variant="outline"
      colorPalette="red"
      size="sm"
      onClick={handleLogout}
    >
      로그아웃
    </Button>
  )
}
