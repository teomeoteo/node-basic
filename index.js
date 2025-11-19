const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer(function (req, res) {

  let rootPath = './html/';

  res.writeHead(200, {'Content-Type': 'text/html'});

  switch(req.url) {
    case '/':
      rootPath += 'index.html';
      break;
    case '/about':
      rootPath += 'about.html';
      break;
    case '/contact-us':
      rootPath += 'contact-us.html'
      break;
    default:
      res.statusCode = 404;
      res.end('<h1>404 Page not found</h1>');
      return;
  }

  fs.readFile(rootPath, (err, data) => {
    if (err) {
      console.log('Page not found');
      res.statusCode = 404;
      res.end('<h1>404 Page not found</h1>');
    }
    else {
      res.end(data);
    }
  });

});

server.listen(port, function (err) {
  if (err) {
    console.log('Something went wrong', err);
  } else {
    console.log('Server listening on port: ' + port);
  }
});


