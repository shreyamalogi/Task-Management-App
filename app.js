//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay(); //head to docs to know how to get aj ka date / day

    
    if(currentDay===6 || currentDay ===0){
        res.send("happy weekend");
    }else{
        //rendering the html template instead of re.write or res.send methods
       res.sendFile(__dirname + "/index.html");
    }
    
});

// app.post("/", function(req, res){
    
// });

app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});