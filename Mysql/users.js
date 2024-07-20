var connection = require("./connection");
let insert = function(request,response){
    let sql = " insert into customers (customerName,contactLastName,contactFirstName,phone,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber, 	creditLimit)n values ('"+request.body.customerName+"','"+request.body.contactLastName+"','"+request.body.contactFirstName+"','"+request.body.phone+"','"+request.body.addressLine1+"','"+request.body.addressLine2+"','"+request.body.city+"','"+request.body.state+"','"+request.body.postalCode+"','"+request.body.country+"','"+request.body.salesRepEmployeeNumber+"','"+request.body.creditLimit+"')"
    
    connection.db.query(sql,function(error,result){
        if(error != null){
            response.send("[{'error': 'error}]");
            console.log(error);
        }
        else
        {
            response.send("[{'error': 'no}, {'message': 'success'}]");
        }
    })
       response.send('insert data')

}
let update = function(request,response){
    response.send('update data')
}
module.exports.insert = insert;
module.exports.update = update;