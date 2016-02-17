jest.dontMock('../../components/currScore.react.jsx');
config.preprocessCachingDisabled=true;

jest.autoMockOff();

var ReactDOM = require('react-dom'),
    CurrScore = require('../../components/currScore.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    $=require('jquery');


describe('current score board',function(){
	beforeEach(function() {
		this.value=20;
		this.component = TestUtils.renderIntoDocument(<CurrScore currentScore={this.value} />);
	});
	it("should exists",function(){
		var contents=$(this.component).find(".num");
		expect(contents.innerHtml).toEqual(this.value);
	})

})