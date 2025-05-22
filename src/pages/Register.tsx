import {
  Box,
  Input,
  VStack,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Avatar,
  Button,
  Field,
  Fieldset,
} from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLogo } from "../components/layout/HeaderLogo"


export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [birthday, setBirthday] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const usernameValid = /^[a-zA-Z0-9]{4,16}$/.test(username);
  const passwordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  const nicknameValid = nickname.trim().length >= 2;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!usernameValid || !passwordValid || !nicknameValid) {
      toaster.create({
        title: "입력 오류",
        description: "필수 항목을 확인해 주세요.",
        type: "error",
        duration: 3000,
      });
      return;
    }

    const newUser = {
      username,
      password,
      nickname,
      profileImage,
      birthday: birthday || undefined,
      bio: bio || undefined,
      interests: interests.length ? interests : undefined,
    };

    const existing = JSON.parse(localStorage.getItem("users") || "[]");
    localStorage.setItem("users", JSON.stringify([...existing, newUser]));

    toaster.create({
      title: "회원가입 완료",
      description: `${nickname}님 환영합니다.`,
      type: "success",
      duration: 4000,
    });

    navigate("/");
  };

  return (
    <Box maxW="lg" mx="auto" mt={10} px={4}>
      <VStack gap={6} align="stretch">
      <HeaderLogo />
        {/* 아이디 / 비밀번호 */}
        <Field.Root invalid={!usernameValid}>
          <Field.Label>아이디</Field.Label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="영문/숫자 4~16자"
          />
          {!usernameValid && (
            <Field.ErrorText>유효한 아이디를 입력하세요.</Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root invalid={!passwordValid}>
          <Field.Label>비밀번호</Field.Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="영문+숫자+특수문자 포함 8자 이상"
          />
          {!passwordValid && (
            <Field.ErrorText>유효한 비밀번호를 입력하세요.</Field.ErrorText>
          )}
        </Field.Root>

        {/* 닉네임 / 프로필 */}
        <Field.Root invalid={!nicknameValid}>
          <Field.Label>닉네임</Field.Label>
          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요 (2자 이상)"
          />
          {!nicknameValid && (
            <Field.ErrorText>닉네임은 2자 이상이어야 합니다.</Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root>
          <Field.Label>프로필 사진 (선택)</Field.Label>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {profileImage && (
            <Avatar.Root size="xl" mt={4}>
              <Avatar.Image src={profileImage} />
              <Avatar.Fallback>{nickname}</Avatar.Fallback>
            </Avatar.Root>
          )}
        </Field.Root>

        {/* 추가 정보 */}
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
            placeholder="자기소개를 입력해 주세요"
          />
        </Field.Root>

        <Fieldset.Root>
          <CheckboxGroup
            value={interests}
            onValueChange={setInterests}
            name="interests"
          >
            <Fieldset.Legend fontSize="sm" mb="2">
              관심사 (선택)
            </Fieldset.Legend>
            <Fieldset.Content>
              <VStack align="start">
                {[
                  { value: "pysics", label: "물리학" },
                  { value: "art", label: "예술" },
                  { value: "music", label: "음악" },
                  { value: "kpop", label: "K-POP" },
                  { value: "esports", label: "e스포츠" },
                ].map(({ value, label }) => (
                  <Checkbox.Root key={value} value={value}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{label}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </VStack>
            </Fieldset.Content>
          </CheckboxGroup>
        </Fieldset.Root>

        {/* 제출 */}
        <Button colorPalette="blue" size="lg" onClick={handleSubmit}>
          회원가입
        </Button>
      </VStack>
    </Box>
  );
}
