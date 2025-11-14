const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name || 'World';
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          text-align: center;
        }
        input {
          padding: 10px;
          font-size: 16px;
          margin: 10px;
          border: 2px solid #4CAF50;
          border-radius: 4px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Hello, ${name}!</h1>
      <form method="GET">
        <input type="text" name="name" placeholder="Enter your name" value="${name !== 'World' ? name : ''}" />
        <button type="submit">Say Hello</button>
      </form>
    </body>
    </html>
  `;
  
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});