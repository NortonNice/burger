express = require('express');
var router = express.Router();
//IMPORTING THE MODEL TO USE IT'S DATABASE FUNCTIONS:
var burger = require('../models/burger');
var exbhps = require('express-handlebars');


//CREATING THE ROUTER AND ALL IT'S ROUTES IN THIS FILE SO IT CAN CONTROL THE LOGIC:

router.get('/', function(req, res){
    burger.all(function(data) {
        var hbsObject = {
            burger_db: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// EXPORT ROUTES FOR SERVER.JS TO USE
module.exports = router;
