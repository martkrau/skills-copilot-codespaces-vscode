// Create web server
// 1. Create a web server object with http module
// 2. Create a server with http.createServer() method
// 3. Listen to server with port 8080
// 4. Create a response header with writeHead() method
// 5. Write a response to the client with write() method
// 6. End the response with end() method
// 7. Save the code in comments.js
// 8. Run the server with node comments.js
// 9. Open browser and type http://localhost:8080
// 10. To stop the server press Ctrl + C

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); // 200 means OK
  res.write(req.url); // write a response to the client
  res.end(); // end the response
}).listen(8080); // the server object listens on port 8080