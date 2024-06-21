var express = require('express');
var app = express()
var parser = require('body-parser')
//middlware example
app.use(express.urlencoded({extended : true}))
app.use(express.json())
const ROUTE = '/contact'
var contacts = [
    {'name' : 'sahil', 'mobile': '152152152'},
    {'name' : 'SHN', 'mobile': '152152152'},
    {'name' : 'NSH', 'mobile': '152152152'}   
]
//get method
app.get(ROUTE , function(request,response){
    response.json(contacts)
})

//post method
app.post(ROUTE, function(request,response){

    let name = request.body.name
    let mobile = request.body.mobile
    let newcontact = {'name':name , 'mobile': mobile}
    contacts.push(newcontact)
    response.send('new contcat added')
})

//put method
app.put(ROUTE , function(request,response){

    let name = request.body.name
    let newname = request.body.newname
    let newmobile = request.body.newmobile
    let size = contacts.length
    let index = 0;
    for(index=0 ; index<size ; index++)
        {
            if(contacts[index].name === name)
                {
                    contacts[index].name = newname;
                    contacts[index].mobile = newmobile
                    break;
                }
        }
        if(index < size)
            {
                response.send('updated')
            }
        else
        {
            response.send('contact not found')
        }
})

app.delete(ROUTE , function(request,response){
    let name = request.body.name
    response.send('delete request received for contact route')
})


const PORTNO = 5000;
app.listen(PORTNO,function(error){
    if(error)
        console.log(error);
    else 
        console.log('server is ready to accept request...');
})