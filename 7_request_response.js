 var http = require('http');
 var server =  http.createServer(function(requst,response)
{
    response.writeHead(200,{'content-type': 'text/html'});
    var url = requst.url;
    var output ;
    if(url == "/")
        {
            output = '<h1> Home </h1>'
        }
    else if(url == "/fruits")
        {
            output = "<ol><li>Apple</li><li>Banana</li><li>Cherry</li><li>Date</li><li>Elderberry</li></ol>"
        }
    else if(url == "/vegetables")
        {
            output = "<ol><li>Carrot</li><li>Broccoli</li><li>Spinach</li><li>Potato</li><li>Tomato</li></ol>"
        }
    else  if(url == "/grains")
        {
            output = "<ol><li>Rice</li><li>Wheat</li><li>Oats</li><li>Barley</li><li>Quinoa</li></ol>"
        }
        output = "<html>" + output + "</html>";
    response.write(output);
    response.end();
});

server.listen(5000);
console.log('ready to accept request');