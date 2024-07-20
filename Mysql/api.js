var express = require('express');
var parser = require('body-parser');
var users = require('./users');
var app = express();
app.use(express.urlencoded('extended',true));
app.use(express.json());

const ROUTE = "/patient";
const PORTNO = 5000;

app.post ( ROUTE , (request,response) => users.insert(request,response) );
app.put ( ROUTE , (request,response) => users.update(request,response) );

app.listen(PORTNO);
console.log(`ready to accept the request `);