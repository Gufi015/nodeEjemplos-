var http = require('http');

//Creando el servidor en nodejs
http.createServer(function(req, res){//Se crea el servidor con dos paramentros que son el llamado y la respuesta
    res.writeHead(200,{'Content-Type':' text/html'});//El tipo de contenido de la pagina
    res.write(req.url);// manda a imprimir en pantalla del navegador 
    console.log('Hola desde consola');
    res.end(); //termina la respuesta 
    console.log('termina el proceso');
}).listen(3000); //especidicamos el puerto de salida de nuestro servidor 

console.log("Corriendo en el puerto 3000");