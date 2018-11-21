var connection = require("./connection.js");

// In the`orm.js` file, create the methods that will execute the
// necessary MySQL commands in the controllers.These are the methods
// you will need to use in order to retrieve and store data in your database.

var orm = {
    
    selectAll: function () {
        console.log('Selecting all burgers from database');
        var query = connection.query(
            "SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            console.log(res);
            console.log(query.sql);
        });
    },

    insertOne: function () {
        console.log('Putting a new burger in the database!');
        var query = connection.query(
            "INSERT INTO burgers SET ?",

            {
                burger_name: '',
                devoured: false
            },
            function (err, res) {
                console.log(res.affectedRows + ' burger inserted!\n')
                console.log(query.sql);
        });
    },

    updateOne: function() {
        console.log('Updating selected burger to devoured...\n');
        var query = connection.query(
            "UPDATE burgers SET ? WHERE ?",
        [
            {
                devoured: true,
            },
            {  
            //NEED BURGER SELECTION HERE//
            //BURGER ID = DEVOURED BUTTON ID WHERE WILL THIS BE TAKEN FROM?
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + ' burgers updated!\n');
            console.log(query.sql);
        });
    }
};
module.exports = orm;
