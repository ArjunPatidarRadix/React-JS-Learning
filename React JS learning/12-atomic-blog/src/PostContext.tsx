import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

export interface IPosts {
  title: string;
  body: string;
}

export type IContextType = {
  posts: IPosts[];
  onClearPosts: () => void;
  onAddPost: (post: IPosts) => void;
  searchQuery: string;
  setSearchQuery: any;
};

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const PostContext = createContext<IContextType | null>(null);

function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<IPosts[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  console.log("posts:: ", posts);

  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: IPosts) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext) as IContextType;
  if (context === undefined)
    throw new Error("PostContext is used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
