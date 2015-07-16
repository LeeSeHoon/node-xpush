var xpush = require('../lib/xpush');

var config = {
  "zookeeper": {},
  "redis": {},
  "mongodb": {}
};

config.port = 8888;

var server = xpush.createSessionServer(config);


function foo(req, res, next) {
  //res.send(204);
  res.send({hello: 'XPUSH WORLD !!! ' + config.port});
  next();
}

server.put('/foo', foo);
server.get('/foo', foo);
server.del('/foo', foo);
server.post('/foo', foo);


server.on('started', function (url, port) {

  console.log(' >>>>>> SESSION SERVER is started ' + url + ':' + port);

});