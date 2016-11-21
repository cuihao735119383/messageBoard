/**
 * Created by wangyun on 16/11/20.
 */
var express = require("express");
var router = express.Router();


//登录API请求
router.post("/login",function(req,res){
    var userName = req.body.userName;
    var usersColletion =  db.collection("user");

    usersColletion.findOne({userName:userName},function(err,data){
        if( err ) throw err;
        if(data){
            res.setHeader("Set-Cookie",'mb-userName='+userName + ";domain=localhost;path=/;expires=" + new Date(2016,12,12).toUTCString());
            res.json({
                status: 0,
                message:"可以登录"
            });
        }else{
            res.json({
                status: 1,
                message:"用户不存在"
            });
        }

    })
})

//注册API请求

router.post("/reg",function (req,res) {
    var userName = req.body.userName;
    var usersColletion =  db.collection("user");
    usersColletion.findOne({userName:userName},function(err,data){
        if( err ){
            throw err;
        }else{
            console.log(data);
            if(data){
                res.json({
                    status: 1,
                    message:"已经存在"
                });
            }else{
                usersColletion.insert({
                    userName:userName
                }).then(function(){
                    res.json({
                        status: 0,
                        message:"注册成功"
                    });
                }).catch(function(err){
                    console.log(err);
                });

            }
        }
    })
});




module.exports = router;