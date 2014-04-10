var url = require('url'),
    fs  = require('fs'),
    app = require('http').createServer(
		function(req, res) {
			var pathname = url.parse(req.url).pathname;
	
			if ( pathname == '/' ) { pathname = '/index.html'; }
	
			fs.readFile(__dirname + pathname, function (err, data) {
				if (err) {
					res.writeHead(404);
					return res.end('File not found');
				}
		        
		        var i = pathname.lastIndexOf('.');
		        var ext = pathname.substr(i);

		        var ct = undefined;
		        switch (ext) {
		            case '.js':
		                ct = { 'Content-Type': 'application/javascript' };
		                break;
		            case '.css':
		                ct = { 'Content-Type': 'text/css' };
		                break;
		            case '.html':
		                ct = { 'Content-Type': 'text/html' };
		                break;
		        }
		        
				res.writeHead(200, ct);
				res.end(data);
			});
		}
	),
	io = require('socket.io').listen(app);
	
app.listen(8080);

io.sockets.on('connection', function(socket) {
	socket.on('add', function(data) {
		socket.broadcast.emit('add', data);
	});
	socket.on('remove', function(data) {
		socket.broadcast.emit('remove', data);
	});
});