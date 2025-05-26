import {
  Dialog,
  Box,
  Image,
  Stack,
  HStack,
  Text,
  CloseButton,
  Portal,
} from "@chakra-ui/react";
import type { Post } from "../../data/posts";
import { useState } from "react";

interface PostDetailModalProps {
  post: Post;
  open: boolean;
  onClose: () => void;
}

export default function PostDetailModal({
  post,
  open,
  onClose,
}: PostDetailModalProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <>
      <Dialog.Root open={open} onOpenChange={onClose} scrollBehavior="inside">
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content maxW="lg" p={4} borderRadius="lg">
              <Dialog.Header>
                <Dialog.Title>게시글 상세 보기</Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Header>
              <Dialog.Body>
                <Stack gap={4}>
                  {post.images.length === 1 ? (
                    <Box textAlign="center">
                      <Image
                        src={post.images[0]}
                        maxW="100%"
                        maxH="300px"
                        objectFit="cover"
                        borderRadius="md"
                        onClick={() => setPreviewImage(post.images[0])}
                        cursor="pointer"
                        mx="auto"
                      />
                    </Box>
                  ) : (
                    <Box overflowX="auto">
                      <HStack gap={4} minW="100%" pb={2}>
                        {post.images.map((img, idx) => (
                          <Image
                            key={idx}
                            src={img}
                            borderRadius="md"
                            maxW="300px"
                            h="300px"
                            objectFit="cover"
                            flexShrink={0}
                            onClick={() => setPreviewImage(img)}
                            cursor="pointer"
                          />
                        ))}
                      </HStack>
                    </Box>
                  )}
                  <Text whiteSpace="pre-wrap">{post.text}</Text>
                </Stack>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      {/* 이미지 원본 보기 모달 */}
      {previewImage && (
        <Dialog.Root open={true} onOpenChange={() => setPreviewImage(null)}>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content maxW="90vw" minW="auto" p={2} borderRadius="lg" alignItems={"center"}>
                <Dialog.CloseTrigger asChild>
                  <CloseButton position="absolute" top={2} right={2} />
                </Dialog.CloseTrigger>
                <Box>
                  <Image
                    src={previewImage}
                    w="auto"
                    h="auto"
                    objectFit="contain"
                    alt="preview"
                  />
                </Box>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      )}
    </>
  );
}
