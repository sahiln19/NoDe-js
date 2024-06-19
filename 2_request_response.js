var http = require('http');
var server = http.createServer(function(request,response){
    console.log(" i have recived your request")
})//
server.listen(5000)
