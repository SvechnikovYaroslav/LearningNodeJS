const http = require("http");
const visits = new Map();
const search = new Map();

const PORT = 8000;
const serverName = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
  const parsedURL = new URL(req.url, serverName);

  for (const paramName of parsedURL.searchParams.keys()) {
    search.set(paramName, (search.get(paramName) || 0) + 1);
  }

  const key = parsedURL.pathname;
  const count = (visits.get(key) || 0) + 1;
  visits.set(key, count);
  res.end(`Visits to ${key} #${count}
  Search params counts:
  ${[...search.entries()]
    .map(([key, value]) => `${key} => ${value}`)
    .join("\n")}

  `);
});

server.listen(PORT, () => {
  console.log(`Listening to ${serverName}`);
});
