import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("DATABASE_URL, ensure the database is provisioned");
  } else {
    // In development we allow running without a database (dev-only fallback)
    // so tooling that imports this file doesn't crash when DATABASE_URL
    // is intentionally missing.
    // Note: migrations and production builds still require DATABASE_URL.
    // eslint-disable-next-line no-console
    console.warn("drizzle: DATABASE_URL not set; skipping DB tooling in development");
  }
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
