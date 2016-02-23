jest.dontMock("../../components/highScore.react.jsx");
var ReactDOM = require('react-dom'),
    Highscore = require('../../components/highScore.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react');
describe('highscore board',function(){  
  beforeEach(function() {
    this.playerName="tester";
    this.component = TestUtils.renderIntoDocument(<Highscore playerName={this.playerName} />);
    this.scoreTextNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"h4");
    this.scoreNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"h1")
  });

  it("should exists",function(){
    expect(this.scoreTextNode.innerHTML.length).not.toEqual(0);
    expect(this.scoreNode.innerHTML.length).not.toEqual(0);
  });

  it("should render score",function(){
   expect(typeof parseInt(this.scoreNode.textContent)).toEqual("number");
  })
})