import Link from "next/link";

export default function NotFoundStatic() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Main Content */}
      <main className=" mx-auto min-h-[100vh] px-4 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold tracking-tighter mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          PAGE NOT FOUND
        </h2>
        
        <p className="text-zinc-400 text-lg mb-8 max-w-[600px]">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          asChild
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 text-lg rounded"
        >
          <Link href="/">Return Home</Link>
        </button>
      </main>
    </div>
  );
}
