jest.dontMock("../../components/highScore.react.jsx");
var ReactDOM = require('react-dom'),
    HighScore = require('../../components/highScore.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    ScoreBoardStore = require("../../store/scoreBoardStore"),
    ScoreBoardActionCreator = require('../../actions/scoreBoardActionCreator');

describe('highscore board',function(){

  beforeEach(function() {
    this.playerName = "tester";
    //Default score 
    this.initScore = 0;
    this.modifiedScore = 20;
    this.component = TestUtils.renderIntoDocument(<HighScore playerName={this.playerName}  />);
    //mocking _getHighScore 
    this.component._getHighScore = jest.genMockFunction().mockReturnValueOnce({highScore:this.modifiedScore});
    //defining nodes inside component
    this.scoreTextNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"h4");
    this.scoreNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"h1");
  });

  it("should exists",function(){
    expect(this.scoreTextNode.innerHTML.length).not.toEqual(0);
    expect(this.scoreNode.innerHTML.length).not.toEqual(0);
  });

  it("should render score",function(){
   expect(parseInt(this.scoreNode.textContent)).toEqual(this.initScore);
  });

  it("should modify state after mounting",function(){
    //before mounting 
    var defaultScore = this.component.state.highScore;
    expect(defaultScore).toEqual(this.initScore);
    this.component._onMount();

    //after mounting state should change
    expect(this.component.state.highScore).toEqual(this.modifiedScore);
    expect(this.component._getHighScore).toBeCalled();  
  });

  it("should add listeners to stores", function(){
    //testing if addChangeListener function is called 
    expect(ScoreBoardStore.addChangeListener).toBeCalled();

    //testing callbacks passed to listeners
    expect(typeof ScoreBoardStore.addChangeListener.mock.calls[0][0]).toEqual("function");
  });

  it("should load scores by calling action creators",function(){
    //testing loadScores function is called
    expect(ScoreBoardActionCreator.loadScores).toBeCalled();
  })

  //testing componentWillUnMount function
  it("should execute componentWillUnMount properly", function(){
    //unMounting component
    this.component.componentWillUnmount();

    expect(ScoreBoardActionCreator.abortRequest).toBeCalled();
  })
});