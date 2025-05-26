import { Box, Input, Button, VStack, Field } from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { HeaderLogo } from "../components/layout/HeaderLogo";

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
      duration: 3000,
    });
    navigate("/home");
  };

  return (
    <Box maxW={"md"} mx={"auto"} mt={20}>
      <HeaderLogo />
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
        <Box textAlign="center" mt={4}>
          <Text fontSize="sm">
            아직 계정이 없으신가요?{" "}
            <Link to="/register">
              <Button variant={"ghost"} colorPalette="blue" size="sm">
                회원가입
              </Button>
            </Link>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
