var express = require ('express')
var router = express.Router();

var quote = require ("../modles/burger");

router.get("/",function(req, res){
    res.sendFile(path.join(_dirname,"public/index.html"));

})

router.get("/burger", function(req, res){
    burger.all(function(data){
    res.json({ burger:data});
    });

});

