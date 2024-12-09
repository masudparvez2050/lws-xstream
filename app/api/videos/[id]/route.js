import videos from "@/data/server.json";

// Get video controller
export async function GET(request, { params }) {
  const { id } = params;

  const video = videos.find((video) => video.videoId === id);

  if (video) {
    return new Response(JSON.stringify(video), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ error: "Video not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// Update video controller
export async function PATCH(request, { params }) {
  const { id } = params;
  console.log(id);

  const requestBody = await request.json();

  console.log(requestBody);

  // Ensure only 'title' or 'description' fields are updated
  if (
    Object.keys(requestBody).some(
      (key) => key !== "title" && key !== "description"
    )
  ) {
    return new Response(
      JSON.stringify({
        error: "Invalid fields. Only 'title' or 'description' can be updated.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Find the video by ID
  const videoIndex = videos.findIndex((video) => video.videoId === id);

  // If video is not found, return an error
  if (videoIndex === -1) {
    return new Response(JSON.stringify({ error: "Video not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Update the video data
  const video = videos[videoIndex];

  // Update title or description based on the request body
  if (requestBody.title) {
    video.title = requestBody.title;
  }
  if (requestBody.description) {
    video.description = requestBody.description;
  }

  // Return the updated video with a success message
  return new Response(
    JSON.stringify({ ...video, message: "Video updated successfully" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

// Delete video controller
export async function DELETE(request, { params }) {
  const { id } = params;

  const videoIndex = videos.findIndex((video) => video.videoId === id);

  if (videoIndex === -1) {
    return new Response(JSON.stringify({ error: "Video not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const deletedVideo = videos.splice(videoIndex, 1);

  const responsePayload = {
    ...deletedVideo,
    message: "Item deleted successfully",
  };

  return new Response(JSON.stringify(responsePayload), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
