var React = require("react");
var $ = require ('jquery')
//current score board component
var HighScore = React.createClass({
  getInitialState: function() {
		return {
			//initializing high score to 0 
    		highScore:0
    };
  },

  componentWillMount: function() {
    var source = "/game/"+this.props.playerName; 
    //making ajax call to get info of player
    this.serverRequest = $.get(source, function (result) {
      this.setState({
        highScore:result.scores
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
  //before unmounting aborting the request
    this.serverRequest.abort();
  },

  render:function(){
  	return(
  		//high score div)
  		<span>
				<h4 className = "score">HIGH SCORE<br/></h4>
				<h1 className = "num">{this.state.highScore}</h1>
			</span>
		)
  }
});
module.exports = HighScore;