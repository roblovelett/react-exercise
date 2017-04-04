// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var roster = [
    {
        name: "Billy 01",
        score: 23,
        id: 1
    },
    {
        name: "Billy 02",
        score: 56,
        id: 2
    },
    {
        name: "Billy 03",
        score: 34,
        id: 3
    },
    {
        name: "Billy 04",
        score: 45,
        id: 4
    }
];

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
                {props.players.map(function(player){ //map method takes a function itself, takes each player inside our roster array
                    return (
                        <Player name={player.name} score={player.score} key={player.id} /> //key property is required on components rendered in a loop
                    );
                })}
            </div>
        </div> 
    );
};

Application.propTypes = { 
    title: React.PropTypes.string,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({ //shape defines the structure and proptypes of the object
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired
    })).isRequired
};

Application.defaultProps = {
    title: "Scoreboard"
};

ReactDOM.render(<Application title="My Scoreboard" players={roster} />, document.getElementById('container'));