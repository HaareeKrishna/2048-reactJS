jest.dontMock("../../components/currScore.react.jsx");
var ReactDOM = require('react-dom'),
    CurrScore = require('../../components/currScore.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react');


describe('current score board',function(){

	beforeEach(function() {
		this.playerName="tester";
    //Default score 
    this.initScore = "0";
		this.component = TestUtils.renderIntoDocument(<CurrScore playerName={this.playerName} onChange="" />);
    this.scoreTextNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"h4");
    this.scoreNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"h1")
  });

	it("should exists",function(){
    expect(this.scoreTextNode.length).not.toEqual(0);
    expect(this.scoreNode).not.toBe(null);
	});

  it("should render score",function(){
   expect(this.scoreNode.textContent).toEqual(this.initScore);
  })

})