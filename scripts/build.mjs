import { cpSync, mkdirSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const output = join(root, "public");

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const item of ["assets", "src", "index.html", "vercel.json"]) {
  cpSync(join(root, item), join(output, item), { recursive: true });
}

console.log("Static site built to public/");
