
var React = require("react");
var GridStore = require("../store/gridStore.jsx");
var GridActionCreator = require('../actions/gridActionCreators.jsx');
//binding function to keyDown event
document.onkeydown = checkKey;


var Grid=React.createClass({

	getInitialState: function() {	
		return {
    		gridData: GridStore.createGrid()
			};
   },

	componentDidMount:function(){
  		GridStore.addChangeListener(this._onChange);
  	},

	render:function(){
		var gridData=this.state.gridData._data;
		return (
			//generating grid from matrix
			<div className='gridBody'><table>
				{
					gridData.map(function(row){

						var cells = row.map(function(cell,index){

							if(cell == 0) value = "";
							var name = 'class_'+cell;
							return <td className = {name}><span>{cell}</span></td>;
						})
						return <tr>{cells}</tr>;
					})
				}
			</table></div>
		);
	},

	_onChange: function() {
		this.setState(getGrid());
  }
});

function getGrid(){
	return {
		gridData:GridStore.getGrid()
	};
}

function checkKey(e) {
	GridActionCreator.modifyGrid(event.keyCode);
}
module.exports=Grid;