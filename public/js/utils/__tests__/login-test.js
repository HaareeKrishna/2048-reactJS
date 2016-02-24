jest.dontMock("../../components/login.react.jsx");
var ReactDOM = require('react-dom'),
    Login = require('../../components/login.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    Button = require('../../components/button.react.jsx'),
    React = require('react');

describe('login page',function(){
	beforeEach(function() {
    	this.component = TestUtils.renderIntoDocument(<Login />);
      this.formNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"form");
  });

	it("should exists ",function(){
		expect(this.formNode.innerHTML.length).not.toEqual(0);
    expect(this.formNode.children.playerName).not.toBe(undefined)
    expect(this.formNode.children.playerButton).not.toBe(undefined)
    TestUtils.Simulate.submit(this.formNode);
	})
});