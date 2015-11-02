var express = require("express");
var db = require('./queries');

var router = express.Router();

router.get('/', function (req, res) {
    
    db.getAllPersons(req, res);
});

router.post('/', function (req, res) {
    
    
});

router.put('/', function (req, res) {
    
    
});

router.delete('/', function (req, res) {
    
    
});

module.exports = router;