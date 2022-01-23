//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// const ejsLint = require('ejs-lint');

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
            res.render("list", { listTitle: "Today", newListItems: foundItems }); //instead of just consolelogging we gonna render directly  //console.log(foundItems); //logging the found items
        }

    });
});


//home route with post
app.post("/", function(req, res) {

    const itemName = req.body.newItem; //which will refer to the input in the forms when we click the + button to add that new item
    //creating a new item document
    const item = new modelItem({
        name: itemName
    });
    item.save(); //it will save all the 79-83 into our items collection and shows in our database

    res.redirect("/"); //after we save it runs app.get aagain, it willrender the item which got logged to apper on our browser

});

//home route which deletes with post
app.post("/delete", function(req, res) {
    //and the id of the element which was checked i.e 61ed27ad42f8dba1f9d2aead
    const checkedItemId = (req.body.checkbox);
    //mongoose find by id and remove
    modelItem.findByIdAndRemove(checkedItemId, function(err) {
        if (!err) {
            console.log("we have succesfully deleted checkeditem");
            res.redirect("/"); //to reflect that on our webpage
        }
    })
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