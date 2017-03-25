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

Application.propTypes = { //sets property values to be passed into the Application component
    //React.PropTypes declares property, in this case string. isRequired demands
    //title attribute to be passed into Application component
    title: React.PropTypes.string/*.isRequired*/,
};

Application.defaultProps = { //sets default property values
    title: "Scoreboard",
};

ReactDOM.render(<Application />, document.getElementById('container'));