var express=require("express");
var app=express();
var game=require("./app/routes/game.js");
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/game",game);
app.use("/",function(req,res,next){
	res.sendFile(__dirname +"/public/");
});

app.listen(process.env.PORT || 8086);