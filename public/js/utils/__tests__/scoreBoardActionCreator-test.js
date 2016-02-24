jest.dontMock("../../actions/scoreBoardActionCreator.js");
var ReactDOM = require('react-dom'),
    ScoreBoardActionCreator = require('../../actions/scoreBoardActionCreator'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    GameDispatcher = require("../../dispatcher/gameDispatcher");

describe("A ScoreBoardActionCreator ", function (){
  beforeEach(function (){
    this.playerName = "tester";
  });

  it("should executes methods and dispatch payloads to Dispatcher", function (){
    ScoreBoardActionCreator.loadScores(this.playerName);
    expect(GameDispatcher.dispatch).toBeCalled();
    //testing if payloads are passing properly
    expect(GameDispatcher.dispatch.mock.calls[0][0]).toEqual({type : "loadScores", playerName : this.playerName})
    GameDispatcher.dispatch = jest.genMockFunction();
    //Action for aborting a request
    ScoreBoardActionCreator.abortRequest();
    expect(GameDispatcher.dispatch).toBeCalled();
    expect(GameDispatcher.dispatch.mock.calls[0][0]).toEqual({type : "abort"})
  })
})