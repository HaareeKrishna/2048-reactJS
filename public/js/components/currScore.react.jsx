var React = require("react");
var GridStore = require("../store/gridStore");
var ScoreBoardStore = require("../store/scoreBoardStore");
var ScoreBoardActionCreator = require('../actions/scoreBoardActionCreator');

//gets score from store
var getCurrentScore = function(store){
  return {
    currScores:store.getCurrentScore()
  }
}

//current score board component
var CurrentScore = React.createClass({

	getInitialState: function() {
		return {
			//initializing current score to 0 
    	currScores:0
    };
  },

  componentDidMount: function(){
    GridStore.addChangeListener(this._onChange);
    ScoreBoardStore.addChangeListener(this._onMount);
    ScoreBoardActionCreator.loadScores(this.props.playerName);
  },

 	componentWillUnmount: function() {
    GridStore.removeChangeListener(this._onChange);
    ScoreBoardStore.removeChangeListener(this._onMount);
    //before unmounting aborting the request
    ScoreBoardActionCreator.abortRequest();
  },

  render: function(){
  	return(
  		//current score div
			<span>
				<h4 className="score">SCORE<br/></h4>
				<h1 id="currScore" className="num">{this.state.currScores}</h1>
			</span>
		  );
  },

  _onChange: function() {
		this.setState(this._getCurrentScore(GridStore));
		this.props.onChange(this._getCurrentScore(GridStore));
  },

  _onMount: function(){
    this.setState(this._getCurrentScore(ScoreBoardStore))
  },
  _getCurrentScore : getCurrentScore
});


module.exports=CurrentScore;