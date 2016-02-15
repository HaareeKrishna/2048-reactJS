
var React=require("react");
var GridStore=require("../store/gridStore.jsx");
//current score board component
var CurrentScore=React.createClass({
	getInitialState: function() {
		return {
				//initializing current score to 0 
    		currScore:0,

    	};
  	},
  	componentDidMount:function(){
  		GridStore.addChangeListener(this._onChange);
  	},
  	render:function(){
  		return(
  			//current score div
				<div>
					<span>
						<h4 className="score">SCORE<br/></h4>
						<h1 id="currScore"  className="num">{this.props.currentScore?this.props.currentScore:this.state.currScore}</h1>
					</span>
				</div>
		
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
		currScore:GridStore.getCurrentScore()
	}
}
module.exports=CurrentScore;