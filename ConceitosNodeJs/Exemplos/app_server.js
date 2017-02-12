var http = require('http');

var requisicao = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Browser</h1>');
    res.end();
}

var server = http.createServer(requisicao);

server.listen(3000, function() {
    console.log('Servidor em funcionamento')
})