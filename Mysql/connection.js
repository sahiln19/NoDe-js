var mysql = require('mysql');
var setting = {
    database : 'frontend24',
    user: 'root',
    password:'',
    port: 3306,
    host:'localhost'
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