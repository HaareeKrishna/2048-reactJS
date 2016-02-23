
var GamePage = require("./components/gamePage.react.jsx");
var Login = require("./components/login.react.jsx");
var DonePage = require("./components/gameOver.react.jsx")
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var React = require('react');
//for react dev tools
window.React = React; 
var ReactDOM = require('react-dom');

//declaring routes
const routes=(
  <Router>
    <Route path="/game/:playerName" component={GamePage} />
    <Route path="/game" component={Login} />
    <Route path="/game/:playerName/done" component={DonePage} />
  </Router>
  );
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('gameContainer'));