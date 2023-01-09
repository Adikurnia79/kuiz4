import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("Hallo!");
});

server.listen(3000);

console.log("server berjalan di http://localhost:3000");