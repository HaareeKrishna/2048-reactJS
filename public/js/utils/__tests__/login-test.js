jest.dontMock('../../components/login.react.jsx');


jest.autoMockOff();

var ReactDOM = require('react-dom'),
    Login = require('../../components/login.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react');	

describe('current score board',function(){
	beforeEach(function() {
		var value="username"
    	this.component = TestUtils.renderIntoDocument(<Login />);

	});
	it("should exists ",function(){
		expect(TestUtils.isCompositeComponent(this.component)).toBeTruthy();
	})
});