var GameDispatcher = require("../dispatcher/gameDispatcher");
var app = {
  loadScores : function(playerName){
    GameDispatcher.dispatch({ type : "loadScores", playerName : playerName });
  },
  abortRequest : function(){
    GameDispatcher.dispatch({ type : "abort" });
  }
}
module.exports = app;