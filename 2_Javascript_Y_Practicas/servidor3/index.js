const http = require('http');
const url = require('url');

// PETICIONES
// http://localhost:8080/
// http://localhost:8080/permisos
// http://localhost:8080/loquesea.txt
// http://localhost:8080/solito


// SERVIDOR
const server = http.createServer((req, res) => {
    
    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    console.log(`Este es mi path: ${path}`);

    let status = 0;
    let responseStr = '';
    let mimeType = { 'Content-Type': 'application/json' };

    // CONTROLLER
    if (path === '/') { // primer endpoint, recurso o servicio
        responseStr = { message: 'OK' };
        status = 200;
    } else if (path === '/permisos') {  // segundo endpoint, recurso o servicio
        responseStr = { message: 'Forbidden' };
        status = 403;
    } else if (path === '/loquesea.txt') {  // tercer endpoint, recurso o servicio
        responseStr = { message: 'Request time out' };
        status = 408;
    } else {
        responseStr = { message: 'Not found' };
        status = 404;
    }

    const responseStringify = JSON.stringify(responseStr);

    // armado de la respuesta
    res.writeHead(status, mimeType);
    res.write(responseStringify);
    res.end();

});
server.listen(8080);
console.log('Inicie mi servidor');