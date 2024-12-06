const videos = {
  client: () => import("@/data/client.json").then((module) => module.default),
  server: () => import("@/data/server.json").then((module) => module.default),
};

export const getVideos = async (type) => videos[type]();
