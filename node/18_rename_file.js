var http = require('http')
var url = require('url')
var fs = require('fs');

var server=http.createServer(function(request,response)
{
    var requested_url = url.parse(request.url,true)
    var filename = requested_url.pathname.substring(1)
    var newfilename = 'freindship.txt' // old file name is 'freinds.txt'//
    console.log(filename)
    fs.rename(filename,newfilename,function(error)
    {
        if(error)
            {
                response.write('file could not be renamed')
                response.end()
            }
        else
         {
                response.write('file Renamed successfully')
                response.end()
         }
    })
})

server.listen(5000)
console.log('ready to accept request...');