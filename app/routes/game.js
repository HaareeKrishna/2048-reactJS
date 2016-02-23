
var userModel=require("../models/userModel.js");
var multer=require("multer");
var upload=multer();
var router = require('express').Router();

router.post("/",upload.array(),function(req,res){
		var userName=req.body.playerName;
		var currentScore=0;
		userModel.save(userName,currentScore);
		res.redirect("/#/game/"+userName);
});

router.get("/:name",function(req,res){
	userModel.getUser(req.params.name,function(data){
		res.json(data[0]);
	})
});

router.get("/:name/score",function(req,res){
	userModel.update(req.params.name,req.query.score);	
	res.redirect("/#/game/"+req.params.name+"/done");
})

module.exports=router;