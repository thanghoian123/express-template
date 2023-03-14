import { Pool } from "pg";

export const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "test_app",
  password: "123456a@",
  port: 5432,
});