import { Box, Button, VStack } from "@chakra-ui/react"
import { Toaster, toaster } from "../components/ui/toaster"
import StepIndicator from "../components/ui/StepIndicator"
import { useState } from "react"
import RegisterStep1 from "../components/auth/RegisterStep1"
import RegisterStep2 from "../components/auth/RegisterStep2"
import RegisterStep3 from "../components/auth/RegisterStep3"
import { useNavigate, Link } from "react-router-dom"

export default function Register() {
  const [activeStep, setActiveStep] = useState(0)
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState<{
    username: string
    password: string
  } | null>(null)

  const [profile, setProfile] = useState<{
    nickname: string
    profileImage: string | null
  } | null>(null)

  const handleStep1Next = (data: { username: string; password: string }) => {
    setCredentials(data)
    setActiveStep(1)
  }

  const handleStep2Next = (data: { nickname: string; profileImage: string | null }) => {
    setProfile(data)
    setActiveStep(2)
  }

  const handleFinalSubmit = (extra: {
    birthday?: string
    bio?: string
    interests?: string[]
  }) => {
    if (!credentials || !profile) return

    const user = {
      ...credentials,
      ...profile,
      ...extra,
    }

    const existing = JSON.parse(localStorage.getItem("users") || "[]")
    const updated = [...existing, user]
    localStorage.setItem("users", JSON.stringify(updated))

    toaster.create({
      title: "회원가입 완료",
      description: `${profile.nickname}님 환영합니다.`,
      type: "success",
      duration: 5000,
    })

    // 로그인 페이지로 이동 유도
    setActiveStep(3)
  }

  const stepLabels = ["계정 정보", "프로필 설정", "추가 정보"]

  return (
    <Box>
      <VStack gap={4} align="stretch">
        <Box maxW="lg" mx="auto" mt={10}>
          {activeStep < 3 && (
            <>
              <StepIndicator currentStep={activeStep} steps={stepLabels} />
              <Box mt={8}>
                {activeStep === 0 && <RegisterStep1 onNext={handleStep1Next} />}
                {activeStep === 1 && <RegisterStep2 onNext={handleStep2Next} />}
                {activeStep === 2 && <RegisterStep3 onSubmit={handleFinalSubmit} />}
              </Box>
            </>
          )}

          {activeStep === 3 && (
            <VStack gap={6} mt={12}>
              <Box textAlign="center" fontSize="lg">
                🎉 회원가입이 완료되었습니다.
              </Box>
              <Link to="/">
                <Button colorScheme="blue" size="md">
                  로그인 페이지로 이동 →
                </Button>
              </Link>
            </VStack>
          )}
        </Box>
      </VStack>
    </Box>
  )
}
