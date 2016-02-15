var React=require("react");
var HighScore=require("./highScore.react.jsx")
var CurrScore=require("./currScore.react.jsx")
var Button=require("./button.react.jsx")
var $ = require ('jquery')
//scoreboard page

var ScoreBoard=React.createClass({
	getInitialState: function() {
    return {
      playerName: '',
      highScore: 0,
      currScores:0
    };
  },
  handleScoreChange:function(score){	
  	//handle score changed in currScore component
  	this.setState({
  		currScore:score.currScore,
  		redir:"/game/"+this.state.playername+"/score?score="+score.currScore
  	})
	},
	componentWillMount: function() {
  		var source="/game/"+this.props.playerName; 
	  	//making ajax call to get info of player
	    this.serverRequest = $.get(source, function (result) {
	      this.setState({
	      	currScores:result.currentScore?result.currentScore:0,
	        playername: result.userName,
	        highScore: result.scores
	      });

	    }.bind(this));
 	},

  componentWillUnmount: function() {
  	//before unmounting aborting the request
    this.serverRequest.abort();
  },

  render:function(){
  	
	  	return(
				<div className={this.props.buttonClass}>
	  			<h2>{this.state.playername}</h2>
					<CurrScore currentScore={this.state.currScores} onChange={this.handleScoreChange}/>
	  			<HighScore score={this.state.highScore}/>
	 				<Button redir={this.props.redir?this.props.redir:this.state.redir} value={this.props.value} />
	  		</div>
	  		)
	 }
});

module.exports=ScoreBoard;