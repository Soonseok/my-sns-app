import {
  Box,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  VStack,
  Button,
  Field,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSubmit: (data: {
    birthday?: string;
    bio?: string;
    interests?: string[];
  }) => void;
}

export default function RegisterStep3({ onSubmit }: Props) {
  const [birthday, setBirthday] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const handleSubmit = () => {
    onSubmit({
      birthday: birthday || undefined,
      bio: bio || undefined,
      interests: interests.length ? interests : undefined,
    });
  };

  return (
    <Box>
      <VStack gap={4} align="stretch">
        <Field.Root>
          <Field.Label>생년월일 (선택)</Field.Label>
          <Input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>자기소개 (선택)</Field.Label>
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="간단한 자기소개를 입력하세요"
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>관심사 (선택)</Field.Label>
          <CheckboxGroup
            value={interests}
            onChange={((values: string[]) => setInterests(values)) as any}
          >
            <VStack align="start">
              <Checkbox.Root value="physics">물리학</Checkbox.Root>
              <Checkbox.Root value="art">예술</Checkbox.Root>
              <Checkbox.Root value="game">게임</Checkbox.Root>
              <Checkbox.Root value="kpop">K-POP</Checkbox.Root>
              <Checkbox.Root value="sports">스포츠</Checkbox.Root>
            </VStack>
          </CheckboxGroup>
        </Field.Root>

        <Button colorPalette="blue" onClick={handleSubmit}>
          회원가입 완료
        </Button>
      </VStack>
    </Box>
  );
}
