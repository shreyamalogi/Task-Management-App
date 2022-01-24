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

//mongodb connection on aws cloud
mongoose.connect("mongodb+srv://admin-shreya:test123@cluster0.tmyb7.mongodb.net/todolistDb", { useNewUrlParser: true });

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



//about route with get
app.get("/about", function(req, res) {
    res.render("about");
});

//heroku port and our port
app.listen(process.env.PORT || 3000, function() {
    console.log(`server is listening `);
});








// in aws cluster of mongo atlas we set it up and try commands from our mongo shell we get





// Microsoft Windows [Version 10.0.18363.1556]
// (c) 2019 Microsoft Corporation. All rights reserved.

// C:\Windows\SysWOW64>mongo  --version
// MongoDB shell version v5.0.5
// Build Info: {
//     "version": "5.0.5",
//     "gitVersion": "d65fd89df3fc039b5c55933c0f71d647a54510ae",
//     "modules": [],
//     "allocator": "tcmalloc",
//     "environment": {
//         "distmod": "windows",
//         "distarch": "x86_64",
//         "target_arch": "x86_64"
//     }
// }

// C:\Windows\SysWOW64>mongo "mongodb+srv://cluster0.tmyb7.mongodb.net/myFirstDatabase" --username admin-shreya
// MongoDB shell version v5.0.5
// Enter password:
// connecting to: mongodb://cluster0-shard-00-00.tmyb7.mongodb.net:27017,cluster0-shard-00-01.tmyb7.mongodb.net:27017,cluster0-shard-00-02.tmyb7.mongodb.net:27017/myFirstDatabase?authSource=admin&compressors=disabled&gssapiServiceName=mongodb&replicaSet=atlas-7dll6j-shard-0&ssl=true


// *** You have failed to connect to a MongoDB Atlas cluster. Please ensure that your IP allowlist allows connections from your network.
// Error: can't connect to new replica set primary [cluster0-shard-00-02.tmyb7.mongodb.net:27017], err: Location8000: bad auth : Authentication failed. :
// connect@src/mongo/shell/mongo.js:372:17
// @(connect):2:6
// exception: connect failed
// exiting with code 1

// C:\Windows\SysWOW64>mongo "mongodb+srv://cluster0.tmyb7.mongodb.net/myFirstDatabase" --username admin-shreya
// MongoDB shell version v5.0.5
// Enter password:
// connecting to: mongodb://cluster0-shard-00-00.tmyb7.mongodb.net:27017,cluster0-shard-00-01.tmyb7.mongodb.net:27017,cluster0-shard-00-02.tmyb7.mongodb.net:27017/myFirstDatabase?authSource=admin&compressors=disabled&gssapiServiceName=mongodb&replicaSet=atlas-7dll6j-shard-0&ssl=true
// Implicit session: session { "id" : UUID("737eb7ba-f198-450d-b466-d5e2bd4c9f7f") }
// MongoDB server version: 4.4.11
// WARNING: shell and server versions do not match
// ================
// Warning: the "mongo" shell has been superseded by "mongosh",
// which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
// an upcoming release.
// For installation instructions, see
// https://docs.mongodb.com/mongodb-shell/install/
// ================
// Welcome to the MongoDB shell.
// For interactive help, type "help".
// For more comprehensive documentation, see
//         https://docs.mongodb.com/
// Questions? Try the MongoDB Developer Community Forums
//         https://community.mongodb.com
// MongoDB Enterprise atlas-7dll6j-shard-0:PRIMARY> show dbs
// admin  0.000GB
// local  9.733GB
// MongoDB Enterprise atlas-7dll6j-shard-0:PRIMARY>