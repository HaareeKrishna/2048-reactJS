var React = require("react");

//Button component which share similar style but different actions which are passed through parameters
var Button = React.createClass({
  render:function(){
    return(
			<div className = "giveUp">
				<button><a href={this.props.redir}>{this.props.value}</a></button>
			</div>
		)
  }
});
module.exports = Button;