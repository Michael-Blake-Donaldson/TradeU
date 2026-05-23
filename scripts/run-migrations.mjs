import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const migrationsDir = path.join(repoRoot, "supabase", "migrations");

function readEnvFile(envPath) {
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    if (!line || line.startsWith("#")) {
      continue;
    }
    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) {
      continue;
    }
    const key = line.slice(0, eqIndex).trim();
    const value = line.slice(eqIndex + 1).trim();
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function getMigrationFiles({ seedOnly }) {
  const files = fs
    .readdirSync(migrationsDir)
    .filter((name) => name.endsWith(".sql"))
    .sort((a, b) => a.localeCompare(b));

  if (seedOnly) {
    return files.filter((name) => /seed/i.test(name));
  }

  return files;
}

async function run() {
  readEnvFile(path.join(repoRoot, ".env.local"));

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL is missing. Add it to .env.local and retry.");
    process.exit(1);
  }

  const seedOnly = process.argv.includes("--seed");
  const files = getMigrationFiles({ seedOnly });
  if (files.length === 0) {
    console.log(seedOnly ? "No seed migrations found." : "No migrations found.");
    return;
  }

  const sql = postgres(databaseUrl, { ssl: "require", max: 1 });

  try {
    for (const file of files) {
      const fullPath = path.join(migrationsDir, file);
      const migrationSql = fs.readFileSync(fullPath, "utf8");
      console.log(`Applying ${file}...`);
      await sql.unsafe(migrationSql);
      console.log(`Applied ${file}`);
    }
  } finally {
    await sql.end();
  }
}

run().catch((error) => {
  console.error("Migration run failed.");
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
