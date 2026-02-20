const { Pool } = require("pg");

let pool;

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }
    pool = new Pool({
      connectionString,
      ssl:
        process.env.DATABASE_SSL === "false"
          ? false
          : { rejectUnauthorized: false },
    });
  }
  return pool;
}

async function query(text, params) {
  const client = getPool();
  return client.query(text, params);
}

async function ensureSchema() {
  await query(`
    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      session_id TEXT UNIQUE,
      name TEXT NOT NULL,
      mistakes INTEGER NOT NULL,
      duration_ms INTEGER NOT NULL,
      score INTEGER NOT NULL,
      language TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  await query(`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS session_id TEXT;`);
  await query(`CREATE UNIQUE INDEX IF NOT EXISTS sessions_session_id_key ON sessions(session_id);`);
}

module.exports = { query, ensureSchema };
