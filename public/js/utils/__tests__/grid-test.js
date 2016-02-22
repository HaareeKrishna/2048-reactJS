jest.dontMock("../grid.js");
jest.dontMock("../../components/grid.react.jsx");

//Loading grid.js for grid operations
var fs = require("fs");
eval(fs.readFileSync('public/js/lib/math.js','utf-8'));
//eval(math);
  
var grisJS = require('../grid.js'), 
    ReactDOM = require('react-dom'),
    React = require('react'),
    Grid = require('../../components/grid.react.jsx'),
    TestUtils = require('react-addons-test-utils');

//test for grid component 
describe('The grid ',function(){
  beforeEach(function() {
    this.component = TestUtils.renderIntoDocument(<Grid />);
    this.tableNode = TestUtils.findRenderedDOMComponentWithTag(this.component,"table");
    this.cells;
  });

  it("in which table should exists",function(){
    expect(this.tableNode).not.toBe(null);
  });

  //test for grid table
  describe("in which dim*dim cells should render",function(){

    beforeEach(function(){
      this.cells=[].slice.call(this.tableNode.querySelectorAll('td')).map(h => h.textContent); 
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

})