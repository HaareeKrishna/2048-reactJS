var React = require("react");
var GridStore = require("../store/gridStore.jsx");
var $ = require ('jquery')
//current score board component
var CurrentScore=React.createClass({

	getInitialState: function() {
		return {
				//initializing current score to 0 
    		currScores:0
      };
  	},

  componentWillMount: function() {
  	var source="/game/"+this.props.playerName; 
	  //making ajax call to get info of player
	  this.serverRequest = $.get(source, function (result) {
	    this.setState({
	      currScores:result.currScore
	    });
    }.bind(this));
 	},

 	componentWillUnmount: function() {
    //before unmounting aborting the request
    this.serverRequest.abort();
  },

  componentDidMount:function(){
  	GridStore.addChangeListener(this._onChange);
  },

  render:function(){
  	return(
  		//current score div
			<span>
				<h4 className="score">SCORE<br/></h4>
				<h1 id="currScore"  className="num">{this.state.currScores}</h1>
			</span>
		  );
  },

  _onChange:function() {
		this.setState(getCurrentScore());
		this.props.onChange(getCurrentScore());
  }
});

//gets score from store
var getCurrentScore=function(){
	return {
		currScores:GridStore.getCurrentScore()
	}
}
module.exports=CurrentScore;