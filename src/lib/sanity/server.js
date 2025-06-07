"use server";
import { cache } from "react";
import { client } from "@/lib/sanity/client";
import {
  CATEGORIES_QUERY,
  CATEGORY,
  POSTS_IN_CATEGORY,
  PROJECT_QUERY,
  RECENT_POSTS,
  SINGLE_POST,
} from "@/lib/sanity/queries";

export const getProject = cache(async (slug) => {
  return await client.fetch(PROJECT_QUERY, { slug });
});

export const getCategories = cache(async () => {
  return await client.fetch(CATEGORIES_QUERY);
});

export const getRecentPosts = cache(async () => {
  return await client.fetch(RECENT_POSTS);
});
export const getSinglePost = cache(async (slug) => {
  return await client.fetch(SINGLE_POST, { slug });
});
export const getPostsInCategory = cache(async (category) => {
  return await client.fetch(POSTS_IN_CATEGORY, { category });
});
export const getCategory = cache(async (category) => {
  return await client.fetch(CATEGORY, { category });
});
