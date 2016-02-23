jest.dontMock("../../components/login.react.jsx");
var ReactDOM = require('react-dom'),
    Login = require('../../components/login.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    Button = require('../../components/button.react.jsx'),
    React = require('react');

describe('current score board',function(){
	beforeEach(function() {
    	this.component = TestUtils.renderIntoDocument(<Login />);
      this.formNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"form");
  });

	it("should exists ",function(){
		expect(this.formNode.innerHTML).not.toEqual(0);
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(this.component,"playerButton"));
	})
});