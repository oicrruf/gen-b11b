const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // 1 Obtener la path de la url que el usuario solicita
    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    let fileSystemPath = '';
    console.log(`Path: ${path}`);

    // 2 Validar la ruta o path solicitado
    if (path === '/') {
        // 3 Como la ruta es vacia regresa el index
        fileSystemPath = 'static/index.html';
    } else {
        // 3 Si el path coincide con el archivo lo obtiene
        fileSystemPath = `static/${path}`;
    }

    // 4 Validar que exista el archivo
    fs.stat(fileSystemPath, error => {
        // 5 Si existe haz esto
        if (!error) {
            // 6 Leer el archivo
            fs.readFile(fileSystemPath, (error, archivo) => {
                if (!error) {
                    // 7 Crear una respuesta que devuelva la pagina web que pidio el usuario en la path
                    res.writeHead(200, { 'Content-Type' : 'text/html' } );
                    res.write(archivo);
                    res.end();
                } else {
                    res.writeHead(500, { 'Content-Type' : 'text/plain' } );
                    res.write('Error en mi servidor');
                    res.end();
                }
            })
        // 6 Si no existe haz esto
        } else {
            res.writeHead(404, { 'Content-Type' : 'text/html' } );
            res.write(`<html><body>Esa pagina no existe en el servidor!</body></html>`);
            res.end();
        }
    })

})

server.listen(8080);
console.log('Inicie mi servidor');
// http://localhost:8080/customers/patitos