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
    var currentDay = today.getDay(); //head to docs to know how to get aj ka date / day

    
    if(currentDay===6 || currentDay ===0){
        res.send("happy weekend");
    }else{
        //res.send only 1 output pampistadi so res.write use cheyali multiple html outputs kosam then call the res.send method after all the res.writes
        res.write("<h1> BOO! I have work </h1>");
        res.write("<p> naku nijangane chala work unadi. So please nanu disturb cheyakandi </p>")
        res.send();
    }
    
    // res.sendFile(__dirname + "/ .html"); 
});

// app.post("/", function(req, res){
    
// });

app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});