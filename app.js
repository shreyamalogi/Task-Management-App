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

//first we gonna drop our todolist list db and create it again
// > show dbs
// admin       0.000GB
// config      0.000GB
// local       0.000GB
// todolistDb  0.000GB
// > use todolistDB
// switched to db todolistDB
// > show collections
// > db.dropDatabase()
// { "ok" : 1 }
// > show dbs
// admin       0.000GB
// config      0.000GB
// local       0.000GB
// todolistDb  0.000GB
// > use todolistDb
// switched to db todolistDb
// > db.dropDatabase()
// { "ok" : 1 }
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// >


//GET READ RENDER
app.get("/", function(req, res) {
    modelItem.find({}, function(err, foundItems) { //READ method inside get {} will find all the items, witha call back function along with conditionbs
        if (foundItems.length === 0) { //if there are currently no iytems then insert trhe default items
            //mongoose insertMany()
            modelItem.insertMany(defaultItems, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successfully saved default items to db");
                }
            });
            res.redirect("/"); ///it will go again to the / route under GET but this time it will fall into the lese block at line 82, because now have items in our items collection and we are able to render the founditems 
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems }); //instead of just consolelooging we gonna render directly  //console.log(foundItems); //logging the found items
        }

    });
});











//home route with post
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

//work route with get
app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

//about route with get
app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});