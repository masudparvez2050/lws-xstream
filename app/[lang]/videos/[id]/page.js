// import videos from "@/data/client/videos.json";
import { getVideos } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params: { id } }) {
  const videos = await getVideos("client");
  const video = videos.find((video) => video.videoId === id);
  const randomVideo = [...videos].sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <main className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-3/4">
        <div className="relative">
          <iframe
            src={video?.videoLink}
            title="YouTube video player"
            frameBorder={0}
            className="w-full aspect-video h-[500px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center space-x-4">
              <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                LIVE
              </div>
              <span className="text-sm">46:02</span>
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                Donate
              </button>
            </div>
          </div> */}
        </div>
        <h1 className="text-2xl font-bold mt-4">{video?.title}</h1>
        <details>
          <summary>Description</summary>
          <p>{video?.description}</p>
        </details>
        <div className="flex items-center space-x-4 mt-2">
          {/* যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন */}
          <Image
            src="/assets/avatar.png"
            alt="Avatar"
            width={500}
            height={500}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{video?.channelTitle}</p>
          </div>
          <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
            Subscribe
          </button>
        </div>
      </div>
      <div className="lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">You may like</h2>
        <div className="space-y-2">
          {randomVideo.map((video) => (
            <Link
              className="flex space-y-2"
              key={video?.videoId}
              href={`/videos/${video?.videoId}`}
            >
              <div className="flex items-start space-x-4">
                <Image
                  src={video?.thumbnail}
                  alt={video?.title}
                  width={150}
                  height={100}
                  className="w-38 h-auto rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">{video?.title}</h3>
                  <p className="text-sm text-gray-400">{video.channelTitle}</p>
                  {/* <p className="text-sm text-gray-400">26,389M</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
