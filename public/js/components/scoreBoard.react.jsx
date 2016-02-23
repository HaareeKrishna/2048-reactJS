var React = require("react");
var HighScore = require("./highScore.react.jsx")
var CurrScore = require("./currScore.react.jsx")
var Button = require("./button.react.jsx")
//scoreboard page
var ScoreBoard  React.createClass({
	getInitialState: function() {
    return {
      playername: this.props.playerName
    };  
  },
  handleScoreChange:function(score){	
  	//handle score changed in currScore component
  	this.setState({
  		currScore:score.currScores,
  		redir:"/game/"+this.props.playerName+"/score?score="+score.currScores
 	 	})
	},
  render:function(){
	  return(
			<div className={this.props.classname}>
		  	<h2>{this.state.playername}</h2>
				<CurrScore playerName={this.props.playerName} onChange={this.handleScoreChange} />
	  		<HighScore playerName={this.props.playerName} />
	 			<Button redir={this.props.redir?this.props.redir:this.state.redir} value={this.props.value} />
	  	</div>
	  )
  }
});
module.exports = ScoreBoard;