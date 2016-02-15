

var GameDispatcher=require("../dispatcher/gameDispatcher.jsx");

var app={
	modifyGrid:function(keyCode){
		GameDispatcher.dispatch({keyCode:keyCode});
	}
}
module.exports=app;