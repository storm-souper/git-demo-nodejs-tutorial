const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to Homepage');
  }
  if (req.url === '/about') {
    res.end('Who we are? Check');
  }
  res.end(
    `<h1>Oops</h1>
    <div>We can't find the page you are looking for</div>
    <a href="/">Back to Homepage</a>`
  )
});

server.listen(5000)