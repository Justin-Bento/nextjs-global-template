import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/lib/quires";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const posts = await client.fetch(POST_QUERY, {}, options);
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Hello, Blog Posts.</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <Link className="block p-4 hover:text-blue-500" href={`/posts/${post?.slug?.current}`}>
              {post?.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </section>
  );
}
