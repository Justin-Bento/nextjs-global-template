import React from "react";

export default function page() {
  return (
    <>
      <header className="">
        <div className="overflow-hidden">
          <div className="px-4 py-5 sm:p-6 flex items-center justify-start">
            <p className="text-base/7 font-medium">Header Content</p>
          </div>
        </div>
      </header>
      <main className="min-h-dvh flex items-center justify-start bg-blue-500">
        <div className="px-4 py-5 sm:p-6 flex items-center justify-start">
          <h1 className="text-base/7 font-medium">Main Content</h1>
        </div>
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
