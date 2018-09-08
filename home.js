var http = require('http');
var dt = require('./dataTime');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('\n La fecha actual es: '+ dt.myDateTime());
    res.end('\n Hello World From NodeJs');
}).listen(3000);

console.log('Corriendo desde el puerto 3000');