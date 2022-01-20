//jshint esversion:6

const express = require("express");             //npm init 
const bodyParser = require("body-parser");      //npm i express body-parser
const http = require("http");                   //inbuilt module, no need to download
const date = require(__dirname + "/date.js");   //not npm but own own local module

//the app which was created by using express
const app = express();

//declaring globally but here the old one gets over written if we store as var item = " ";
// so lets create an array which starts of with these 3 instead of li in ejs
const items = ["buy food", "cook food", "eat food"];
const workItems = [];

//EJS code like main() for keeping all the templating html code but naming it as .ejs in views folder
app.set('view engine', 'ejs');

//for keeping the static files in public folder
app.use(express.static("public"));

//body parser explicit code to handle inputs in the post req
app.use(bodyParser.urlencoded({extended:true}));

//get request route
app.get("/", function(req, res) {
//activating our date constant which stores our module getDate, and store this day variable
//lets call the getDate function which is bound to our date module
let day = date.getDate();                                   
    //rendering templates
    res.render("list", {
        listTitle : day,
        newListItems : items,                    
  });
});


//post request route for home
app.post("/", function(req, res){
//passing data from webpage to server by tapping unto the input by   req.body.<input_name>method
const item =  req.body.newitem;  
//logic: if the request made by user came from /work route push the elemets to it or else push it to home 
        if (req.body.list === "work") {
                workItems.push(item);
                res.redirect("/work")
        } else {
        items.push(item);
              res.redirect('/');   
        }
                            
});


//get and post for work route

app.get("/work", function(req,res){
        res.render("list", {listTitle: "work list", newListItems : workItems});
});

app.post("/work", function(req,res){
        let items = req.body.newItem;
        workItems.push(items);
        res.redirect('/');
});



//seting up port
app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});



