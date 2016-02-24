jest.dontMock("../../store/gridStore.js");
jest.dontMock("../../constants/gameConstants")
jest.dontMock("jquery")
jest.dontMock('object-assign')
jest.dontMock("../grid.js")
jest.dontMock("mathjs")


var ReactDOM = require('react-dom'),
    GridStore = require('../../store/gridStore.js'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    Dispatcher = require("../../dispatcher/gameDispatcher.js");

describe("A gridStore ", function (){
  beforeEach(function(){
    GridStore.emitChange = 
    this.emit =
    this.on = 
    this.removeListener =
    this.eventCallback =  jest.genMockFunction();
    //callback from action creator with payload
    this.callback = Dispatcher.register.mock.calls[0][0];
     //creating a grid
    this.gridData = GridStore.createGrid();
  });

  it("should create grid",function (){
   
    expect(this.gridData).not.toBe(undefined);
    expect(this.gridData._data.length).toBe(4)
  })
  it("should register callback with dispatcher", function (){
    expect(Dispatcher.register.mock.calls.length).toBe(1)
  })

  it("should execute event functions",function(){
    GridStore.emitChange();
    //testing emit function
    expect(this.emit).toBeCalled();
    GridStore.addChangeListener(this.eventCallback);
    expect(this.on).toBeCalled();
    GridStore.removeChangeListener(this.eventCallback);
    expect(this.removeListener).toBeCalled();
  });

  it("should dispatch proper actions", function (){
    GridStore.GridData.left = jest.genMockFunction();
    GridStore.GridData.right = jest.genMockFunction();
    GridStore.GridData.up = jest.genMockFunction();
    GridStore.GridData.down = jest.genMockFunction();
    //testing left function has been called
    this.callback({keyCode:37});
    expect(GridStore.GridData.left).toBeCalled();
    expect(GridStore.emitChange).toBeCalled();

    //testing up function has been called
    this.callback({keyCode:38});
    expect(GridStore.GridData.up).toBeCalled();
    expect(GridStore.emitChange).toBeCalled();

    //testing right function has been called
    this.callback({keyCode:39});
    expect(GridStore.GridData.right).toBeCalled();
    expect(GridStore.emitChange).toBeCalled();

    //testing down function has been called
    this.callback({keyCode:40});
    expect(GridStore.GridData.down).toBeCalled();
    expect(GridStore.emitChange).toBeCalled();
  });

  it("should executes get methods", function (){
    var gridData = GridStore.getGrid();
    expect(gridData).toEqual(GridStore.GridData.grid)
    var currScore = GridStore.getCurrentScore();
    expect(currScore).toEqual(GridStore.GridData.currScore)
  })
})