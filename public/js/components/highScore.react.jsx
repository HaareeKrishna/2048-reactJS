var React=require("react");
//current score board component
var HighScore=React.createClass({

	getInitialState: function() {
		return {
			//initializing high score to 0 
    		highScore:0
    	};
  	},
  	render:function(){
  		return(
  			//high score div)
  			<span>
				<h4 className="score">HIGH SCORE<br/></h4>
				<h1 className="num">{this.props.score}</h1>
			</span>
			)
  		}
});
module.exports=HighScore;