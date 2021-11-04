const http = require('http');
var app = require('./src/app');

let PORT = process.env.PORT || 3174;

server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
