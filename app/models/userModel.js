var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

function db(cb){
	mongoClient.connect("mongodb://localhost/gameDb",function(err,db){
		if(db.collection("players"))
			cb(db);
		else {
				
		}
	});
}

var app = {

	save:function(userName,score){
		db(function(db){
			app.getUser(userName,function(result){
				if(result.length == 0)
					db.collection("players").insert({userName:userName,scores:score,currScore:0},{w:1},function(err,data){
						
					})
				else
					db.collection("players").update({userName:userName},{$set:{"currScore":0}});
			})
		});
	},
	getUser:function(userName,cb){
		db(function(db){

			db.collection("players").find({userName:userName}).toArray(function(err,data){
				cb(data);
			})
		})
	},
	update:function(userName,score){
		db(function(db){
			db.collection("players").update({userName:userName},{$max:{scores:parseInt(score)}});
			db.collection("players").update({userName:userName},{$set:{"currScore":parseInt(score)}});
			
		});
	}
}

module.exports=app;