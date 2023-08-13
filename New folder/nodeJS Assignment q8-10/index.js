const http = require('http');

const port = 3000;

const message = 'I Am Happy To Learn Full Stack Web Development From PW Skills!';


//The server.on('request') event handler will be called whenever a client makes a request to the server. The event handler will write a 200 OK response to the client, with the content type set to text/plain.
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
});

// The server.listen() method will start the HTTP server. The server will listen on port 3000 and will be available to clients
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


