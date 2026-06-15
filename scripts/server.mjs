import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 4173);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8"
};

function fileForUrl(url) {
  const pathname = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const clean = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const candidate = resolve(join(root, clean));
  if (!candidate.startsWith(root)) return null;
  if (!existsSync(candidate)) return null;
  if (statSync(candidate).isDirectory()) return join(candidate, "index.html");
  return candidate;
}

createServer((req, res) => {
  const file = fileForUrl(req.url || "/") || join(root, "index.html");
  if (!existsSync(file)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  res.writeHead(200, { "content-type": types[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Tea site running at http://localhost:${port}`);
});
