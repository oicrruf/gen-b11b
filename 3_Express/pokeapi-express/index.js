    const express = require('express')
const app = express(); 
const port = 3000


app.get('/', (req, res) => {
    res.send('hola mundo!');
})

app.get('/trainer', (req, patito) => {
    const objeto = { id: 1, name: 'jose montoya' }
    patito.json(objeto);
})

app.listen(port, () => {
    console.log(`Server ok, puerto: ${port}`)
})