var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	console.log("request was made: " + req.url);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	var myRS = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myRS.pipe(res);
});

server.listen(1000, '127.0.0.1');
