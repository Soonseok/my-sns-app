export type Post = {
  id: string;
  images: string[];
  text: string;
};

export const dummyPosts: Post[] = [
  {
    id: "1",
    images: ["/images/post1-1.png", "/images/post1-2.png"],
    text: "이것은 첫 번째 게시글입니다. 여러 장의 이미지가 포함되어 있으며 긴 텍스트가 들어갑니다. 예시 텍스트가 여기에 계속 이어집니다. 더보기 버튼이 필요할 수도 있습니다.",
  },
  {
    id: "2",
    images: ["/images/NGC3324.png"],
    text: "두 번째 게시글의 내용입니다. 짧은 글이지만 전체 텍스트는 모달에서 보이게 됩니다.",
  },
  {
    id: "3",
    images: ["/images/Messier16.png", "/images/NGC3324.png"],
    text: "This two-year course in physics is presented from the point of view that you, the reader, are going to be a physicist. This is not necessarily the case of course, but that is what every professor in every subject assumes! If you are going to be a physicist, you will have a lot to study: two hundred years of the most rapidly developing field of knowledge that there is. So much knowledge, in fact, that you might think that you cannot learn all of it in four years, and truly you cannot; you will have to go to graduate school too!",
  },
  {
    id: "4",
    images: ["/images/lesserafim_hot.webp", "/images/post1-2.png"],
    text: "4번째 게시글임.",
  },
  {
    id: "5",
    images: [],
    text: "5번째 게시글임. 얘는 images가 빈 Array임.",
  },
  {
    id: "6",
    images: ["/images/apple2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "6번째 게시글임.",
  },
  {
    id: "7",
    images: ["/images/lion.png"],
    text: "7번째 게시글임.",
  },
  {
    id: "8",
    images: ["/images/nuclear_sol.png", "/images/post1-2.png"],
    text: "8번째 게시글임.",
  },
  {
    id: "9",
    images: ["/images/fukuoka.png"],
    text: "9번째 게시글임.",
  },
  {
    id: "10",
    images: ["/images/kkura.jpg"],
    text: "10번째 게시글임.",
  },
  {
    id: "11",
    images: ["/images/post1-1.png", "/images/post1-2.png"],
    text: "사진 크기\t8423 x 14589 px\n사진 용량\t152 MB",
  },
  {
    id: "12",
    images: ["/images/post1-2.png", "/images/post1-2.png"],
    text: "사진 크기\t14557 x 8418 px\n사진 용량\t140 MB",
  },
  {
    id: "13",
    images: ["/images/nuclear_sol2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "13번째 게시글임.",
  },
  {
    id: "14",
    images: ["/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "14번째 게시글임.",
  },
  {
    id: "15",
    images: ["/images/post1-1.png", "/images/post1-2.png"],
    text: "15번째 게시글임.",
  },
  {
    id: "16",
    images: ["/images/post2.png"],
    text: "16번째 게시글임.",
  },
  {
    id: "17",
    images: ["/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "17번째 게시글임.",
  },
  {
    id: "18",
    images: ["/images/post2.png"],
    text: "18번째 게시글임.",
  },
  {
    id: "19",
    images: ["/images/post1-1.png", "/images/post1-2.png"],
    text: "19번째 게시글임.",
  },
  {
    id: "20",
    images: ["/images/post2.png"],
    text: "20번째 게시글임.",
  },
  {
    id: "21",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "21번째 게시글임.",
  },
  {
    id: "22",
    images: [""],
    text: "22번째 게시글임. 얘는 images에 ' ' 하나 있음",
  },
  {
    id: "23",
    images: ["/images/post2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "23번째 게시글임.",
  },
  {
    id: "24",
    images: ["/images/post2.png"],
    text: "24번째 게시글임.",
  },
  {
    id: "25",
    images: ["/images/post2.png"],
    text: "25번째 게시글임.",
  },
  {
    id: "26",
    images: ["/images/post2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "26번째 게시글임.",
  },
  {
    id: "27",
    images: ["/images/post2.png"],
    text: "27번째 게시글임.",
  },
  {
    id: "28",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "28번째 게시글임.",
  },
  {
    id: "29",
    images: ["/images/post2.png"],
    text: "29번째 게시글임.",
  },
  {
    id: "30",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "30번째 게시글임.",
  },
  {
    id: "31",
    images: [""],
    text: "31번째 게시글임. 얘는 22번과 같음.",
  },
  {
    id: "32",
    images: ["/images/post1-1.png"],
    text: "32번째 게시글임.",
  },
  {
    id: "33",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "33번째 게시글임.",
  },
  {
    id: "34",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "34번째 게시글임.",
  },
  {
    id: "35",
    images: ["/images/post2.png"],
    text: "35번째 게시글임.",
  },
  {
    id: "36",
    images: ["/images/post1-1.png", "/images/post1-2.png"],
    text: "36번째 게시글임.",
  },
  {
    id: "37",
    images: ["/images/post1-1.png"],
    text: "37번째 게시글임.",
  },
  {
    id: "38",
    images: ["/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "38번째 게시글임.",
  },
  {
    id: "39",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "39번째 게시글임.",
  },
  {
    id: "40",
    images: ["/images/post2.png"],
    text: "40번째 게시글임.",
  },
  {
    id: "41",
    images: ["/images/post2.png"],
    text: "41번째 게시글임.",
  },
  {
    id: "42",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "42번째 게시글임.",
  },
  {
    id: "43",
    images: ["/images/post2.png"],
    text: "43번째 게시글임.",
  },
  {
    id: "44",
    images: ["/images/post2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "44번째 게시글임.",
  },
  {
    id: "45",
    images: ["/images/post1-2.png"],
    text: "45번째 게시글임.",
  },
  {
    id: "46",
    images: ["/images/post2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "46번째 게시글임.",
  },
  {
    id: "47",
    images: ["/images/post1-1.png"],
    text: "47번째 게시글임.",
  },
  {
    id: "48",
    images: ["/images/post1-1.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "48번째 게시글임.",
  },
  {
    id: "49",
    images: ["/images/post2.png"],
    text: "49번째 게시글임.",
  },
  {
    id: "50",
    images: ["/images/post2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png", "/images/post1-2.png"],
    text: "The Feynman Lectures on Physics Vol. I Ch. 1: Atoms in Motion\n1-1 Introduction \n\nThis two-year course in physics is presented from the point of view that you, the reader, are going to be a physicist. This is not necessarily the case of course, but that is what every professor in every subject assumes! If you are going to be a physicist, you will have a lot to study: two hundred years of the most rapidly developing field of knowledge that there is. So much knowledge, in fact, that you might think that you cannot learn all of it in four years, and truly you cannot; you will have to go to graduate school too!\n\n Surprisingly enough, in spite of the tremendous amount of work that has been done for all this time it is possible to condense the enormous mass of results to a large extent—that is, to find laws which summarize all our knowledge. Even so, the laws are so hard to grasp that it is unfair to you to start exploring this tremendous subject without some kind of map or outline of the relationship of one part of the subject of science to another. Following these preliminary remarks, the first three chapters will therefore outline the relation of physics to the rest of the sciences, the relations of the sciences to each other, and the meaning of science, to help us develop a “feel” for the subject.\n\n You might ask why we cannot teach physics by just giving the basic laws on page one and then showing how they work in all possible circumstances, as we do in Euclidean geometry, where we state the axioms and then make all sorts of deductions. (So, not satisfied to learn physics in four years, you want to learn it in four minutes?) We cannot do it in this way for two reasons. First, we do not yet know all the basic laws: there is an expanding frontier of ignorance. Second, the correct statement of the laws of physics involves some very unfamiliar ideas which require advanced mathematics for their description. Therefore, one needs a considerable amount of preparatory training even to learn what the words mean. No, it is not possible to do it that way. We can only do it piece by piece.\n\n Each piece, or part, of the whole of nature is always merely an approximation to the complete truth, or the complete truth so far as we know it. In fact, everything we know is only some kind of approximation, because we know that we do not know all the laws as yet. Therefore, things must be learned only to be unlearned again or, more likely, to be corrected.\n\n The principle of science, the definition, almost, is the following: The test of all knowledge is experiment. Experiment is the sole judge of scientific “truth.” But what is the source of knowledge? Where do the laws that are to be tested come from? Experiment, itself, helps to produce these laws, in the sense that it gives us hints. But also needed is imagination to create from these hints the great generalizations—to guess at the wonderful, simple, but very strange patterns beneath them all, and then to experiment to check again whether we have made the right guess. This imagining process is so difficult that there is a division of labor in physics: there are theoretical physicists who imagine, deduce, and guess at new laws, but do not experiment; and then there are experimental physicists who experiment, imagine, deduce, and guess.\n\n We said that the laws of nature are approximate: that we first find the “wrong” ones, and then we find the “right” ones. Now, how can an experiment be “wrong”? First, in a trivial way: if something is wrong with the apparatus that you did not notice. But these things are easily fixed, and checked back and forth. So without snatching at such minor things, how can the results of an experiment be wrong? Only by being inaccurate. For example, the mass of an object never seems to change: a spinning top has the same weight as a still one. So a “law” was invented: mass is constant, independent of speed. That “law” is now found to be incorrect. Mass is found to increase with velocity, but appreciable increases require velocities near that of light. A true law is: if an object moves with a speed of less than one hundred miles a second the mass is constant to within one part in a million. In some such approximate form this is a correct law. So in practice one might think that the new law makes no significant difference. Well, yes and no. For ordinary speeds we can certainly forget it and use the simple constant-mass law as a good approximation. But for high speeds we are wrong, and the higher the speed, the more wrong we are.\n\n Finally, and most interesting, philosophically we are completely wrong with the approximate law. Our entire picture of the world has to be altered even though the mass changes only by a little bit. This is a very peculiar thing about the philosophy, or the ideas, behind the laws. Even a very small effect sometimes requires profound changes in our ideas.\n\n Now, what should we teach first? Should we teach the correct but unfamiliar law with its strange and difficult conceptual ideas, for example the theory of relativity, four-dimensional space-time, and so on? Or should we first teach the simple “constant-mass” law, which is only approximate, but does not involve such difficult ideas? The first is more exciting, more wonderful, and more fun, but the second is easier to get at first, and is a first step to a real understanding of the first idea. This point arises again and again in teaching physics. At different times we shall have to resolve it in different ways, but at each stage it is worth learning what is now known, how accurate it is, how it fits into everything else, and how it may be changed when we learn more.\n\n Let us now proceed with our outline, or general map, of our understanding of science today (in particular, physics, but also of other sciences on the periphery), so that when we later concentrate on some particular point we will have some idea of the background, why that particular point is interesting, and how it fits into the big structure. So, what is our overall picture of the world?",
  },
];
