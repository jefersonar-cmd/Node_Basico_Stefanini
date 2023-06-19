// import model http

var http = require('http');
// create server

http.createServer(function(req, res){
    res.write('Tentando migrar para o NodeJS');
    res.end();
}).listen(8080);