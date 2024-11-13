import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/quires";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type PostIndexProps = { params: { slug: string } };

const options = { next: { revalidate: 60 } };

export default async function Page({ params }: PostIndexProps) {
  const post = await client.fetch(POST_QUERY, params, options);
  if (!post) {
    notFound();
  }
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {post?.mainImage ? (
        <div className="relative w-full aspect-video object-fit">
          <Image
            fill
            src={urlFor(post.mainImage).quality(80).auto("format").url()}
            alt={post?.mainImage?.alt || ""}
          />
        </div>
      ) : null}
      <h1 className="text-4xl font-bold text-balance dark:text-white">
        {post?.title}
      </h1>
      <hr />
      <Link href="/posts" className="dark:text-white">
        &larr; Return to index
      </Link>
    </main>
  );
}
