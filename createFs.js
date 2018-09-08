var fs = require('fs');


fs.appendFile('MI_NUEVOARCHIVO.md', 'ESTE ES EL CONTENIDO DEL ARCHIVO', function(error){
    if(error){
        throw error;
    } else {
        console.log('File 1 Saved');
    }
});


fs.open('MI_ARCHIVO_2.md', 'w', function(error, File){
    if(error){
        throw error;
    } else {
        console.log('File 2 Saved');
    }
});

fs.writeFile('MI_ARCHIVO_3.txt', 'Contenido del archivo', function(error){
    if(error){
        throw error;
    } else{
        console.log('File 3 Saved');
    }
});