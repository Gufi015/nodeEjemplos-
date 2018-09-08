var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, function (error, data) {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end();
        } else {
            res.writeHead(200, { 'Content': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(3000);

console.log('Corriendo por el puerto 3000');