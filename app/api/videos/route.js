import videos from "@/data/server.json";

export async function GET() {
  return new Response(JSON.stringify(videos), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
