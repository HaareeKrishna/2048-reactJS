var React=require("react");
var ScoreBoard=require("./scoreBoard.react.jsx");
var ReactDOM=require("react-dom")
//Final page after gameover
var DonePage=React.createClass({
	render:function(){
		return(
			<ScoreBoard playerName={this.props.params.playerName} value="Try again?" buttonclass="scores" redir="/#/"/>
			)
	}
});
module.exports=DonePage;