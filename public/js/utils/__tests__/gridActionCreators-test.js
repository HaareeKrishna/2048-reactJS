jest.dontMock("../../actions/gridActionCreators.js");
var ReactDOM = require('react-dom'),
    GridActionCreators = require('../../actions/gridActionCreators'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    GameDispatcher = require("../../dispatcher/gameDispatcher");

describe("A GridActionCreator ", function (){
  beforeEach(function (){
    this.keyCode = 37;
  });

  it("should executes methods and dispatch payloads to Dispatcher", function (){
    GridActionCreators.modifyGrid(this.keyCode);
    expect(GameDispatcher.dispatch).toBeCalled();
    //testing if payloads are passing properly
    expect(GameDispatcher.dispatch.mock.calls[0][0]).toEqual({keyCode : this.keyCode})
  })
})