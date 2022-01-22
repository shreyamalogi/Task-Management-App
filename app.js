//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//requiring our mongoose module for our db
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//mongodb connection, to avoid deprecation warning
mongoose.connect("mongodb://localhost:27017/todolistDb", { useNewUrlParser: true });

//mongoose schema
const itemsSchema = ({
    name: String
});

//mongoose model
const modelItem = mongoose.model("Item", itemsSchema);

//3 new items documents
const item1 = new modelItem({
    name: "welcome to your todolist."
});
const item2 = new modelItem({
    name: "hit the + button top add new item."
});
const item3 = new modelItem({
    name: "<-- hit this to delete an item."
});

//keeping these docs in an array
const defaultItems = [item1, item2, item3];

//mongoose insertMany()
modelItem.insertMany(defaultItems, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});

//get route
app.get("/", function(req, res) {
    res.render("list", { listTitle: "Today", newListItems: defaultItems }); //it will render all the items (code after db.items.find().pretty()) 
});

//output in mongoshell will show
// ---
// > show dbs
// admin       0.000GB
// config      0.000GB
// local       0.000GB
// todolistDb  0.000GB
// > use todolistDb
// switched to db todolistDb
// > show collections
// items
// > db.items.find().pretty()
// {
//         "_id" : ObjectId("61ec26567127ee6980ff072c"),
//         "name" : "welcome to your todolist.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec26567127ee6980ff072d"),
//         "name" : "hit the + button top add new item.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec26567127ee6980ff072e"),
//         "name" : "<-- hit this to delete an item.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec27326b2ddf777b02ad24"),
//         "name" : "welcome to your todolist.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec27326b2ddf777b02ad25"),
//         "name" : "hit the + button top add new item.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec27326b2ddf777b02ad26"),
//         "name" : "<-- hit this to delete an item.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec2bc1cb1dc8b04e89e2b0"),
//         "name" : "welcome to your todolist.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec2bc1cb1dc8b04e89e2b1"),
//         "name" : "hit the + button top add new item.",
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ec2bc1cb1dc8b04e89e2b2"),
//         "name" : "<-- hit this to delete an item.",
//         "__v" : 0
// }
// >


//post route
app.post("/", function(req, res) {

    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});