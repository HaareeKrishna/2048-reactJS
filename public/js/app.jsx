
var GamePage=require("./components/gamePage.react.jsx");
var Login=require("./components/login.react.jsx");
var DonePage=require("./components/donePage.react.jsx")
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory=ReactRouter.hashHistory;
var React = require('react');

//for react dev tools
window.React = React; 
var ReactDOM = require('react-dom');

//declaring routes
const routes=(
	<Router history={hashHistory}>
			<Route path="/game/:playerName" component={GamePage}/>
			<Route path="/" component={Login}/>
			<Route path="/game/:playerName/done" component={DonePage} />
	</Router>
	);
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('gameContainer'));
   