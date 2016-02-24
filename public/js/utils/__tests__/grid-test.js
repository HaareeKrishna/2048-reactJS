jest.dontMock("../../components/grid.react.jsx");
jest.dontMock("../../store/gridStore");
jest.dontMock("../grid.js");
var ReactDOM = require('react-dom'),
    React = require('react'),
    Grid = require('../../components/grid.react.jsx'),
    TestUtils = require('react-addons-test-utils'),
    GridStore = require("../../store/gridStore");
//test for grid component 
describe('The grid ',function(){
  beforeEach(function() {
    this.testObject = {name : "test"};
    this.component = TestUtils.renderIntoDocument(<Grid />);
    this.tableNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"table");
    this.component._getGrid = jest.genMockFunction().mockReturnValueOnce(this.testObject);
    this.component.setState = jest.genMockFunction();
    this.component._checkKey = jest.genMockFunction();

    this.cells;
    //mocking GridStore fucntions
    GridStore.addChangeListener = jest.genMockFunction();

  });

  it("in which table should exists",function(){
    expect(this.tableNode.innerHTML.length).not.toEqual(0);
  });

  it("should add listeners to stores", function(){
    //testing if addChangeListener function is called after componentDidMount 
    this.component.componentDidMount();
    expect(GridStore.addChangeListener).toBeCalled();
    expect(typeof GridStore.addChangeListener.mock.calls[0][0]).toEqual("function")
  })

  //test for grid table
  describe("in which dim*dim cells should render",function(){

    beforeEach(function(){
      this.cells = [].slice.call(this.tableNode.querySelectorAll('td')).map(h => h.textContent); 
    });

    it("should have dim*dim length",function(){
      expect(this.cells.length-1).toEqual(15);
    })

    it("should have dim*dim -1 cells of values 0",function(){
      //checking only one cell have data initially
     var temp = this.cells.filter(val => val!=0);
      expect(temp.length).toEqual(1)
    })
  })

  it("should modify state after _onChange function",function(){
    this.component._onChange();
    //test for _getGrid to be Called
    expect(this.component._getGrid).toBeCalled();
    expect(this.component.setState).toBeCalled();
    //test if test object is being passed properly
    expect(this.component.setState.mock.calls[0][0]).toEqual(this.testObject);

  });

  /*it("should trigger checkKey function after keyDown function",function(){
    //simulate key down event
    TestUtils.Simulate.keyDown(document, {keyCode : 37});
    expect(this.component._checkKey).toBeCalled()
  })*/
})