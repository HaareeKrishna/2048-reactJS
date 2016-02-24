jest.dontMock("../../components/button.react.jsx");
var ReactDOM = require('react-dom'),
    Button = require('../../components/button.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    React = require('react');

describe('The button component',function(){

  beforeEach(function() {
    this.value = "TEST";
    this.redir = "www.google.com";
    this.component = TestUtils.renderIntoDocument(<Button redir={this.redir} value={this.value} />);
    this.LinkNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"a");
    this.ButtonNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"button");

  });

  it("should exists",function(){
    expect(this.LinkNode.attributes['href'].value).toEqual(this.redir);
    expect(this.LinkNode.innerHTML).toEqual(this.value);
    expect(this.ButtonNode).not.toBe(null);
  });
});
