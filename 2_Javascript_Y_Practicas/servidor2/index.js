const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlObject = url.parse(req.url);
    console.log(`Path: ${urlObject.path}`)
    console.log(`Path name: ${urlObject.pathname}`)
    res.writeHead(200, { 'Content-Type' : 'text/html' } );
    res.write(`<html><body>Servidor 2</body></html>`);
    res.end();
})

server.listen(8080);
console.log('Inicie mi servidor');
// http://localhost:8080/customers/patitos