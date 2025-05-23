import { Box, Wrap, WrapItem, Text, Image } from "@chakra-ui/react";
import { dummyPosts, type Post } from "../data/posts";
import { useState, useEffect } from "react";
import PostDetailModal from "../components/post/PostDetailModal";
import PostCardSkeleton from "../components/post/PostCardSkeleton";

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // useEffect부분은 지금 무조건 스켈레톤을 불러옴.
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Wrap
        gap={4}
        justify={{ base: "center", md: "flex-start" }}
        px={4}
        py={6}
      >
        {(isLoading ? Array.from({ length: 6 }) : dummyPosts).map(
          (post, idx) => (
            <WrapItem key={post?.id ?? idx}>
              {isLoading ? (
                <PostCardSkeleton />
              ) : (
                <Box
                  w="250px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  cursor="pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* 이미지 + 여러 장 표시 */}
                  <Box position="relative">
                    <Image
                      src={post.images[0]}
                      h="200px"
                      w="100%"
                      objectFit="cover"
                      borderTopRadius="lg"
                    />
                    {/* 여러 장 표시 */}
                    {post.images.length >= 1 && (
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
                        {post.images.length}장
                      </Box>
                    )}
                  </Box>
                  {/* 게시글 텍스트 일부 출력 */}
                  <Box p={4}>
                    <Text fontSize="sm">
                      {post.text.length > 60
                        ? post.text.slice(0, 60) + "..."
                        : post.text}
                    </Text>
                  </Box>
                </Box>
              )}
            </WrapItem>
          )
        )}
      </Wrap>

      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          open={true}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}
