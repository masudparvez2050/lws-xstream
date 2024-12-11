import { getDictionary } from "@/app/[lang]/disctionaries";
import Link from "next/link";

export default async function NotFoundDynamic({ id, lang }) {
  const d = await getDictionary(lang);
  console.log(d);
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Main Content */}
      <main className=" mx-auto min-h-[100vh] px-4 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold tracking-tighter mb-4">{d?._404}</h1>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          {d?.page_not_found}
        </h2>
        <h2 className="text-xl md:text-4xl font-bold tracking-tighter mb-8 text-white">
          &quot;{d?.this_video_with}{" "}
          <span className="text-color-purple">&ldquo;{id}&ldquo; </span>
          {d?.was_not_found}&quot;
        </h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-[600px]">
          {d?.page_remove}
        </p>
        <button
          asChild
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 text-lg rounded"
        >
          <Link href="/">{d?.return_home}</Link>
        </button>
      </main>
    </div>
  );
}
