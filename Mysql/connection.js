var mysql = require('mysql');
var setting = {
    database : 'frontend24',
    host : 'localhost',
    user : 'root',
    password : '',
    port : 3308
}
 
var db = mysql.createConnection(setting)
db.connect(function(error){
    if(error){
        console.log('Error in establishing connection with database');
        console.log(error);
    }
    else {
        console.log('connection created')
    }
})
module.exports.db = db;