import {
  Box,
  Input,
  Avatar,
  VStack,
  Button,
  Field,
} from "@chakra-ui/react";
import { toaster } from "../ui/toaster"
import { useState } from "react";

interface Props {
  onNext: (data: { nickname: string; profileImage: string | null }) => void;
}

export default function RegisterStep2({ onNext }: Props) {
  const [nickname, setNickname] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const isValid = nickname.trim().length >= 2;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = () => {
    if (!isValid) {
      toaster.create({
        title: "닉네임 오류",
        description: "닉네임은 2자 이상이어야 합니다.",
        type: "error",
        duration: 5000,
      });
      return;
    }
    onNext({ nickname, profileImage: imagePreview });
  };

  return (
    <Box>
      <VStack gap={4} align={"stretch"}>
        <Field.Root invalid={!isValid}>
          <Field.Label>닉네임</Field.Label>
          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요. (2글자 이상)"
          />
          {!isValid && (
            <Field.ErrorText>닉네임은 2자 이상이어야 합니다.</Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root>
          <Field.Label>프로필 사진 (선택)</Field.Label>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <Avatar.Root size="xl" mt={4} alignSelf="center">
              <Avatar.Image src={imagePreview} />
              <Avatar.Fallback>닉네임</Avatar.Fallback>
            </Avatar.Root>
          )}
        </Field.Root>

        <Button colorPalette={"blue"} onClick={handleSubmit}>
          다음 &rarr;
        </Button>
      </VStack>
    </Box>
  );
}
