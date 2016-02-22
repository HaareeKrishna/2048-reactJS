jest.dontMock("../../components/button.react.jsx");
var ReactDOM = require('react-dom'),
    Button = require('../../components/button.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react'),
    $=require('jquery');

describe('The button component',function(){

  beforeEach(function() {
    this.value="TEST";
    this.redir="www.google.com";
    this.component = TestUtils.renderIntoDocument(<Button redir={this.redir} value={this.test} />);
    this.LinkNode=TestUtils.findRenderedDOMComponentWithTag(this.component,"a");
    
  });

  it("should exists",function(){
    expect(this.LinkNode.attributes['href'].value).toEqual(this.redir);

  });
  
});