import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./css/bootstrap.min.css";
import "./css/my-styles.css";

const name = "World";


// 1. -	React.createElement
const el1 = React.createElement("h1",
    {className: "title"},
    "This is a component, created by React.createElement"
);

// 2. -	functional component
var el2 =  (name) => (<p>Hello {name}! - functional component</p>);

// 3. -	React.Component

class El3 extends Component {
    constructor() {
        super();
        this.state = {
            value: "Click to change my name",
            buffer: ""
        };
        this.setName = this.setName.bind(this);
        this.setBuffer = this.setBuffer.bind(this);
    }
    setBuffer(e){
        this.setState({ buffer: e.target.value })
    }
    setName() {
        this.setState({value: this.state.buffer})
    }
    render() {
        return (
            <div className= "input-group mb-3 ">
            <input maxLength="30" placeholder="Type new name" id="input-area"
        onChange={this.setBuffer} className="form-control"/>
            <input type="button" value={this.state.value} onClick={this.setName} className="btn"/>
            </div>
    )
    }
}

// 4. -	React.PureComponent




const app = React.createElement('div', null, el1, el2(name), <El3/>);

const root = document.getElementById("root");
ReactDOM.render(app, root);
ReactDOM.render(Title, document.getElementById('root'));
