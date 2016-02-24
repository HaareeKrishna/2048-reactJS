jest.dontMock("../../store/scoreBoardStore.js");
jest.dontMock("jquery")
jest.dontMock('object-assign')

var ReactDOM = require('react-dom'),
    ScoreBoardStore = require('../../store/scoreBoardStore.js'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    Dispatcher = require("../../dispatcher/gameDispatcher.js"),
    $ = require("jquery"),

    loadScoresPayload = {
      type : "loadScores",
      playerName : "tester"
    },

    abortRequestPayload = {
      type : "abort"
    };
describe(" A test for ScoreBoardStore ", function (){
  beforeEach(function (){
    ScoreBoardStore.emitChange = 
    this.emit =
    this.on = 
    this.removeListener =
    this.eventCallback =  jest.genMockFunction();
    //setting scores
    this.scores = {
      currScores : 10,
      highScore : 20
    }
    ScoreBoardStore.getCurrentScore = jest.genMockFunction().mockReturnValueOnce(this.scores.currScores);
    ScoreBoardStore.getHighScore = jest.genMockFunction().mockReturnValueOnce(this.scores.highScore);
    //callback from action creator with payload
    this.callback = Dispatcher.register.mock.calls[0][0];
  })

  it("should register callback with dispatcher", function (){
    expect(Dispatcher.register.mock.calls.length).toBe(1)
  })

  it("should execute event functions",function(){
    ScoreBoardStore.emitChange();
    //testing emit function
    expect(this.emit).toBeCalled();
    ScoreBoardStore.addChangeListener(this.eventCallback);
    expect(this.on).toBeCalled();
    ScoreBoardStore.removeChangeListener(this.eventCallback);
    expect(this.removeListener).toBeCalled();
  });

  it("should get scores",function(){
    expect(ScoreBoardStore.getCurrentScore()).toEqual(this.scores.currScores);

  })
  it("should perform ajax calls on loadScores loadScoresPayload", function (){
    spyOn($, "ajax").andCallFake(function(options) {
        options.success();
    });
    this.callback(loadScoresPayload);
    expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/game/"+loadScoresPayload.playerName);
    expect(ScoreBoardStore.emitChange).toBeCalled()
  });

  it("should abort request on abortRequestPayload", function (){
    ScoreBoardStore.serverRequest = jest.genMockFunction();
    ScoreBoardStore.serverRequest.abort = jest.genMockFunction();
    this.callback(abortRequestPayload);
    expect(ScoreBoardStore.serverRequest.abort).toBeCalled();
  })
})

