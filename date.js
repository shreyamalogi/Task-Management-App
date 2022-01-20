// okay lol , our date.js is our like our own nodemodule from scratch
//now to render this we go to app.js and add as packages, but 
//as it is not an npm package, we append it with __dirname

//to export this function to our app.js (dont forget to add s in exports, and dont call the function here)
//the module.exports is like an object in js which has properties and methods


//to export the get date module (keeping the function in the module and exporting it)
module.exports.getDate = getDate;

//creating a getDate function
function getDate() {
    let today = new Date();

    //instead of a switch statemenet, we can create a js object ...ref docs
    let options = {
        day:"numeric",
        weekday: "long",
        month:"long"
    };

    //today.toLocaleDateString("en-us") method for dynamically telling operating system time
    let day = today.toLocaleDateString("en-us", options);

    return day;

}


//to export the get date module (keeping the function in the module and exporting it)
//instead of module.exports we can also write it as exports. (ref node docs)
exports.getDay = getDay;

//creating a getDay() function
function getDay() {
    const today = new Date();
    
    //instead of a switch statemenet, we can create a js object ...ref docs
    const options = {
            weekday: "long"    
    };
    
    //today.toLocaleDateString("en-us") method for dynamically telling operating system time
    const day = today.toLocaleDateString("en-us", options);
    
    return day;
    
    }





// when we console.log("module");  we get output in our console as

// Module {
//     id: 'C:\\Users\\Shre9\\todolistv1\\date.js',
//     path: 'C:\\Users\\Shre9\\todolistv1',
//     exports: {},
//     filename: 'C:\\Users\\Shre9\\todolistv1\\date.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\Shre9\\todolistv1\\node_modules',
//       'C:\\Users\\Shre9\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   }