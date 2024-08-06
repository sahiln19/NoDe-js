var http = require('http')
var url = require('url')
var mail = require('./MyMailer')
var mailer = new mail.MyMail()
var event = require('events')
var em = new event.EventEmitter()
em.on('register', function(reciver_email){
    mailer.send(reciver_email,'welcome email','it is Hello message')
})

em.addListener('register', function(reciver_email)
{
    mailer.send(reciver_email,'product catelog', 'it is product catelog')
})

em.on('register', function(reciver_email)
{
    mailer.send(reciver_email,'Term & Condition', ' it is term & condition')
})
var server = http.createServer(function(request,response)
{
    var url = request.url
    if(url === '/register')
        {
            response.writeHead(200,{'content-type': 'text/html'})
            response.write('registration successfull')
            response.end()
            em.emit('register','sahilnakiyam5@gmail.com')
        }
})

server.listen(5000)
console.log('ready to accept request...');
