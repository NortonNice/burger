var orm = require('../config/orm.js');

//NEED TO FIX THIS , PULLED FROM CATS.JS//////
var burger = {
        all: function(cb) {
          orm.all("cats", function(res) {
            cb(res);
          });
        },
        // The variables cols and vals are arrays.
        create: function(cols, vals, cb) {
          orm.create("cats", cols, vals, function(res) {
            cb(res);
          });
        },
        update: function(objColVals, condition, cb) {
          orm.update("cats", objColVals, condition, function(res) {
            cb(res);
          });
        },
        delete: function(condition, cb) {
          orm.delete("cats", condition, function(res) {
            cb(res);
          });
        }
      };
/*this is exprted to burgers_controller - look at hbs 12 for expample
burger.js will point to burger_controller.js*/

/* Also inside `burger.js`, create the code that will call 
the ORM functions using burger specific input for the ORM.

create a function that takes in the orm, ypu will pass in a burger name
you can require the logic from this file in server 
router will call the model*/

        //burger.selectAll()

//Export at the end of the `burger.js` file.*/

        //modules.export = 'burger';

/*function will take in the name of the burger 
you will send the name of the burger to the orm
the orm will update the database*/

/*Whatever is here is what will interact with the orm
This here file will be called by the file that interacts with the HTML*/