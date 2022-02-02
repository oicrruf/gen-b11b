const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type' : 'text/html' } );
    response.write(`<html><body>Hola desde Node</body></html>`);
    response.end();
});

server.listen(8000);

console.log('Inicie mi servidor');
// PROBAR EN EL NAVEGADOR escribiendo => http://localhost:8000/