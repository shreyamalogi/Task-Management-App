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

    var day = "";                                  
    switch(currentDay){   //expression
        case 0:
            day = "Sunday";
            break;
        case 1:
                day = "Monday";
                break;
        case 2:
                day = "Tuesday";
                break;
        case 3:
                 day = "Wednesday";
                break;
        case 4:
                day = "Thursday";
                break;
        case 5:
                day = "Friday";
                break;
        case 6:
                day = "Saturday";
                break;

        default:
        console.log("error");
    }
    res.render("list", {
        kindOfDay : day     //so ivatlati date output la ostadi
  });
});

// app.post("/", function(req, res){
    
// });

app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});