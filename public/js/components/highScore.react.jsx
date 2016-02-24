var React = require("react");
var ScoreBoardStore = require("../store/scoreBoardStore");
var ScoreBoardActionCreator = require('../actions/scoreBoardActionCreator');

var getHighScore = function(store){
  return {
    highScore:store.getHighScore()
  }
}
//current score board component
var HighScore = React.createClass({
  getInitialState: function() {
		return {
			//initializing high score to 0 
    		highScore:0
    };
  },
  componentWillMount: function() {
    ScoreBoardStore.addChangeListener(this._onMount);
    ScoreBoardActionCreator.loadScores(this.props.playerName);
  },

  componentWillUnmount: function() {
    //before unmounting aborting the request
    ScoreBoardActionCreator.abortRequest();
  },

  render:function(){
  	return(
  		//high score div)
  		<span>
				<h4 className = "score">HIGH SCORE<br/></h4>
				<h1 className = "num">{this.state.highScore}</h1>
			</span>
		)
  },

  _onMount:function(){
    this.setState(this._getHighScore(ScoreBoardStore))
  },

  _getHighScore : getHighScore

});
module.exports = HighScore;