express = require('express');
var router = express.Router();
//IMPORTING THE MODEL TO USE IT'S DATABASE FUNCTIONS:
var burger = require('../models/burger.js');


//CREATING THE ROUTER AND ALL IT'S ROUTES IN THIS FILE SO IT CAN CONTROL THE LOGIC:

router.get('/', function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insert([
        "name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// EXPORT ROUTES FOR SERVER.JS TO USE
module.exports = router;
