import { Card } from "@/components/ui/card";

export default function page() {
  return (
    <>
      <header className="shadow">
        <div className="overflow-hidden">
          <div className="px-4 py-5 sm:p-6 flex items-center justify-start">
            <p className="text-base/7 font-medium">Header Content</p>
          </div>
        </div>
      </header>
      <main className="min-h-dvh container mx-auto mt-10 space-y-10">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Card className="col-span-12 p-6">
            <h1 className="text-xl/7 font-bold">Main Content</h1>
          </Card>
          {Array.from({ length: 8 }, (_, index) => (
            <Card key={index} className="col-span-3 p-5 rounded-[0.45rem]">
              <p className="text-md/7 font-bold capitalize">Some random content.</p>
              <p className="text-sm/5 tracking-wide text-gray-800 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim cumque veniam magni placeat voluptatem dolorem, similique fugit saepe. Vitae, provident? Soluta blanditiis voluptatibus maiores veniam! Ratione autem sunt laboriosam.</p>
            </Card>
          ))}
        </section>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Card className="col-span-12 p-6">
            <h1 className="text-xl/7 font-bold">Main Content</h1>
          </Card>
          {Array.from({ length: 8 }, (_, index) => (
            <Card key={index} className="col-span-3 p-5 rounded-[0.45rem]">
              <p className="text-md/7 font-bold capitalize">Some random content.</p>
              <p className="text-sm/5 tracking-wide text-gray-800 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim cumque veniam magni placeat voluptatem dolorem, similique fugit saepe. Vitae, provident? Soluta blanditiis voluptatibus maiores veniam! Ratione autem sunt laboriosam.</p>
            </Card>
          ))}
        </section>
      </main>
      <footer className="">
        <div className="overflow-hidden">
          <div className="px-4 py-5 sm:p-6 flex items-center justify-start">
            <p className="text-base/7 font-medium">Footer Content</p>
          </div>
        </div>
      </footer>
    </>
  );
}
