var http = require('http');
var fs = require('fs');



var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var server = http.createServer(function (req, res) {
	console.log("request was made: " + req.url);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	var myRS = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myRS.pipe(res);
});

server.listen(server_port,server_ip_address);
