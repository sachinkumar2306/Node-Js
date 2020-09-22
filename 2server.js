var http = require('http');
http.createServer()
.on('request',function (request, response) {
  console.log('connecting to ' + request.url)
  response.write('Welcome to node');
  console.log('This will be printed last')
//   response.write("Let's code in Node JS");
  response.end("br"+ "hello world");
}).listen(3000);
console.log('This will be printed first')
console.log('Server running at http://127.0.0.1:3000/');