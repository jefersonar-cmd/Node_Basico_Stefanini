// import express

const express = require('express');

// creating variable for acess function to Express

var app = express();

// route

app.get('/', function(req, res){
    res.write('Utilizando o Express')
    res.end();
})

// server
app.listen(8080);