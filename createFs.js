var fs = require('fs');


fs.appendFile('MI_NUEVOARCHIVO.md', 'ESTE ES EL CONTENIDO DEL ARCHIVO', function(error){
    if(error){
        throw error;
    } else {
        console.log('File Saved');
    }
});


fs.open('MI_ARCHIVO_2.md', 'w', function(error, File){
    if(error){
        throw error;
    } else {
        console.log('File Saved');
    }
});