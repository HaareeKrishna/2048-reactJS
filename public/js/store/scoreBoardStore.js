var EventEmitter = require('events').EventEmitter;
var GameDispatcher = require("../dispatcher/gameDispatcher");
var CHANGE_EVENT = 'change';
var assign = require('object-assign');
//require jquery fir ajax calls
var $ = require ('jquery')

var ScoreBoardStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  loadScores: function(playerName){
    var source = "/game/"+playerName; 
    ScoreBoardStore.serverRequest = $.get(source, function (result) {
        ScoreBoardStore.scores=result;
        ScoreBoardStore.emitChange(); 
      });
  },

  abortRequest: function(){
    ScoreBoardStore.serverRequest.abort();
  },

  getCurrentScore: function(playerName){
    return this.scores.currScore;
  },

  getHighScore: function(playerName){
    return this.scores.scores;
  }
});
GameDispatcher.register(function(action) {

  switch(action.type){
    case "loadScores":
      ScoreBoardStore.loadScores(action.playerName);
      break;
    case "abort":
      ScoreBoardStore.abortRequest();
      ScoreBoardStore.emitChange();
      break;
  }
 
});
module.exports = ScoreBoardStore;