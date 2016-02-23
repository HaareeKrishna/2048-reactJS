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
    expect(this.scoreTextNode).not.toBe(null);
    expect(this.scoreNode).not.toBe(null);
  });

  it("should render score",function(){
   expect(typeof parseInt(this.scoreNode.textContent)).toEqual("number");
  })
})