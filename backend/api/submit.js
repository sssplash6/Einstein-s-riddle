const { query, ensureSchema } = require("./_db");

const PENALTY_MS = Number(process.env.MISTAKE_PENALTY_MS || 60000);

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

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end("Method Not Allowed");
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const name = String(body.name || "").trim().slice(0, 24);
    const mistakes = Number(body.mistakes);
    const durationMs = Number(body.durationMs);
    const language = String(body.language || "en").slice(0, 8);

    if (!name || name.length < 2) {
      res.statusCode = 400;
      res.end("Name required");
      return;
    }
    if (!Number.isFinite(mistakes) || mistakes < 0) {
      res.statusCode = 400;
      res.end("Invalid mistakes");
      return;
    }
    if (!Number.isFinite(durationMs) || durationMs <= 0) {
      res.statusCode = 400;
      res.end("Invalid duration");
      return;
    }

    await ensureSchema();

    const score = Math.round(durationMs + mistakes * PENALTY_MS);

    const insert = await query(
      "INSERT INTO sessions (name, mistakes, duration_ms, score, language) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      [name, mistakes, Math.round(durationMs), score, language]
    );

    const totals = await query(
      "SELECT COUNT(*)::int AS total, AVG(mistakes) AS avg_mistakes, AVG(duration_ms) AS avg_duration_ms FROM sessions"
    );

    const better = await query(
      "SELECT COUNT(*)::int AS better FROM sessions WHERE score < $1",
      [score]
    );

    const total = totals.rows[0]?.total || 0;
    const avgMistakes = totals.rows[0]?.avg_mistakes || 0;
    const avgDurationMs = totals.rows[0]?.avg_duration_ms || 0;
    const rank = (better.rows[0]?.better || 0) + 1;
    const percentile = total === 0 ? 0 : (1 - (rank - 1) / total) * 100;

    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        id: insert.rows[0].id,
        score,
        rank,
        percentile,
        avgMistakes,
        avgDurationMs,
        totalPlayers: total,
      })
    );
  } catch (error) {
    res.statusCode = 500;
    res.end("Server error");
  }
};
