import { Box, Skeleton, SkeletonText } from "@chakra-ui/react"

export default function PostCardSkeleton() {
  return (
    <Box
      w="250px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Skeleton height="200px" />
      <Box p={4}>
        <SkeletonText noOfLines={2} gap={2} />
      </Box>
    </Box>
  )
}