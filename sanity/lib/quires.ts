import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);
