var fs = require('fs');

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080, host:"127.0.0.1"});
  
wss.on('connection', function(ws) {
	console.log('new connection');
		
	ws.on('message', function(message) {
		console.log('message received');
		
		console.log("-------------");
		console.log("JSON: %s", message);
		console.log("-------------");
		
		var obj = JSON.parse(message);
	  
		console.log("Request ID: %s", obj.request.request_id);
		console.log("URI %s", obj.request.uri);
		console.log("Verb %s", obj.request.verb);
	  
		if (obj.request.uri == "/api/v1/settings")
		{
			console.log("Writing settings response");
			ws.send(JSON.stringify({
				status:200,
				request_id: obj.request.request_id,
				body: { "key_1": "value_1", "key_2": "value_2", "key_3": "value_3" }
			}));
		}
		else
		if (obj.request.uri == "/api/v1/notifications")
		{
			console.log("Writing notifications response");
			ws.send(JSON.stringify({
				status:200,
				request_id: obj.request.request_id,
				body: [{"key":"value1"},{"key":"value2"},{"key":"value3"}]
			}));
		}
		else
		if (obj.request.uri == "/api/v1/lists")
		{
			console.log("Writing lists response");
			ws.send(JSON.stringify({
				status: 200,
				request_id: obj.request.request_id,
				body: [{"id":123},{"id":234},{"id":345},{"id":46},{"id":12},{"id":1},{"id":7878},{"id":784},{"id":23},{"id":45},{"id":232},{"id":22},{"id":34},{"id":43},{"id":4},{"id":543},{"id":3345},{"id":4353}]
			}));
		}
		else
		if (obj.request.uri.indexOf("/api/v1/memberships") !== -1)
		{
			console.log("Writing memberships response");
			ws.send(JSON.stringify({
				status: 200,
				request_id: obj.request.request_id,
				body: [{"id":123},{"id":234},{"id":345},{"id":46},{"id":12},{"id":1},{"id":7878},{"id":784},{"id":23},{"id":45},{"id":232},{"id":22},{"id":34},{"id":43},{"id":4},{"id":543},{"id":3345},{"id":4353}]
			}));
		}
		else
		if (obj.request.uri.indexOf("/api/v1/tasks") !== -1)
		{
			console.log("Writing tasks response");
			ws.send(JSON.stringify({
				status: 200,
				request_id: obj.request.request_id,
				body: [{"id":123},{"id":234},{"id":345},{"id":46},{"id":12},{"id":1},{"id":7878},{"id":784},{"id":23},{"id":45},{"id":232},{"id":22},{"id":34},{"id":43},{"id":4},{"id":543},{"id":3345},{"id":4353}]
			}));
		}
		else
		if (obj.request.uri.indexOf("/api/v1/subtasks") !== -1)
		{
			console.log("Writing subtasks response");
			ws.send(JSON.stringify({
				status: 200,
				request_id: obj.request.request_id,
				body: [{"id":123},{"id":234},{"id":345},{"id":46},{"id":12},{"id":1},{"id":7878},{"id":784},{"id":23},{"id":45},{"id":232},{"id":22},{"id":34},{"id":43},{"id":4},{"id":543},{"id":3345},{"id":4353}]
			}));
		}
		else
		if (obj.request.uri.indexOf("/api/v1/notes") !== -1)
		{
			console.log("Writing notes response");
			ws.send(JSON.stringify({
				status: 200,
				request_id: obj.request.request_id,
				body: [{"id":123},{"id":234},{"id":345},{"id":46},{"id":12},{"id":1},{"id":7878},{"id":784},{"id":23},{"id":45},{"id":232},{"id":22},{"id":34},{"id":43},{"id":4},{"id":543},{"id":3345},{"id":4353}]
			}));
		}
		else
		if (obj.request.uri.indexOf("/api/v1/reminders") !== -1)
		{
			console.log("Writing reminders response");
			ws.send(JSON.stringify({
				status: 200,
				request_id: obj.request.request_id,
				body: [{"id":123},{"id":234},{"id":345},{"id":46},{"id":12},{"id":1},{"id":7878},{"id":784},{"id":23},{"id":45},{"id":232},{"id":22},{"id":34},{"id":43},{"id":4},{"id":543},{"id":3345},{"id":4353}]
			}));
		}
	  });
	  
	ws.on('close', function() {
		console.log('close');
	});

	ws.on('error', function(e) {
		console.log('error occured %s', e.message);
	}); 	
});
