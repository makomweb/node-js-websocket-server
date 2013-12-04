var fs = require('fs');

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080, host:"127.0.0.1"});
  
wss.on('connection', function(ws) {
	console.log('new connection');
	
	ws.on('message', function(data, flags) {
		console.log('message received');

		var rs = fs.createReadStream("response.json", { 'flags': 'r',
			'encoding': 'binary',
			'mode': 0666,
			'bufferSize':64 * 1024
		});
		
		rs.on('data', function(data) {
			console.log('sending data');
			ws.send(data);
		});
		
	  });
	  
	ws.on('close', function() {
		console.log('close');
	  });

	  ws.on('error', function(e) {
		console.log('error occured %s', e.message);
	  }); 	
});
