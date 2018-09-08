var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {

    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (error, fields, files) {
            var oldPath = files.filetoupload.path;
            var newPath = 'C:/Users/Mr.Robot/Desktop/Node/formidable' + files.filetoupload.name;
            fs.rename(oldPath, newPath, function (error) {
                if (error) throw error;
                res.write('file uploaded and Moved');
                res.end();
                console.log("File upload");
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="POST" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
        console.log('Se ejecuto el formulario');
    }
}).listen(3000);

console.log("Corriendo por el puerto 3000");