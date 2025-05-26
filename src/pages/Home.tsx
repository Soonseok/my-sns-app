import { Center } from "@chakra-ui/react";
import { dummyPosts, type Post } from "../data/posts";
import { useState, useEffect } from "react";
import PostDetailModal from "../components/post/PostDetailModal";
// import PostCardSkeleton from "../components/post/PostCardSkeleton";
import Header from "../components/layout/Header";
import PostList from "../components/post/PostList";

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
        <PostList
          posts={postsToRender as Post[]}
          isLoading={isLoading}
          onPostClick={(post) => setSelectedPost(post)}
        />
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
