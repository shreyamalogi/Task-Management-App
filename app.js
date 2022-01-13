//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http"); //inbuilt module, no need to download

//the app which was created by using express
const app = express();

//must use EJS
//for keeping all the templating html code but naming it as .ejs in views folder
app.set('view engine', 'ejs');

//for keeping the static files in public folder
app.use(express.static("public"));

//body parser explicit code
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay(); 

    var day = "";                                   //declaring an empty variable day which holds some value

    if(currentDay===6 || currentDay ===0){
       day = "weekend";                             //initializing it with a value i.e weekend (if the condition is satisfied)
       //res.render("list", {kindOfDay : day})           //res.render method which has <templatingFilename>, keyValuePair which holds (<variableNameInsideSymbols> : <ourVariableName>) 
    }else{
        day = "weekday";
        //res.render("list", {kindOfDay : day})          //ila dopuble double rase badlu, logic ipoyaka render cheddam edaithe result ostado dani batti
    }
    
    res.render("list", {kindOfDay : day});
    
});

// app.post("/", function(req, res){
    
// });

app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});