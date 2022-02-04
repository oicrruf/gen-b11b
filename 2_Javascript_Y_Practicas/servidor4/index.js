const http = require('http');
const url = require('url');
const fs = require('fs');

const CONTENT_TYPE = 'Content-Type';
const MIME = {
    html: 'text/html',
    css: 'text/css',
    jpg: 'image/jpg',
    ico: 'image/x-icon',
    mp3: 'audio/mpeg3',
    mp4: 'video/mp4',
    json: 'application/json'
};

// SERVIDOR
const server = http.createServer((req, res) => {
    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    console.log(`Este es mi path: ${path}`);
    let response = '';
    let status = 0;
    let fileSystemPath = '';

    fileSystemPath = `static${path}`;
    fs.stat(fileSystemPath, error => {
        if (!error) {
            fs.readFile(fileSystemPath, (error, file) => {
                if (!error) {
                    status = 200;
                    const aux = fileSystemPath.split('.'); // '/musica.mp3' => [ '/musica', 'mp3' ]
                    const extension = aux[ aux.length-1 ];
                    const mimeType = MIME[extension];
                    res.writeHead(status, { CONTENT_TYPE : mimeType } );
                    res.write(file);
                    res.end();
                } else {
                    status = 500;
                    response = { message: 'Internal server error' };
                    res.writeHead(status, { CONTENT_TYPE : MIME.json } );
                    res.write(response);
                    res.end();
                }
            })
        } else {
            status = 404;
            response = { message: 'Not found' };
            res.writeHead(status, { CONTENT_TYPE: MIME.json } );
            res.write(response);
            res.end();
        }
    })

});

server.listen(8080);
console.log('Inicie mi servidorsito');