#!/usr/bin/env node
/**
 * Localise the generated imagery.
 *
 * Downloads every remote frame in src/content/imagery.json into public/images
 * and rewrites its `src` to the local path. Idempotent: entries already local
 * are skipped, so it is safe to re-run after adding a frame.
 *
 * Run this before launch. Serving a generation CDN in production means the
 * imagery can disappear from under the site.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const manifestPath = path.join(root, "src/content/imagery.json");
const outDir = path.join(root, "public/images");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
await mkdir(outDir, { recursive: true });

let downloaded = 0;
let skipped = 0;

for (const [id, slot] of Object.entries(manifest)) {
  if (!slot.src.startsWith("http")) {
    skipped += 1;
    continue;
  }

  const ext = path.extname(new URL(slot.src).pathname) || ".png";
  const file = path.join(outDir, `${id}${ext}`);

  if (!existsSync(file)) {
    const res = await fetch(slot.src);
    if (!res.ok) {
      console.error(`✗ ${id}: ${res.status} ${res.statusText}`);
      process.exitCode = 1;
      continue;
    }
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    downloaded += 1;
  }

  slot.src = `/images/${id}${ext}`;
  console.log(`✓ ${id} → ${slot.src}`);
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\n${downloaded} downloaded, ${skipped} already local.`);
