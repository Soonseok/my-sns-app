import { Wrap, WrapItem, Box, Image, Text } from "@chakra-ui/react";
import { type Post } from "../../data/posts";
import PostCardSkeleton from "./PostCardSkeleton";

type Props = {
  posts: Post[];
  isLoading: boolean;
  onPostClick: (post: Post) => void;
};

export default function PostList({ posts, isLoading, onPostClick }: Props) {
  const postsToRender = isLoading ? Array.from({ length: 6 }) : posts;

  return (
    <Wrap gap={4} justify={{ base: "center", md: "flex-start" }} px={4} py={6}>
      {postsToRender.map((post, idx) => {
        const typedPost = post as Post;

        return (
          <WrapItem key={isLoading ? idx : typedPost.id}>
            {isLoading ? (
              <PostCardSkeleton />
            ) : (
              <Box
                w="225px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                cursor="pointer"
                onClick={() => onPostClick(typedPost)}
              >
                {typedPost.images.length > 0 && typedPost.images[0] !== "" ? (
                  <Box position="relative">
                    <Image
                      src={typedPost.images[0]}
                      h="200px"
                      w="100%"
                      objectFit="cover"
                      borderTopRadius="lg"
                    />
                    {typedPost.images.length > 1 && (
                      <Box
                        position="absolute"
                        top="2"
                        right="2"
                        bg="blackAlpha.700"
                        color="white"
                        fontSize="xs"
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {typedPost.images.length}장
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Box
                    h="200px"
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="black"
                    borderTopRadius="lg"
                    border="1px solid gray"
                  >
                    <Text fontSize="xl" color="gray.500" fontWeight="medium">
                      이미지 없음
                    </Text>
                  </Box>
                )}

                <Box p={4}>
                  <Text fontSize="sm">
                    {typedPost.text.length > 60
                      ? typedPost.text.slice(0, 50) + "..."
                      : typedPost.text}
                  </Text>
                </Box>
              </Box>
            )}
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
