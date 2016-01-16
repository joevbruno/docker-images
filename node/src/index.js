var express = require('express'),
    http = require('http');

var app = express();

//console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

// APPROACH 1: Using environment variables created by Docker
// var client = redis.createClient(
//  process.env.REDIS_PORT_6379_TCP_PORT,
//    process.env.REDIS_PORT_6379_TCP_ADDR
// );

// APPROACH 2: Using host entries created by Docker in /etc/hosts (RECOMMENDED)
//var client = redis.createClient('6379', 'redis');


app.get('/', function(req, res, next) {
    res.send('This page has been viewed x times!');
  });

http.createServer(app).listen(9000, function() {
  console.log('Listening on port ' + (9000));
});