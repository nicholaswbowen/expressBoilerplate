let app = require('../main');
let debug = require('debug')('myapp:server');
let http = require('http');
let port = normalizePort(process.env.PORT || '3000');


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
