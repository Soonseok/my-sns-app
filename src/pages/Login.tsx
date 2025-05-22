import { Box, Input, Button, VStack, Field } from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.username === username && u.password === password
    );

    if (!user) {
      toaster.create({
        title: "로그인 실패",
        description: "아이디 또는 비밀번호가 올바르지 않습니다.",
        type: "error",
        duration: 5000,
      });
      return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));

    toaster.create({
        title: "로그인 성공",
        description: `${user.nickname}님 환영합니다.`,
        type: "success",
        duration: 5000,
    })
    navigate("/home")
  };

  return(
    <Box maxW={"md"} mx={"auto"} mt={20}>
        <VStack gap={4}>
            <Field.Root>
                <Field.Label>아이디</Field.Label>
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                />
            </Field.Root>
            <Field.Root>
                <Field.Label>비밀번호</Field.Label>
                <Input
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호 입력"
                />
            </Field.Root>
            <Button colorPalette={"blue"} w={"full"} onClick={handleLogin}>
                로그인
            </Button>
            {/* <Button colorPalette={"blue.500"} w={"full"} onClick={}>
                회원가입
            </Button> */}
        </VStack>
    </Box>
  )
}
