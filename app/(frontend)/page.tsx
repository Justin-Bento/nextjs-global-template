import Link from "next/link";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12 dark:text-white">
      <h1 className="text-4xl font-bold">Hello, Home.</h1>
      <hr />
      <Link
        href="/posts"
        className="dark:text-white dark:hover:opacity-70 hover:underline"
      >
        Posts index &rarr;
      </Link>
    </section>
  );
}
