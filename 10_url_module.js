var http = require('http');
var url = require('url');
var server = http.createServer(function(request,response)
{
    var requested_url = url.parse(request.url,true)
    var operation = requested_url.pathname;
    var data = requested_url.query;
    var output = 'invalid operation'
    if(data.num1 === undefined || data.num2 === undefined)
        {
            output = 'input is missing'
        }
    else 
    {
        var num1 = parseInt(data.num1)
        var num2 = parseInt(data.num2)
        if(operation === '/add')
            {
                output = 'addition = ' + (num1 + num2)
            }
            else if (operation === '/sub') {
                output = 'subtraction =  ' + (num1 - num2);
            }
            else if (operation === '/mul') {
                output = 'multiplication =  ' + (num1 * num2);
            }
            else if (operation === '/div') {
                output = 'division =  ' + (num1 / num2).toFixed(2);
            }
    }

    response.write(output);
    response.end()
})
server.listen(5000);
console.log("ready to accept the request")