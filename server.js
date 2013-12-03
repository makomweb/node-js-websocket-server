var fs = require('fs');

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080, host:"127.0.0.1"});
  
wss.on('connection', function(ws) {
	var rs = fs.createReadStream("response.json", { 'flags': 'r',
		'encoding': 'binary',
		'mode': 0666,
		'bufferSize':64 * 1024
	});
	
	rs.on('data', function(data) {
		ws.send(data);
    });
});