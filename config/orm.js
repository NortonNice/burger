var connection = require("./connection.js");

// In the`orm.js` file, create the methods that will execute the
// necessary MySQL commands in the controllers.These are the methods
// you will need to use in order to retrieve and store data in your database.

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    //selectAll()
    selectAll: function () {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    //insertOne()
    insertOne: function() {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?", function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    //updateOne()
    updateOne: function() {
        connection.query("UPDATE burgers WHERE ")
    }
  
};

module.exports = orm;

// ////////////////////////////////////     NATE AND IRVIN BELOW, MAYBE NOT NECESSARY     ////////////////////////////

// // `selectAll()`
// //Among other things, this will show all burgers with status of devoured: true on the right side
//     //of screen as the page loads frequently
// function selectAll() {
//     connection.query("SELECT * FROM bugers", function (err, res) {
//         if (err) throw err;
//         console.log(res);
//     });

//     // `insertOne()` THIS WILL BE A POST REQUEST CALLED IN THE ROUTES
//     function insertOne() {
//         connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?", function (err, res) {
//             if (err) throw err;
//             console.log(res);
//         })
//     };

//         // `updateOne()` Pass in parameters
//         //When a user hits the eat-da-burger button for it's burger, this will run
//         //UPDATE burgers
//         //SET devoured = true
//         //WHERE burger_name = to ;
//     // function updateOne() {
//     //     connection.query("UPDATE burgers SET ? WHERE ?, devoured
//     //         WHERE"

//     // };

//     // Export the ORM object in `module.exports`.
//     module.exports.selectAll = selectAll;
//     module.exports.insertOne = insertOne;
//     module.exports.updateOne = updateOne;
// }
