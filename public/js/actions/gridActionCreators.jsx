var GameDispatcher=require("../dispatcher/gameDispatcher.jsx");
var GameConstants=require("../constants/gameConstants")
var direction;

var app={
	modifyGrid:function(keyCode){
		GameDispatcher.dispatch({keyCode:keyCode});
  }
}
//function to check the keycode and prepare payload for appropriate action
/*function _check(keyCode){
   for(grid in GameConstants.data){
      for(keys in GameConstants.data[grid].controls){
        if(keyCode==GameConstants.data[grid].controls[keys])
          //direction and gridId included in payload
          return {direction:keys};
      }
   }
}*/
module.exports=app;