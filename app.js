//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay(); 

    //instead of using multiple routes like for weeday and weekend
    //we are just gonna implement the if else logic directly in the
    //home route

    if(currentDay===6 || currentDay ===0){
        //rendering weekend.html if ivvala is a holiday
        res.sendFile(__dirname + "/weekend.html")
    }else{
        //leda rendering weekday
       res.sendFile(__dirname + "/weekday.html");
    }
    
});

// app.post("/", function(req, res){
    
// });

app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});