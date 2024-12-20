import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/quires";

const options = { next: { revalidate: 60 } };

type PostArticle = {
  _id: string;
  slug: { current: string };
  title: string;
};

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold dark:text-white">Post index</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post: PostArticle) => (
          <li key={post._id}>
            <Link className="block p-4 hover:text-blue-500 dark:text-white" href={`/posts/${post?.slug?.current}`}>
              {post?.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/" className="dark:text-white">
        &larr; Return home
      </Link>
    </main>
  );
}
