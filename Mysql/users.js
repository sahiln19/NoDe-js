require("./connection");
let insert = function(request,response){
    response.send('insert data')
}
let update = function(request,response){
    response.send('update data')
}
module.exports.insert = insert;
module.exports.update = update;