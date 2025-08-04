"use server";

import { Post } from "@/types/posts";

export const getAllPost = async (limit?: number): Promise<Post[] | []> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    {
      cache: "force-cache",
      next: {
        tags: ["posts-collection"],
      },
    }
  );
  const data = await response.json();
  return data;
};

export const getPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "force-cache",
      next: {
        tags: ["posts-collection"],
      },
    }
  );
  const data = await response.json();
  return data;
};
