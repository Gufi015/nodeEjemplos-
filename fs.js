var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demoFS.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);


console.log('Corriendo desde el puerto 3000');