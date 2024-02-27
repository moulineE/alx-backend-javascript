const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const server = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.write(Buffer.from(responseText));
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = server;
