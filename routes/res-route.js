/**
 * Created by wangyun on 16/11/20.
 */
var express = require("express");
var router = express.Router();


router.get("/",function (req,res) {
   // res.send("hello,router");

    res.render("index",{hello:"abc"});
});

router.get("/login",function (req,res) {
    res.render("login",{hello:"abc"});
});

router.get("/reg",function (req,res) {
    res.render("reg",{hello:"abc"});
});

module.exports = router;