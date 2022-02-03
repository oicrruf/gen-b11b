const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    
    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    console.log(`Este es mi path: ${path}`);

    let status = 0;
    let responseStr = '';
    let mimeType = { 'Content-Type': 'application/json' };

    if (path === '/') {
        responseStr = { message: 'OK' };
        status = 200;
    } else if (path === '/permisos') {
        responseStr = { message: 'Forbidden' };
        status = 403;
    } else if (path === '/loquesea.txt') {
        responseStr = { message: 'Not found' };
        status = 404;
    }

    const responseStringify = JSON.stringify(responseStr);

    res.writeHead(status, mimeType);
    res.write(responseStringify);
    res.end();

});
server.listen(8080);
console.log('Inicie mi servidor');