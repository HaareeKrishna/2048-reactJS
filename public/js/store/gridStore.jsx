var EventEmitter = require('events').EventEmitter;
var GameDispatcher = require("../dispatcher/gameDispatcher.jsx");
var gameConstants = require("../constants/gameConstants");
var gridclass = require("../utils/grid.js");
var CHANGE_EVENT = 'change';
var assign = require('object-assign');

//grid related data
var GridData;
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
    GridData = new gridclass(gameConstants);
  	GridData.createGrid();
  	return GridData.grid;
  },
  getGrid:function(){
	  return GridData.grid;
  },
   getCurrentScore:function(){
  	return GridData.currScore;
  }
});

//dispacting actions and emmiting CHANGE event, whenever state of grid is changed
GridStore.dispatchToken=GameDispatcher.register(function(action) {
	switch(action.keyCode){
		case 37: 
				GridData.left();
				GridStore.emitChange();
				break;
		case 38:
				GridData.up();
				GridStore.emitChange();
				break;
		case 39:
				GridData.right();
				GridStore.emitChange();
				break;
		case 40:
				GridData.down();
				GridStore.emitChange();
				break;
	}
});

module.exports=GridStore;
