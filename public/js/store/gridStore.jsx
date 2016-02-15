var EventEmitter = require('events').EventEmitter;
var GameDispatcher=require("../dispatcher/gameDispatcher.jsx");
var gameConstants=require("../constants/gameConstants.jsx");
var gridclass=require("../utils/grid.js");
var CHANGE_EVENT = 'change';
var assign = require('object-assign');

//constructing grid from GridClass class
var Grid=new gridclass(gameConstants);
//change grid according to action dispatched
var GridStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  createGrid:function(){
  	//creating grid for first time with dimensions as parameters
  	Grid.createGrid();
  	return gameConstants.grid;
  },

  getGrid:function(){
	return gameConstants.grid;
  },

  getCurrentScore:function(){
  	return gameConstants.currScore;
  }
});

//dispacting actions and emmiting CHANGE event, whenever state of grid is changed
GridStore.dispatchToken=GameDispatcher.register(function(action) {
	
	switch(action.keyCode){
		case 37: 
				Grid.left();
				GridStore.emitChange();
				break;
		case 38:
				Grid.up();
				GridStore.emitChange();
				break;
		case 39:
				Grid.right();
				GridStore.emitChange();
				break;
		case 40:
				Grid.down();
				GridStore.emitChange();
				break;
	}
});

module.exports=GridStore;
