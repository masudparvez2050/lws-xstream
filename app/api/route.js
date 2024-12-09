export async function GET() {
  return new Response(JSON.stringify({message :"Welcome to LWS Xstream Server....."}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
