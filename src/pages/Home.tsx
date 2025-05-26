import { Box, Wrap, WrapItem, Text, Image, Center } from "@chakra-ui/react";
import { dummyPosts, type Post } from "../data/posts";
import { useState, useEffect } from "react";
import PostDetailModal from "../components/post/PostDetailModal";
import PostCardSkeleton from "../components/post/PostCardSkeleton";
import Header from "../components/layout/Header";

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const postsToRender = isLoading ? Array.from({ length: 6 }) : dummyPosts;

  return (
    <>
      <Header />
      <Center width="100vw">
        <Wrap
          gap={4}
          justify={{ base: "center", md: "flex-start" }}
          px={4}
          py={6}
        >
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
                    onClick={() => setSelectedPost(typedPost)}
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
      </Center>

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
