import { type Config } from "drizzle-kit";

import { env } from "~/env.js";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "better-sqlite",
  dbCredentials: {
    url: "db.sqlite", // env.DATABASE_URL,
  },
  tablesFilter: ["jobs-board_*"],
} satisfies Config;
