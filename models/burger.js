var orm = require('../config/orm.js');

/*this is exprted to burgers_controller - look at hbs 12 for expample
burger.js will point to burger_controller.js*/

/* Also inside `burger.js`, create the code that will call 
the ORM functions using burger specific input for the ORM.

create a function that takes in the orm, ypu will pass in a burger name
you can require the logic from this file in server 
router will call the model*/

//NEED TO FIX THIS , PULLED FROM CATS.JS//////
var burger = {
        all: function(cb) {
          orm.selectAll(function(res) {
            cb(res);
          });
        },
        // The variables cols and vals are arrays.
        insert: function(cols, vals, cb) {
          orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
          });
        },
        update: function(objColVals, condition, cb) {
          orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
          });
        },

      };
      
//burger.insert();
module.exports = burger;

/*function will take in the name of the burger 
you will send the name of the burger to the orm
the orm will update the database*/

/*Whatever is here is what will interact with the orm
This here file will be called by the file that interacts with the HTML*/