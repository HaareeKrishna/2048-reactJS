jest.dontMock("../../components/scoreBoard.react.jsx");
var ReactDOM = require('react-dom'),
    ScoreBoard = require('../../components/scoreBoard.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    CurrScore = require('../../components/currScore.react.jsx'),
    Highscore = require('../../components/highScore.react.jsx'),
    Button = require('../../components/button.react.jsx');
//test for scoreboard
describe("A scoreboard test",function(){
  beforeEach(function() {
    this.playerName = "TESTER";
    this.classname = "info";
    this.value = "GiveUp?";
    this.component = TestUtils.renderIntoDocument(<ScoreBoard playerName={this.playerName} classname={this.classname} value={this.value}/>); 
    this.currScoreNode = TestUtils.findRenderedComponentWithType(this.component, CurrScore);
    this.HighScoreNode = TestUtils.findRenderedComponentWithType(this.component, Highscore);
    this.buttonNode = TestUtils.findRenderedComponentWithType(this.component, Highscore);
  });

  it("should render currScore component properly",function(){
    expect(this.currScoreNode).not.toBe(null);
    
  });

  it("should render Highscore component properly",function(){
    expect(this.HighScoreNode).not.toBe(null);
  });

  it("should render button component properly",function(){
    expect(this.buttonNode).not.toBe(null);
  });
}); 
