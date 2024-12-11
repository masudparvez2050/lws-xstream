import { getVideos } from "@/data/data";
import Image from "next/image";
// import videos from "@/data/client/videos.json";
import Link from "next/link";

export default async function Videos({ params: { lang } }) {
  const videos = await getVideos("client");
  return (
    <>
      {" "}
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos?.map((video) => (
            <Link key={video?.videoId} href={`/${lang}/videos/${video.videoId}`}>
              <div className="rounded-lg overflow-hidden bg-color-gray hover:scale-105 transition-all duration-300">
                <Image
                  src={video?.thumbnail}
                  alt={video?.title}
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover hover:scale-105 transition-all duration-500"
                />
                <div className="p-2">
                  <p className="font-semibold">{video?.title}</p>
                  <p className="text-sm text-gray-400">{video?.channelTitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
