const http = require('http');
const url = require('url');

// SERVIDOR
const server = http.createServer((req, res) => {
    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    console.log(`Este es mi path: ${path}`);
});

server.listen(8080);
console.log('Inicie mi servidorsito');