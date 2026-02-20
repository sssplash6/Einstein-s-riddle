const { query, ensureSchema } = require("./_db");

function setCors(res) {
  const origin = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async function handler(req, res) {
  setCors(res);
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end("Method Not Allowed");
    return;
  }

  try {
    await ensureSchema();
    const url = new URL(req.url, "http://localhost");
    const limit = Math.min(Number(url.searchParams.get("limit") || 20), 100);

    const result = await query(
      `
      SELECT
        name,
        mistakes,
        duration_ms AS "durationMs",
        score,
        ROW_NUMBER() OVER (ORDER BY score ASC, duration_ms ASC, created_at ASC) AS rank
      FROM sessions
      ORDER BY score ASC, duration_ms ASC, created_at ASC
      LIMIT $1
      `,
      [limit]
    );

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(result.rows));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "Server error",
        detail: process.env.DEBUG_ERRORS === "true" ? error.message : undefined,
      })
    );
  }
};
