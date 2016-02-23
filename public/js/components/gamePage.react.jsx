var React=require("react");
var Grid=require("./grid.react.jsx");
var ScoreBoard=require("./scoreBoard.react.jsx");

var ReactDOM=require("react-dom")
//game page
var GamePage=React.createClass({
	render:function(){
		return (
			<div>
				<Grid />
				<ScoreBoard playerName={this.props.params.playerName} classname="info" value="GiveUp?"/>  
			</div>
		)
	
	}
})

module.exports=GamePage;