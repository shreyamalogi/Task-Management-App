//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const _ = require("lodash");

//requiring our mongoose module for our db
const mongoose = require("mongoose");

//creating our express app
const app = express();

//ejs view engine
app.set('view engine', 'ejs');

//body parser code
app.use(bodyParser.urlencoded({ extended: true }));

//keeping static files in public
app.use(express.static("public"));

//mongodb connection, to avoid deprecation warning
mongoose.connect("mongodb://localhost:27017/todolistDb", { useNewUrlParser: true });

//mongoose schema for items
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

//mongooose schema for list
const listSchema = ({
    name: String,
    items: [itemsSchema]
});

//list model
const List = mongoose.model("List", listSchema);

//////////////////////////////////////////////////////////////////////   GET      ////////////////////////////////////////////////////////////////////

//get req for / route
app.get("/", function(req, res) {

    //Find all in our specified collection
    modelItem.find({}, function(err, foundItems) {

        if (foundItems.length === 0) {
            modelItem.insertMany(defaultItems, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully inserted many items");
                }
            });
            res.redirect("/");
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems });
        }
    })

});


//get for customlist /home, /school etc
app.get("/:customListName", function(req, res) {
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({ name: customListName }, function(err, foundList) {
        if (!err) {
            if (!foundList) {
                //Create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });

                list.save();
                res.redirect("/" + customListName);
            } else {
                //Show an existing list
                res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
            }
        }
    });

});


//////////////////////////////////////////////////////////////////////   POST     ////////////////////////////////////////////////////////////////////

//home route with post
app.post("/", function(req, res) {


    //corresponding to the submit button in forms
    const itemName = req.body.newItem; //tapping into itemname for user to add that new item
    const listName = req.body.list; //tapping into listname 


    //creating a new item document
    const item = new modelItem({
        name: itemName
    });


    //conditions if the listname which got triggerd is today
    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listName }, function(err, foundList) {

            //to pushh a new item into array of items
            foundList.items.push(item);

            foundList.save();
            res.redirect("/" + listName) //redirecting to the route where the user came from
        })
    }

});



//home route which deletes with post
app.post("/delete", function(req, res) {
    const checkedItemId = (req.body.checkbox);
    const listName = req.body.listName;

    if (listName === "Today") {
        modelItem.findByIdAndRemove(checkedItemId, function(err) {
            if (!err) {
                console.log("Successfully deleted checked item!");
                res.redirect("/");
            }
        });

    } else {
        //remove from the existing array along with findoneandupdate mongoose method
        List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemId } } }, function(err, foundList) {
            if (!err) {
                res.redirect("/" + listName);
            }
        })
    }
});


//in db we get
// > show dbs
// admin       0.000GB
// config      0.000GB
// local       0.000GB
// todolistDb  0.000GB
// > use todolistDb
// switched to db todolistDb
// > show collections
// items
// lists
// > db.lists.find().pretty()
// {
//         "_id" : ObjectId("61ed405cc0bb0f5179d7c800"),
//         "name" : "home",
//         "items" : [
//                 {
//                         "name" : "welcome to your todolist.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fc")
//                 },
//                 {
//                         "name" : "hit the + button top add new item.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fd")
//                 },
//                 {
//                         "name" : "<-- hit this to delete an item.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fe")
//                 },
//                 {
//                         "name" : "jkykj",
//                         "_id" : ObjectId("61ed40d5c0bb0f5179d7c89e")
//                 }
//         ],
//         "__v" : 3
// }
// {
//         "_id" : ObjectId("61ed4095c0bb0f5179d7c837"),
//         "name" : "work",
//         "items" : [
//                 {
//                         "name" : "welcome to your todolist.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fc")
//                 },
//                 {
//                         "name" : "hit the + button top add new item.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fd")
//                 },
//                 {
//                         "name" : "<-- hit this to delete an item.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fe")
//                 },
//                 {
//                         "name" : "lll",
//                         "_id" : ObjectId("61ed40c9c0bb0f5179d7c88e")
//                 }
//         ],
//         "__v" : 4
// }
// {
//         "_id" : ObjectId("61ed4095c0bb0f5179d7c83d"),
//         "name" : "work",
//         "items" : [
//                 {
//                         "name" : "welcome to your todolist.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fc")
//                 },
//                 {
//                         "name" : "hit the + button top add new item.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fd")
//                 },
//                 {
//                         "name" : "<-- hit this to delete an item.",
//                         "_id" : ObjectId("61ed4037c0bb0f5179d7c7fe")
//                 }
//         ],
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ed46643d23b2269c99ceea"),
//         "name" : "Work",
//         "items" : [
//                 {
//                         "name" : "welcome to your todolist.",
//                         "_id" : ObjectId("61ed465b3d23b2269c99cee5")
//                 },
//                 {
//                         "name" : "hit the + button top add new item.",
//                         "_id" : ObjectId("61ed465b3d23b2269c99cee6")
//                 },
//                 {
//                         "name" : "<-- hit this to delete an item.",
//                         "_id" : ObjectId("61ed465b3d23b2269c99cee7")
//                 }
//         ],
//         "__v" : 0
// }
// {
//         "_id" : ObjectId("61ed47383d23b2269c99cef4"),
//         "name" : "About",
//         "items" : [
//                 {
//                         "name" : "welcome to your todolist.",
//                         "_id" : ObjectId("61ed465b3d23b2269c99cee5")
//                 },
//                 {
//                         "name" : "hit the + button top add new item.",
//                         "_id" : ObjectId("61ed465b3d23b2269c99cee6")
//                 },
//                 {
//                         "name" : "<-- hit this to delete an item.",
//                         "_id" : ObjectId("61ed465b3d23b2269c99cee7")
//                 }
//         ],
//         "__v" : 0
// }
// > db.lists.drop()
// true
// >










//about route with get
app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});