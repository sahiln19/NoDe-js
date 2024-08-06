var mysql = require('mysql');
var settings = {
    database : 'frontend24',
    user: 'root',
    password:'',
    port:3306,
    host:'localhost'
};
var db = mysql.createConnection(settings);
db.connect(function(error){
    if(error)
    {
        console.log('error in establishing connection');
        console.log(error);
    }
    else 
        console.log('connection created');
});
module.exports.db = db;