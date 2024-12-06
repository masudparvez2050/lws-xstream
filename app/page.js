import { getVideos } from "@/data/data";
import Image from "next/image";
// import videos from "@/data/client/videos.json";
import Link from "next/link";

export default async function Home() {
  const videos = await getVideos("client");
  return (
    <>
      {" "}
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            PLAY, COMPETE,
            <br />
            FOLLOW POPULAR
            <br />
            STREAMERS
          </h1>
          <p className="text-gray-400 mb-8">
            The best streamers gather here to have a good time, be among us,
            join us!
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/EE-4GvjKcfs"
              title="YouTube video player"
              frameBorder={0}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
              <div className="text-right">
                <span className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                  COMING SOON
                </span>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">04:03</div>
                <p className="text-sm">Broadcast starts in</p>
              </div>
            </div> */}
          </div>
          <p className="mt-2 text-sm text-gray-400">
            {`God of War Ragnar\u00f6k - Official Launch Trailer`}
          </p>
        </div>
      </main>
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Streams of the day</h2>
          <a
            href="#"
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos?.map((video) => (
            <Link key={video?.videoId} href={`/videos/${video.videoId}`}>
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
