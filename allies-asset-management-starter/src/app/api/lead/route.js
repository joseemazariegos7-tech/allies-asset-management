export async function POST(request) {
  try {
    const payload = await request.json();

    // Basic validation
    if (!payload?.name || !payload?.email) {
      return new Response("Missing required fields", { status: 400 });
    }

    // TODO: Forward to your webhook, Slack, Sheets, or PMS API.
    // Example (uncomment and set env var in Vercel):
    // await fetch(process.env.LEAD_WEBHOOK_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload)
    // });

    console.log("New lead:", payload);
    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("error", { status: 500 });
  }
}
