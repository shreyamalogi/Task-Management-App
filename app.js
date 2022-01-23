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

//GET READ RENDER
app.get("/", function(req, res) {
    modelItem.find({}, function(err, foundItems) { //READ method inside get {} will find all the items, witha call back function along with conditionbs
        res.render("list", { listTitle: "Today", newListItems: foundItems }); //instead of just consolelooging we gonna render directly  //console.log(foundItems); //logging the found items
    });
});



//but everytime we restart our server 42-56 line triggers and data of items goes on adding to our todolist
//we only want to have 3, lets solve this in our next versions




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