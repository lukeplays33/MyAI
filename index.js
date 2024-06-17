let info = require('./ai/setup.js');

const http = require("http");
const url = require("url"); // Import the URL module

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL

  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Log query parameters (if any)
  if (parsedUrl.query.message) {
    console.log("Received message:", parsedUrl.query.message);
  }

  if (parsedUrl.query.aiInfo) { // gathers info about the ai name, memory, behaviour/personallity etc and updates it for the ai to use.
    console.log("Received message:", parsedUrl.query.aiInfo);
    info.setInfo(parsedUrl.query.aiInfo);
  }

  // Send a custom response
  res.end("Hello, Node.js server!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
