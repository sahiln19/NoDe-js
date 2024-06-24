var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request,response)
{
    let requested_url = request.url;
    let filename = requested_url.substring(1);

    try {
        let FileContent = fs.readFileSync(filename);
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write(FileContent)
        return response.end()
    }

    catch {
        response.writeHead(404,{'content-type' : 'text/html'})
        response.write('<h1>File not found</h1>')
        return response.end()
    }
})//
server.listen(5000);
console.log('server is ready to accept request')