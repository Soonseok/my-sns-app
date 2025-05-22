import { Box, Circle, Flex, Text } from "@chakra-ui/react"

interface StepIndicatorProps {
  currentStep: number
  steps: string[]
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <Flex align="center" justify="center" gap={4} mb={8}>
      {steps.map((label, index) => {
        const isActive = index === currentStep
        const isCompleted = index < currentStep

        return (
          <Flex key={index} align="center">
            <Flex direction="column" align="center">
              <Circle
                size="32px"
                bg={isCompleted ? "blue.500" : isActive ? "blue.300" : "gray.300"}
                color="white"
                fontWeight="bold"
              >
                {index + 1}
              </Circle>
              <Text fontSize="sm" mt={1} textAlign="center">
                {label}
              </Text>
            </Flex>

            {/* Step Divider */}
            {index < steps.length - 1 && (
              <Box
                h="2px"
                w="40px"
                bg={index < currentStep ? "blue.300" : "gray.300"}
                mx={2}
              />
            )}
          </Flex>
        )
      })}
    </Flex>
  )
}
