//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http"); //inbuilt module, no need to download

//the app which was created by using express
const app = express();

//declaring globally but here the old one gets // over written if we store as var item = " ";
// so lets create an array which starts of with these 3 instead of li in ejs
var items = ["buy food", "cook food", "eat food"];

//EJS code like main() for keeping all the templating html code but naming it as .ejs in views folder
app.set('view engine', 'ejs');

//for keeping the static files in public folder
app.use(express.static("public"));

//body parser explicit code to handle inputs in the post req
app.use(bodyParser.urlencoded({extended:true}));

//get request route
app.get("/", function(req, res) {

    var today = new Date();

    //instead of a switch statemenet, we can create a js object ...ref docs
    var options = {
            day:"numeric",
            weekday: "long",
            month:"long"
    };

    //today.toLocaleDateString("en-us") method for dynamically telling operating system time
    var day = today.toLocaleDateString("en-us", options);
    
    //rendering templates
    res.render("list", {
        kindOfDay : day,
        newListItems : items,                    //rendering day and newListItem together
  });
});


//post request route
app.post("/", function(req, res){
//passing data from webpage to server by tapping unto the input by   req.body.<input_name>method
      var item =  req.body.newitem;                      
//appending our array with the new item that we got 
        items.push(item);
//passing data from server to webpage by redirecting it to home route
      res.redirect('/');                              
});

//seting up port
app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});



