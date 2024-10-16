import { Card } from "@/components/ui/card";
import React from "react";

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
      <main className="min-h-dvh">
        <section className="">
          <Card>
            <h1 className="text-base/7 font-medium">Main Content</h1>
          </Card>
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
