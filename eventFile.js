var fs = require('fs');


var rs = fs.createReadStream('archivo.txt');

rs.on('open', function(){
    console.log('The File is Open');
});