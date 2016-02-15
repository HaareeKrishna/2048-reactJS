var React=require("react");

//login page to collect name from player
var Login=React.createClass({
  	render:function(){
  		return(
  			<div className="playerInfo">
				<h1>2048</h1>
				<form action="/game" method="post" name="playerInfo">
					<input type="text" name="playerName" className="playerName" placeholder="Enter your name"/>
					<input type="submit" className="playerButton" value="Go!" />
				</form>

			</div>
			)
  	}
  });


module.exports=Login;