// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
};

Header.propTypes = { 
    title: React.PropTypes.string.isRequired
};

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <Counter score={props.score} />
        </div>
    );
};

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
};

function Counter(props) {
    return (
        <div className="player-score">
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> {props.score} </div>
                <button className="counter-action increment"> + </button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    score: React.PropTypes.number.isRequired
};

function Application(props) {
    return (
        //jsx is not strict html and cannot use 'class' to apply css styling. in
        //js class is already used. you can use a custom field do define a class
        //i.e. "className"
        <div className="scoreboard">
            <Header title={props.title} />
            <div className="players">
                <Player name="Jimbo Jones" score={31} />
                <Player name="Maurice LePen" score={28} />
            </div>
        </div> 
    );
};

Application.propTypes = { 
    title: React.PropTypes.string
};

Application.defaultProps = {
    title: "Scoreboard"
};

ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('container'));