 var http = require('http')
 var fs = require('fs')
 var server = http.createServer(function(request,response)
{       
    let filename = 'fruits.html';
    fs.readFile(filename,function(error,content){
    response.writeHead(200,{'content-type' : 'text/html'})
    response.write(content);
    response.end()
});    
});

server.listen(5000)