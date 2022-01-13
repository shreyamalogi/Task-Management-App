//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();
// const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    var today = new Date();
    
    if(today.getDay()===6 || today.getDay()===0){
        res.send("happy weekend");
    }else{
        res.send("boo!! not a holiday");
    }
    
    // res.sendFile(__dirname + "/ .html"); 
});

// app.post("/", function(req, res){
    
// });

app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});