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

//body parser explicit code to handle inputs in the post req
app.use(bodyParser.urlencoded({extended:true}));

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
        newListItem : item,                    //rendering day and newListItem together
  });
});



app.post("/", function(req, res){
//passing data from webpage to server
      var item =  req.body.newitem;                      //tapping unto the input by   req.body.<input_name>method
//passing data from server to webpage       
      res.redirect('/');                              //redirectly to home route
});

app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});


//when we run this we get error on line 37, lets talk abt scope of a variable in next 
