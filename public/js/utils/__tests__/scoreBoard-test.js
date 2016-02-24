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
    this.redir = "testUrl.com"
    this.component = TestUtils.renderIntoDocument(<ScoreBoard playerName={this.playerName} classname={this.classname} value={this.value}/>); 
    this.component.setState({redir:this.redir})
    //mocking handleScoreChange function
    this.currScoreNode = TestUtils.findRenderedComponentWithType(this.component, CurrScore);
    this.HighScoreNode = TestUtils.findRenderedComponentWithType(this.component, Highscore);
    this.ButtonNode = TestUtils.findRenderedComponentWithType(this.component, Button);
  });
  
  it("should render currScore component properly",function(){
    expect(this.currScoreNode).not.toBe(null);

    //triggering onChange even from currScore component 
    this.currScoreNode.props.onChange({currScores:20})

    //test to chect state has been handled properly by ScoreBoard
    expect(this.component.state.currScore).toEqual(20)
    expect(this.component.state.redir).toEqual("/game/" + this.playerName + "/score?score=20")
  });

  it("should render Highscore component properly",function(){
    expect(this.HighScoreNode).not.toBe(null);
    expect(this.HighScoreNode.props['playerName']).toEqual(this.playerName)
  });

  it("should render button component properly",function(){
    expect(this.ButtonNode).not.toBe(null);
    expect(this.ButtonNode.props.value).toEqual(this.value);
    expect(this.ButtonNode.props.redir).toEqual(this.redir);
  });
}); 
