jest.dontMock("../../components/currScore.react.jsx");
var ReactDOM = require('react-dom'),
    CurrScore = require('../../components/currScore.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    GridStore = require("../../store/gridStore"),
    ScoreBoardStore = require("../../store/scoreBoardStore"),
    ScoreBoardActionCreator = require('../../actions/scoreBoardActionCreator');

describe('current score board',function(){

	beforeEach(function() {
		this.playerName="tester";
    //Default score 
    this.initScore = 0;
    this.modifiedScore = 20;
    this.handleChange = jest.genMockFunction();
		this.component = TestUtils.renderIntoDocument(<CurrScore playerName={this.playerName} onChange={this.handleChange} />);
    //mocking _getCurrentScore 
    this.component._getCurrentScore = jest.genMockFunction().mockReturnValueOnce({currScores:this.modifiedScore});
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

  it("should execute _onChange function and modify state after it",function(){
    //before _onChange 
    var defaultScore = this.component.state.currScores;
    expect(defaultScore).toEqual(this.initScore);
    this.component._onChange();

    //after _onChange state should change
    expect(this.component.state.currScores).toEqual(this.modifiedScore);
    expect(this.component._getCurrentScore).toBeCalled();  
    expect(this.handleChange).toBeCalled();  
  });
  it("should execute _onMount function and modify state after it",function(){
    //before _onChange 
    this.component.state.currScores = this.initScore;
    expect(this.component.state.currScores).toEqual(this.initScore);
    this.component._onMount();

    //after _onChange state should change
    expect(this.component.state.currScores).toEqual(this.modifiedScore);
    expect(this.component._getCurrentScore).toBeCalled();   
  });

  it("should add listeners to stores", function(){
    //testing if addChangeListener function is called 
    expect(GridStore.addChangeListener).toBeCalled();
    expect(ScoreBoardStore.addChangeListener).toBeCalled();

    //testing callbacks passed to listeners
    expect(typeof GridStore.addChangeListener.mock.calls[0][0]).toEqual("function");
    expect(typeof ScoreBoardStore.addChangeListener.mock.calls[0][0]).toEqual("function");
  });

  it("should load scores by calling action creators",function(){
    //testing loadScores function is called
     expect(ScoreBoardActionCreator.loadScores).toBeCalled();
     //testing playerName is passed properly
     expect(ScoreBoardActionCreator.loadScores.mock.calls[0][0]).toEqual(this.playerName);
  })

  //testing componentWillUnMount function
  it("should execute componentWillUnMount properly", function(){
    //unMounting component
    this.component.componentWillUnmount();

    expect(ScoreBoardActionCreator.abortRequest).toBeCalled();
    expect(GridStore.removeChangeListener).toBeCalled();
    expect(ScoreBoardStore.removeChangeListener).toBeCalled();
  })
});