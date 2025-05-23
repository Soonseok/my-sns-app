export type Post = {
  id: string
  images: string[]
  text: string
}

export const dummyPosts: Post[] = [
  {
    id: "1",
    images: [
      "/images/post1-1.png",
      "/images/post1-2.png",
    ],
    text: "이것은 첫 번째 게시글입니다. 여러 장의 이미지가 포함되어 있으며 긴 텍스트가 들어갑니다. 예시 텍스트가 여기에 계속 이어집니다. 더보기 버튼이 필요할 수도 있습니다.",
  },
  {
    id: "2",
    images: ["/images/post2.png"],
    text: "두 번째 게시글의 내용입니다. 짧은 글이지만 전체 텍스트는 모달에서 보이게 됩니다.",
  },
  {
    id: "3",
    images: ["/images/post1-2.png"],
    text: "세 번째 게시글임.",
  },
]
