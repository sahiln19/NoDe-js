var http = require('http')
var url = require('url')
var mail = require('./MyMailer')
var mailer = new mail.MyMail()
var event = require('events')
var em = new event.EventEmitter()
var RegisterEmail = function(reciver_email){
    mailer.send(reciver_email,'welcome email', 'it is Hello Mesaage')
}
var ProductEmail = function(reciver_email){
    mailer.send(reciver_email,'Product Catelog', 'it is product catelog')
}
var TermCondition = function(reciver_email){
    mailer.send(reciver_email, 'Term & Condition', 'it is term & condition')
}
em.on('register',RegisterEmail )
em.addListener('register',  ProductEmail)
em.on('register',TermCondition)

var server = http.createServer(function(request,response)
{
    var url = request.url
    if(url === '/register')
        {
            response.writeHead(200,{'content-type': 'text/html'})
            response.write('registration successfull')
            response.end()
            em.removeListener('register',RegisterEmail)
            em.removeListener('register',ProductEmail)
            em.removeListener('register',TermCondition)
            em.emit('register','sahilnakiyam5@gmail.com')
        }
})

server.listen(5000)
console.log('ready to accept request...');
