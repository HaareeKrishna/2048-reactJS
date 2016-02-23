var React = require("react");
var Button = require("./button.react.jsx");
//login page to collect name from player
var Login=React.createClass({
  
  render:function(){
  	return(
  		<div className="playerInfo">
  			<h1>2048</h1>
  			<form action="/game" method="POST" name="playerInfo">
          <input type="text" name="playerName" className="playerName" placeholder="Enter your name"/>
          <input type="submit" name="playerButton" className="playerButton" value="Go!" />
        </form>
      </div>
		)
  }
});
module.exports = Login;