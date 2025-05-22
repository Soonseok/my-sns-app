import { Box, Input, Button, VStack, Field } from "@chakra-ui/react";
import { Toaster, toaster } from "../ui/toaster"
import { useState } from "react";

interface Props {
  onNext: (data: { username: string; password: string }) => void;
}

export default function RegisterStep1({ onNext }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameValid = /^[a-zA-Z0-9]{4,16}$/.test(username);
  const passwordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  const handleSubmit = () => {
    if (!usernameValid || !passwordValid) {
      toaster.create({
        title: "입력 오류",
        description: "아이디와 비밀번호를 다시 확인하세요.",
        type: "error",
        duration: 3000,
      });
      return;
    }

    onNext({ username, password });
  };

  return (
    <Box>
      <VStack gap={4} align="stretch">
        <Field.Root invalid={!usernameValid}>
          <Field.Label>아이디</Field.Label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="영문자/숫자 4~16자"
          />
          {!usernameValid && (
            <Field.ErrorText>
              4~16자의 영문자 또는 숫자만 사용 가능합니다.
            </Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root invalid={!passwordValid}>
          <Field.Label>비밀번호</Field.Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="영문자+숫자+특수문자 포함 8자 이상"
          />
          {!passwordValid && (
            <Field.ErrorText>
              영문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.
            </Field.ErrorText>
          )}
        </Field.Root>

        <Button colorPalette="blue" onClick={handleSubmit}>
          다음 단계로
        </Button>
      </VStack>
    </Box>
  );
}
