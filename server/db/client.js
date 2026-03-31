import pg from "pg";
const url =
  process.env.DATABASE_URL ||
  "postgres://localhost:5432/greetings_evxu";
const db = new pg.Client(url);
export default db;
