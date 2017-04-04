// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

function Application(props) {
    return (
        //jsx is not strict html and cannot use 'class' to apply css styling. in
        //js class is already used. you can use a custom field do define a class
        //i.e. "className"
        <div className="scoreboard">
            <div className="header">
                <h1>{props.title}</h1>
            </div>
            <div className="players">
                <div className="player">
                    <div className="player-name">
                        Jimbo Jones
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score"> 31 </div>
                            <button className="counter-action increment"> + </button>
                        </div>
                    </div>
                </div>
                <div className="player">
                    <div className="player-name">
                        Maurice LePen
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score"> 28 </div>
                            <button className="counter-action increment"> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

Application.propTypes = { 
    title: React.PropTypes.string,
};

Application.defaultProps = {
    title: "Scoreboard"
};

ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('container'));